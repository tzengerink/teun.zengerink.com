const nextBuildId = require('next-build-id')

module.exports = {
  // output: 'export',
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  // pageExtensions: ['page.tsx'],
  devIndicators: false,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}
