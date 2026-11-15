import { defineConfig } from 'vite';

// base './' makes the build work from any sub-path (GitHub Pages, Netlify, a USB stick...)
export default defineConfig({
  base: './',
  build: { target: 'es2020', chunkSizeWarningLimit: 1500 },
});
