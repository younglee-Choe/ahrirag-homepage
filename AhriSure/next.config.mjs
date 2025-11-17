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
};

export default nextConfig;
