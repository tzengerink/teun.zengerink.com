// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

export default createJestConfig({
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!src/e2e/**/*.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)', '!**/__mocks__/**/*.[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/src/e2e/'],
  transform: { '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest' },
  transformIgnorePatterns: ['/node_modules/'],
})
