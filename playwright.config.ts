import { PlaywrightTestConfig } from '@playwright/test'

const PORT = 3000

const config: PlaywrightTestConfig = {
  use: {
    baseURL: `http://localhost:${PORT}`,
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: 'yarn dev',
    port: PORT,
  },
}

export default config
