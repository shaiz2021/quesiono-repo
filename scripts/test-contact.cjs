const assert = require("node:assert/strict");
require("./read-data.cjs");
const Module = require("module");
const originalLoad = Module._load;
let mode = "success",
  sent;
Module._load = function (id, ...args) {
  if (id === "resend")
    return {
      Resend: class {
        constructor() {
          this.emails = {
            send: async (payload) => {
              sent = payload;
              if (mode === "throw") throw new Error("transport");
              return mode === "reject"
                ? { error: { message: "rejected" } }
                : { data: { id: "test-message" } };
            },
          };
        }
      },
    };
  return originalLoad.call(this, id, ...args);
};
const { POST, GET } = require("../src/app/api/contact/route.ts");
let ip = 0;
const valid = {
  name: "QA User",
  email: "qa@example.com",
  message: "Please help improve our website.",
  consent: true,
  service: "technical-seo",
  website: "",
  websiteUrl: "https://example.com",
  source: "/services/seo/technical-seo",
  utm_source: "qa",
};
const request = (body, extra = {}, raw = false) =>
  new Request("https://quesiono.com/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://quesiono.com",
      "x-forwarded-for": `qa-${ip++}`,
      ...extra,
    },
    body: raw ? body : JSON.stringify(body),
  });
let passed = 0;
async function check(label, req, status, inspect) {
  const response = await POST(req);
  assert.equal(response.status, status, label);
  const body = await response.json();
  if (inspect) inspect(body);
  passed++;
}
(async () => {
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_FROM;
  await check("invalid JSON", request("{", {}, true), 400);
  await check("array rejected", request([]), 400);
  await check("required validation", request({}), 400, (b) =>
    assert.ok(
      b.errors.name && b.errors.email && b.errors.message && b.errors.consent,
    ),
  );
  await check("wrong types", request({ ...valid, name: { bad: true } }), 400);
  await check(
    "overlong field",
    request({ ...valid, name: "x".repeat(121) }),
    400,
  );
  await check(
    "message limit",
    request({ ...valid, message: "x".repeat(5001) }),
    400,
  );
  await check("body cap", request("x".repeat(24001), {}, true), 413);
  await check(
    "origin rejection",
    request(valid, { Origin: "https://example.net" }),
    403,
  );
  await check(
    "content type rejection",
    request(valid, { "Content-Type": "text/plain" }),
    415,
  );
  await check(
    "spam rejected without fake success",
    request({ ...valid, website: "https://spam.test" }),
    400,
    (b) => assert.notEqual(b.ok, true),
  );
  await check("consent required", request({ ...valid, consent: false }), 400);
  await check(
    "unknown service",
    request({ ...valid, service: "not-real" }),
    400,
  );
  await check(
    "unsafe website protocol",
    request({ ...valid, websiteUrl: "javascript:alert(1)" }),
    400,
  );
  await check("transport unconfigured", request(valid), 503, (b) =>
    assert.equal(b.fallback, true),
  );
  process.env.RESEND_API_KEY = "qa-not-real";
  process.env.CONTACT_FROM = "Quesiono <test@example.com>";
  await check(
    "accepted delivery",
    request({
      ...valid,
      name: "<img src=x>",
      message: "Test <script>alert(1)</script> body",
      source: "/services/seo?private=value",
      referrer: "https://example.org/private?email=x",
    }),
    200,
    (b) => assert.equal(b.ok, true),
  );
  assert.ok(sent.html.includes("&lt;script&gt;"));
  assert.ok(!sent.html.includes("<script>"));
  assert.ok(!sent.text.includes("private=value"));
  assert.ok(!sent.text.includes("/private?"));
  assert.equal(sent.replyTo, valid.email);
  mode = "reject";
  await check("provider rejection", request(valid), 502, (b) =>
    assert.notEqual(b.ok, true),
  );
  mode = "throw";
  await check("transport exception", request(valid), 502, (b) =>
    assert.notEqual(b.ok, true),
  );
  mode = "success";
  for (let i = 0; i < 5; i++)
    await check(
      "per-IP allowance",
      request(valid, { "x-forwarded-for": "rate-test" }),
      200,
    );
  await check(
    "rate limit",
    request(valid, { "x-forwarded-for": "rate-test" }),
    429,
  );
  const get = await GET();
  assert.equal(get.status, 405);
  assert.equal(get.headers.get("allow"), "POST");
  passed++;
  console.log(
    `PASS: ${passed} contact API checks; provider mocked, no email sent.`,
  );
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
