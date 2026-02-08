import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/tokens': path.resolve(__dirname, './src/tokens'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
  // Build configuration for demo app (comment out for library build)
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  // Uncomment below for library build
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/index.ts'),
  //     name: 'DSystem',
  //     formats: ['es'],
  //     fileName: 'index',
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     output: {
  //       globals: {
  //         react: 'React',
  //         'react-dom': 'ReactDOM',
  //       },
  //     },
  //   },
  // },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
