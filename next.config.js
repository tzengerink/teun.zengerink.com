const nextBuildId = require('next-build-id')

module.exports = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  pageExtensions: ['page.tsx'],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}
