module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  'overrides': [{
    files: ['**/src/**/*.test.{ts,tsx}']
  }],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['react', '@typescript-eslint'],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx', '.ts', '.tsx']
    }],
    'max-len': ['error', {
      'ignoreComments': true
    }, {
      'code': 100
    }],
    'indent': ['error', 4],
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
};