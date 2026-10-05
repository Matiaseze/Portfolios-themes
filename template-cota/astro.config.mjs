// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 4321
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // En Docker sobre Windows no llegan eventos de cambios: CHOKIDAR_USEPOLLING lo define el Dockerfile
        usePolling: process.env.CHOKIDAR_USEPOLLING === 'true'
      }
    }
  }
});
