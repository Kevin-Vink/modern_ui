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
    'no-nested-ternary': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'max-len': ['warn', { code: 120 }],
    'react/prop-types': 'off',
    'linebreak-style': 'off',
  },
};
