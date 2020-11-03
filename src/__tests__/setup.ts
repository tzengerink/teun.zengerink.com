const env = ({
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['images.example.com'],
    path: '/_next/image',
    loader: 'default',
  },
} as unknown) as NodeJS.ProcessEnv

process.env = env

export default env
