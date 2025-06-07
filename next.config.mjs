/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deserving-kindness-f717134482.media.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
