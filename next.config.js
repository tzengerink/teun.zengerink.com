import nextBuildId from 'next-build-id'

const buildId = await nextBuildId({ dir: new URL('.', import.meta.url).pathname })

export default {
  devIndicators: false,
  generateBuildId: () => buildId,
  env: { NEXT_PUBLIC_BUILD_ID: buildId },
}
