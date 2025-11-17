/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/AhriSure',
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.219.155:3000',
    'http://127.0.0.1:3000',
  ],
};

export default nextConfig;
