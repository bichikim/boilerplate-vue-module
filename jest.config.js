module.exports = {
  setupTestFrameworkScriptFile: 'jest-extended',
  setupFiles: [
    '<rootDir>/test/setup.js',
  ],
  collectCoverageFrom: [
    '<rootDir>/lib/**/*.{ts,js,tsx,jsx,vue}',
    '<rootDir>/src/**/*.{ts,js,tsx,jsx,vue}',
  ],
  coverageDirectory: '.coverage',
  coverageReporters: [
    'lcov',
    'text-summary',
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    // '^.+\\.(jsx?)$': 'babel-jest',
    '^.+\\.(tsx?|jsx?)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '^/(.*)$': '<rootDir>/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
    },
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'tsx',
    'jsx',
    'vue',
    'json',
  ],
  testMatch: [
    '**/?(*.)+(spec).(js|ts)?(x)',
  ],
}
