import nextBuildId from 'next-build-id'

export default {
  output: 'export',
  generateBuildId: () => nextBuildId({ dir: new URL('.', import.meta.url).pathname }),
  pageExtensions: ['page.tsx'],
  devIndicators: false,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}
