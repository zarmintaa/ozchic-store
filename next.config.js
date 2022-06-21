/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ozchic-store-api.herokuapp.com"],
    formats: ["image/avif", "image/webp"],
  },
};
module.exports = nextConfig;
