/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.imagin.studio"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
