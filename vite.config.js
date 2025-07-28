import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      server: {
        host: true,
        port: 5173,
        allowedHosts: [
          'dc092917-b91f-4f23-b533-719b71b752c3-00-31c0j74f400gd.riker.replit.dev'
        ]
      },
      preview: {
        host: '0.0.0.0',
        port: 5173
      }
    };
});
