import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'durozen.in',
          },
        ],
        destination: 'https://www.durozen.in/:path*',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
