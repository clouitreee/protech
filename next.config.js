/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['app', 'src', 'functions'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;

