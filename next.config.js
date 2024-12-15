/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

module.exports = nextConfig;
