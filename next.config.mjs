/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'heroic-peace-ef54ee0180.media.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
