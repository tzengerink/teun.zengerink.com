const nextBuildId = require('next-build-id')

module.exports = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  devIndicators: false,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    }
    return config
  },
}
