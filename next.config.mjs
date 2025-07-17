/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'], // ✅ Added Cloudinary
  },
  // experimental: {
  //   scrollRestoration: false,
  // },
};

export default nextConfig;
