module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    "eqeqeq": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": 4
    }],
    "vue/singleline-html-element-content-newline": "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
