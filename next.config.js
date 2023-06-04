/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // / Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
    styledComponents: true,
    removeConsole: {
      // Remove console.* output except console.error:
      exclude: ['error'],
    },
  }

};

module.exports = nextConfig;
