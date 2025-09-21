import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // фиксируем порт, чтобы Electron всегда знал куда стучаться
  },
});
