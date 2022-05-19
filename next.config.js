// see https://github.com/martpie/next-transpile-modules#readme
const withTM = require('next-transpile-modules')(['@winzeland/winzer']);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['localhost', 'www.winzeland.com', 'testnet.winzeland.com'],
  },
  async rewrites() {
    return [
      { source: '/meta/winzer/:id.svg', destination: '/api/winzer/image' },
      { source: '/meta/winzer/:id', destination: '/api/winzer/metadata' },
      {
        source: '/meta/resources/:id.svg',
        destination: '/api/resources/image',
      },
      { source: '/meta/resources/:id', destination: '/api/resources/metadata' },
      { source: '/meta/contract/:id', destination: '/api/contract/metadata' },
      { source: '/meta/contract/:id.svg', destination: '/api/contract/image' },
    ];
  },
  async redirects() {
    return [{ source: '/winzer', destination: '/', permanent: true }];
  },
  async header() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
      {
        source: '/token/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
});

module.exports = nextConfig;
