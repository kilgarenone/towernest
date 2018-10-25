module.exports = {
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier/react",
    "plugin:prettier/recommended" // this do 3 things 1) extends: 'prettier 2) plugins: 'prettier' 3) rules: prettier/pre: error
  ],
  plugins: ["flowtype"],
  parser: "babel-eslint",
  rules: {
    "react/prop-types": "off",
    "no-use-before-define": "off",
    "no-param-reassign": ["error", { props: false }],
    "react/jsx-no-bind": ["error", { allowArrowFunctions: false }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-console": ["error", { allow: ["error", "group", "groupEnd", "warn"] }],
    "react/jsx-indent": "off",
    "react/destructuring-assignment": "off",
    "jsx-a11y/label-has-for": "off"
  },
  env: {
    browser: true
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  }
};
