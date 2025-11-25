import nextBuildId from 'next-build-id'

export default {
  output: 'export',
  generateBuildId: () => nextBuildId({ dir: new URL('.', import.meta.url).pathname }),
  devIndicators: false,
}
