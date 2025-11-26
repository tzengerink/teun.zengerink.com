import nextBuildId from 'next-build-id'

export default {
  generateBuildId: () => nextBuildId({ dir: new URL('.', import.meta.url).pathname }),
  devIndicators: false,
}
