/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Tambahkan hostname di sini
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',  // Hanya hostname, bukan path lengkap
      },
    ],
  },
};

export default nextConfig;
