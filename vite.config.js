import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import * as path from 'path'
import copy from 'rollup-plugin-copy';
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from '@tailwindcss/vite'
import ViteRestart from 'vite-plugin-restart';

export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: 'web/dist/',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './src/index.ts',
      },
      output: {
        dir: 'web/dist/',
      }
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    origin: `${process.env.DDEV_PRIMARY_URL}:3000`,
    cors: {
      origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(localhost|\.local|\.test|\.site)(?::\d+)?$/
    }
  },
  plugins: [
    ViteImageOptimizer({}),
    copy({
      targets: [
        {
          src: 'src/public/**/*',
          dest: 'web/dist'
        }
      ]
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    tailwindcss(),
    ViteRestart({
      reload: [
        'templates/**/*',
        'src/**/*',
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'src/scss'),
      '@js': path.resolve(__dirname, 'src/js'),
    },
    preserveSymlinks: true,
  },
});