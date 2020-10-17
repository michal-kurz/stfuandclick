// module.exports = {
//   coveragePathIgnorePatterns: ['<rootDir>'],
// }

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
}
