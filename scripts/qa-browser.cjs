const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const deps = process.env.QA_MODULES || "/tmp/quesiono-qa/node_modules";
const { chromium } = require(path.join(deps, "playwright-core"));
const AxeBuilder = require(path.join(deps, "@axe-core/playwright")).default;
require("./read-data.cjs");
const { allRoutes } = require("../src/lib/routes.ts");
const { roleArchive } = require("../src/data/studio.ts");
const base = process.env.QA_BASE_URL || "http://localhost:3000";
const output = process.env.QA_OUTPUT || "/tmp/quesiono-qa/results";
fs.mkdirSync(output, { recursive: true });
const routes = [
  ...new Set([
    ...allRoutes().map((r) => r.href),
    ...roleArchive.map((r) => "/careers/" + r.slug),
  ]),
];
const report = {
  routes: [],
  responsive: [],
  accessibility: [],
  interactions: [],
  issues: [],
};
(async () => {
  const browser = await chromium.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox"],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const links = new Set(),
    titles = new Set();
  page.on("pageerror", (error) =>
    report.issues.push({
      type: "pageerror",
      url: page.url(),
      message: error.message,
    }),
  );
  for (const route of routes) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    const result = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      h1: document.querySelectorAll("main h1").length,
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      images: [...document.images]
        .filter((i) => i.complete && i.naturalWidth === 0)
        .map((i) => i.src),
      ids: [...document.querySelectorAll("[id]")].map((e) => e.id),
      links: [...document.querySelectorAll("a[href]")].map((a) =>
        a.getAttribute("href"),
      ),
      jsonld: [
        ...document.querySelectorAll('script[type="application/ld+json"]'),
      ].map((s) => {
        try {
          return JSON.parse(s.textContent);
        } catch {
          return null;
        }
      }),
    }));
    const errors = [];
    if (response.status() !== 200) errors.push("HTTP " + response.status());
    if (result.h1 !== 1) errors.push("h1 count " + result.h1);
    if (!result.description) errors.push("missing description");
    if (
      result.canonical !==
      "https://quesiono.com" + (route === "/" ? "/" : route)
    )
      errors.push("canonical " + result.canonical);
    if (titles.has(result.title)) errors.push("duplicate title");
    titles.add(result.title);
    if (result.overflow) errors.push("horizontal overflow");
    if (result.images.length)
      errors.push("broken images " + result.images.join(","));
    if (result.ids.length !== new Set(result.ids).size)
      errors.push("duplicate element IDs");
    if (result.jsonld.includes(null)) errors.push("invalid JSON-LD");
    for (const href of result.links) {
      if (href.startsWith("/")) links.add(href);
      if (href.startsWith("#") && !result.ids.includes(href.slice(1)))
        errors.push("missing anchor " + href);
      if (href === "#") errors.push("empty link");
    }
    if (errors.length) report.issues.push({ route, errors });
    report.routes.push({
      route,
      status: response.status(),
      title: result.title,
    });
  }
  console.log(`Visited ${routes.length} routes.`);
  // Internal destinations including cross-page anchors, checked against rendered DOM.
  const hashes = new Map();
  for (const href of links) {
    const u = new URL(href, base);
    if (u.pathname.startsWith("/api/") || u.pathname === "/sitemap.xml")
      continue;
    if (!routes.includes(u.pathname))
      report.issues.push({ type: "unknown internal route", href });
    if (u.hash) {
      const set = hashes.get(u.pathname) || new Set();
      set.add(decodeURIComponent(u.hash.slice(1)));
      hashes.set(u.pathname, set);
    }
  }
  for (const [route, ids] of hashes) {
    await page.goto(base + route);
    for (const id of ids) {
      if (!(await page.locator(`[id="${id}"]`).count()))
        report.issues.push({ type: "missing destination anchor", route, id });
    }
  }
  const samples = [
    "/",
    "/services",
    "/services/wordpress-development",
    "/services/seo/local-seo",
    "/portfolio",
    "/portfolio/local-restaurant-website",
    "/industries/healthcare",
    "/contact",
    "/pricing",
    "/process",
    "/about",
    "/faq",
    "/blog",
    "/blog/core-web-vitals-guide",
    "/products",
    "/careers",
    "/testimonials",
    "/privacy-policy",
    "/sitemap",
  ];
  for (const width of [320, 390, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of samples) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      const overflow = await page.evaluate(() => ({
        root: document.documentElement.scrollWidth > innerWidth + 1,
        offenders: [...document.querySelectorAll("main *")]
          .filter((e) => e.getBoundingClientRect().right > innerWidth + 2)
          .slice(0, 5)
          .map((e) => e.tagName + "." + e.className),
      }));
      report.responsive.push({ route, width, overflow: overflow.root });
      if (overflow.root) report.issues.push({ route, width, overflow });
    }
    if (width === 390) {
      await page.goto(base + "/");
      await page.screenshot({
        path: output + "/home-mobile.png",
        fullPage: true,
      });
      await page.goto(
        base +
          "/contact?service=technical-seo&source=%2Fservices%2Fseo%2Ftechnical-seo",
      );
      await page.screenshot({
        path: output + "/contact-mobile.png",
        fullPage: true,
      });
    }
  }
  console.log(`Checked ${report.responsive.length} responsive layouts.`);
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const route of samples) {
    await page.goto(base + route, { waitUntil: "networkidle" });
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    report.accessibility.push({
      route,
      violations: axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
  }
  await page.goto(base + "/");
  await page.screenshot({ path: output + "/home-desktop.png", fullPage: true });
  await page.getByRole("button", { name: "Services", exact: true }).click();
  await assert.equal(await page.locator("#nav-services").isVisible(), true);
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#nav-services").isVisible(), false);
  report.interactions.push("Desktop menu and Escape");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open menu" }).click();
  assert.equal(await page.locator("dialog").evaluate((d) => d.open), true);
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(() => !!document.activeElement.closest("dialog")),
    true,
  );
  await page.keyboard.press("Shift+Tab");
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("dialog").evaluate((d) => d.open), false);
  assert.equal(
    await page
      .getByRole("button", { name: "Open menu" })
      .evaluate((e) => e === document.activeElement),
    true,
  );
  report.interactions.push(
    "Mobile modal, focus containment, Escape and focus return",
  );
  await page.goto(base + "/faq");
  const disclosure = page.locator("main details").first();
  await disclosure.locator("summary").focus();
  await page.keyboard.press("Enter");
  assert.equal(await disclosure.evaluate((e) => e.open), true);
  report.interactions.push("Keyboard FAQ disclosure");
  await page.goto(base + "/portfolio");
  await page.getByRole("button", { name: "Real estate", exact: true }).click();
  assert.equal(await page.locator("main article").count(), 1);
  report.interactions.push("Portfolio category filter");
  await page.goto(base + "/blog");
  await page.getByRole("searchbox").fill("Core Web Vitals");
  assert.equal(await page.getByRole("status").innerText(), "1 article");
  report.interactions.push("Journal search");
  await page.goto(
    base +
      "/contact?service=technical-seo&source=%2Fservices%2Fseo%2Ftechnical-seo",
  );
  await page.waitForFunction(
    () => document.querySelector("#contact-service")?.value === "technical-seo",
  );
  assert.equal(
    await page.locator("#contact-service").inputValue(),
    "technical-seo",
  );
  await page.getByRole("button", { name: "Send project enquiry" }).click();
  assert.ok(await page.locator("#name-error").isVisible());
  await page.locator("#contact-name").fill("QA Browser");
  await page.locator("#contact-email").fill("qa@example.com");
  await page
    .locator("#contact-message")
    .fill("Please help review our website performance.");
  await page.getByRole("checkbox").check();
  let submitted;
  await page.route("**/api/contact", async (route) => {
    submitted = route.request().postDataJSON();
    await route.fulfill({
      status: 502,
      contentType: "application/json",
      body: JSON.stringify({
        error: "Delivery could not be confirmed.",
        fallback: true,
      }),
    });
  });
  await page.getByRole("button", { name: "Send project enquiry" }).click();
  await page
    .getByText("Delivery could not be confirmed.", { exact: true })
    .waitFor();
  assert.equal(await page.locator("#contact-name").inputValue(), "QA Browser");
  assert.equal(submitted.service, "technical-seo");
  assert.equal(submitted.source, "/services/seo/technical-seo");
  assert.ok(
    await page
      .getByRole("link", { name: "Open an email draft with your details" })
      .getAttribute("href"),
  );
  await page.unroute("**/api/contact");
  await page.route("**/api/contact", async (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    }),
  );
  await page.getByRole("button", { name: "Send project enquiry" }).click();
  await page
    .getByRole("heading", { name: "Thank you. Your enquiry is on its way." })
    .waitFor();
  report.interactions.push(
    "Service preselection, required validation, preserved failed form, source attribution, email fallback and confirmed success (mocked)",
  );
  await page.goto(base + "/does-not-exist");
  assert.equal(await page.getByRole("heading", { level: 1 }).count(), 1);
  report.interactions.push("404 recovery page");
  const noJs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const noJsPage = await noJs.newPage();
  await noJsPage.goto(base + "/");
  assert.equal(await noJsPage.locator("main h1").isVisible(), true);
  await noJsPage.goto(base + "/faq");
  assert.ok(await noJsPage.locator("main details").count());
  assert.equal(await noJsPage.locator("main summary").first().isVisible(), true);
  assert.ok((await noJsPage.locator("main details").first().textContent())?.trim());
  report.interactions.push("No-JavaScript core content and FAQ access");
  fs.writeFileSync(output + "/report.json", JSON.stringify(report, null, 2));
  console.log(
    JSON.stringify(
      {
        routes: report.routes.length,
        responsive: report.responsive.length,
        accessibility: report.accessibility.filter((a) => a.violations.length),
        issues: report.issues,
        interactions: report.interactions,
      },
      null,
      2,
    ),
  );
  await browser.close();
  if (
    report.issues.length ||
    report.accessibility.some((a) => a.violations.length)
  )
    process.exitCode = 1;
})().catch((e) => {
  fs.writeFileSync(output + "/report.json", JSON.stringify(report, null, 2));
  console.error(e);
  process.exit(1);
});
