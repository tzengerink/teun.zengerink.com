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
])

export default eslintConfig
