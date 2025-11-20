import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    ignores: [
      'components/ui/**',
      '.next/**',
      'node_modules/**',
      'out/**',
      'dist/**',
      'build/**',
    ],
  },
];

export default eslintConfig;
