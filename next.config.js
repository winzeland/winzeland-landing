// see https://github.com/martpie/next-transpile-modules#readme
const withTM = require('next-transpile-modules')(['@winzeland/generator']);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
});

module.exports = nextConfig;
