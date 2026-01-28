/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect non-www to www to consolidate canonical URL
  async redirects() {
    return [
      // Redirect non-www to www (both http and https handled by hosting)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "inboxfiles.com",
          },
        ],
        destination: "https://www.inboxfiles.com/:path*",
        permanent: true, // 301 redirect for SEO
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
