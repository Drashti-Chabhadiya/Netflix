/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'], // ✅ Added Cloudinary
  },
  env: {
    NEXT_API_BASE_URL:
      process.env.NEXT_API_BASE_URL || 'http://localhost:3000/api',
    NEXT_CLOUDINARY_API_KEY:
      process.env.NEXT_CLOUDINARY_API_KEY || 'your_cloudinary_api_key',
    NEXT_CLOUDINARY_API_SECRET:
      process.env.NEXT_CLOUDINARY_API_SECRET || 'your_cloudinary_api_secret',
    NEXT_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_CLOUDINARY_CLOUD_NAME || 'your_cloudinary_cloud_name',
  },
  reactStrictMode: true,
  // experimental: {
  //   scrollRestoration: false,
  // },
};

export default nextConfig;
