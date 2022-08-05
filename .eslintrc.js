module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
	react:[
	"version: detect",
	]
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: { 'no-unused-vars': 'off' }
};
