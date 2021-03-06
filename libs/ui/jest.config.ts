module.exports = {
  displayName: 'ui',
  preset: '../../jest.preset.ts',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/ui',
};
