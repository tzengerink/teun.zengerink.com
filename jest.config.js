// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)', '!**/__mocks__/**/*.[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: { '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest' },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],

  // This solves an issue created by migrating to v27 of Jest. This change broke @testing-library/react its render 
  // method during import. For details, see: https://jestjs.io/blog/2021/05/25/jest-27#flipping-defaults
  timers: 'legacy',
}
