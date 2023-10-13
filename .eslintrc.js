module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/recommended',
      'eslint:recommended',
      'prettier',
      'typescript',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 8,
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-multi-spaces': ['error'],
      'space-before-function-paren': 'off',
      'prefer-regex-literals': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/indent': ['off', 2],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': ['off'],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-extra-semi': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'import/namespace': 'off',
      'import/named': 'off',
      // 'space-before-function-paren': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'prettier/prettier': ['error', { printWidth: 120, proseWrap: 'never' }],
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx', '*.vue'],
        rules: {
          '@typescript-eslint/explicit-member-accessibility': ['error'],
          ident: 'off',
        },
      },
    ],
  };
  
