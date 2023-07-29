import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/todo-app-react',
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
