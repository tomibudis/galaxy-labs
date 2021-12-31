module.exports = {
  testEnvironment: 'jest-environment-jsdom-sixteen',
  testRunner: 'jest-circus/runner',
  coveragePathIgnorePatterns: ['<rootDir>/src/types', '.stories'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(css|sass|scss)$':
      '<rootDir>/node_modules/jest-css-modules-transform',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.js',
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
};
