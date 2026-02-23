import eslint from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = eslint.defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  eslint.globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    settings: {
      // Fix for ESLint 10+: eslint-plugin-react uses context.getFilename() (legacy API)
      // which was removed in ESLint 10 flat config. Declaring the version explicitly
      // prevents the plugin from trying to auto-detect it and failing.
      //
      // GitHub Issue: https://github.com/vercel/next.js/issues/89764
      react: { version: '19' },
    },
  },
])

export default eslintConfig
