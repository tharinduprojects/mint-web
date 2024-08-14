/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        port: '1337',
      }
    ],
    domains: ['joyful-egg-6af1fd8511.media.strapiapp.com'],
  },
};

export default nextConfig;
