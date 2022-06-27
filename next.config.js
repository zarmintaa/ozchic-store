/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ozchic-store-api.herokuapp.com"],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    NEXTAUTH_URL: "https://test-ozchic.vercel.app/",
  },
};
module.exports = nextConfig;
