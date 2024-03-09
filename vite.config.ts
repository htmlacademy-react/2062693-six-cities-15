/// <reference types='vitest' />
/// <reference types='vite/client' />

import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    define: {
      'process.env': loadEnv(mode, process.cwd(), '')
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts'],
    },
  };
});
