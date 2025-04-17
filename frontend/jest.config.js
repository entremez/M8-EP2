export default {
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./setupTests.js']
  };