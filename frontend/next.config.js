const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://ai-chat-backend-p1cq.onrender.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
  // Ensure proper output
  output: 'standalone',
};

module.exports = nextConfig;
