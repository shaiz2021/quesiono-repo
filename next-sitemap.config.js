/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://quesiono.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    let priority = 0.8;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    } else if (path.startsWith("/services")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/blog")) {
      priority = 0.8;
      changefreq = "daily";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    additionalSitemaps: ["https://quesiono.vercel.app/sitemap.xml"],
  },
};
