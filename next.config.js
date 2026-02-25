/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable Emotion support
  compiler: {
    emotion: true,
  },
  // Configure Turbopack
  turbopack: {},
};

export default nextConfig;