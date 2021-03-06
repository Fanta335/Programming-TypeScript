module.exports = {
  root:true,
  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: "./tsconfig.json"
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
  },
};
