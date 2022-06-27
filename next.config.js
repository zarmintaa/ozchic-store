/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ozchic-store-api.herokuapp.com"],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000/api/auth",
    NEXT_PUBLIC_SECRET:
      process.env.NEXT_PUBLIC_SECRET || "69f8fd4d54342b7ee3b0fcdf6def434c",
  },
};
module.exports = nextConfig;
