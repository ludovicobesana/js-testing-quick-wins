module.exports = {
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1'
    }
  };
