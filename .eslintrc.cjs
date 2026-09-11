module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
  overrides: [
    {
      // TypeScript already resolves DOM and library globals.
      files: ['*.ts'],
      rules: { 'no-undef': 'off' },
    },
  ],
}
