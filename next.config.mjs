/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'], // ✅ Added Cloudinary
  },
  env: {
    NEXT_API_BASE_URL: process.env.NEXT_API_BASE_URL || 'http://localhost:3000/api',
  },
  reactStrictMode: true,
  // experimental: {
  //   scrollRestoration: false,
  // },
};

export default nextConfig;
