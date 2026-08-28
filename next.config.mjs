/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    // All visuals are locally authored (SVG/CSS art + files under /public),
    // so the optimizer needs no remote hosts. Previously this allowed
    // hostname "**" alongside dangerouslyAllowSVG, which let any host push a
    // script-bearing SVG through the optimizer.
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
