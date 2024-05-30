/** @type {import('next').NextConfig} */
const nextConfig = {
  //   distDir: "dist",
  output: "standalone",
  serverActions: true,
  images: {
    domains: ["*"], // Allow loading images from any remote domain
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
};

module.exports = nextConfig;
