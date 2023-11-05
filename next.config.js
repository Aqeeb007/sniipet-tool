/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: "/webapp/snippettool/:path*",
        destination: "/webapp/snippettool/",
      },
    ];
  },
  basePath: "/webapp/snippettool",
  output: "export",
  images: {
    domains: ["images.pexels.com", "img.icons8.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
