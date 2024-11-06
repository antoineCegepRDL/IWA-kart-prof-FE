import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '#components': path.resolve(__dirname, './src/components'),
      '#styles': path.resolve(__dirname, './src/styles'),
      '#layout': path.resolve(__dirname, './src/layout'),
      '#types': path.resolve(__dirname, './src/types'),
      '#composables': path.resolve(__dirname, './src/composables'),
      '#assets': path.resolve(__dirname, './src/assets'),
      '#pages': path.resolve(__dirname, './src/pages'),
    },
  },
});

