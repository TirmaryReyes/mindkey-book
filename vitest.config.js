import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/public/icons': path.resolve(__dirname, './public/icons'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'commintlint.config.cjs',
        'next.config.mjs',
        'postcss.config.mjs',
        'mindkeybook/app/components/commons/index.ts',
        'mindkeybook/app/components/commons/Button.tsx',
        'mindkeybook/app/pages/_app.tsx',
        'tailwind.config.ts',
        'app/constants.ts',
        'app/layout.tsx',
        'app/page.tsx',
        'app/components/PinterestTag.js',
        '**/node_modules/**',
        '**/.next/**',
        '**/public/**',
      ],
    },
  },
});
