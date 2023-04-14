module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'max-len': ['warn', { code: 120 }],
    'react/prop-types': 'off',
    'linebreak-style': 'off',
  },
};
