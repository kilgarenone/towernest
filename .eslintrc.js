module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['flowtype', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-no-bind': ['error', { allowArrowFunctions: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-console': ['error', { allow: ['error', 'group', 'groupEnd', 'warn'] }],
    'react/jsx-indent': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/label-has-for': 'off',
  },
  env: {
    browser: true,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
