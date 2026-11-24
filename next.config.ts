import type { NextConfig } from "next";

const security = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // WebP only: AVIF softens the thin text of UI screenshots. Qualities used: 90 (project cards). The popup and the portrait are served untouched (`unoptimized`).
  images: { formats: ["image/webp"], qualities: [75, 90, 95], minimumCacheTTL: 60 * 60 * 24 * 30 },
  // Strip console.* from production bundles (errors and warnings are kept).
  compiler: { removeConsole: { exclude: ["error", "warn"] } },
  async headers() {
    return [
      { source: "/:path*", headers: security },
      { source: "/icons/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
};

export default nextConfig;
