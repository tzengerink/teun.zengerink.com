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
    reuseExistingServer: !process.env.CI,
    command: `yarn dev -p ${PORT}`,
    port: PORT,
  },
  retries: 2,
  reporter: 'dot',
}

export default config
