/*
 * Next Config
 */

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '10.10.0.10',
            port: '1337',
            pathname: '/uploads/**',
          },
        ],
      },
};

export default withNextIntl(nextConfig);
