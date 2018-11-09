module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:prettier/recommended", // this do 3 things 1) extends: 'prettier 2) plugins: 'prettier' 3) rules: prettier/pre: error
    "prettier/react"
  ],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    // 'jsx-a11y/anchor-is-valid': [
    //   'error',
    //   {
    //     components: ['Link'],
    //     specialLink: ['to'],
    //     aspects: ['noHref', 'invalidHref', 'preferButton']
    //   }
    // ],
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
    browser: true,
    es6: true
  }
};
