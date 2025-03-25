import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import * as path from 'path'
import critical from 'rollup-plugin-critical';
import checker from 'vite-plugin-checker';
import copy from 'rollup-plugin-copy';
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from '@tailwindcss/vite'
import ViteCommpression from 'vite-plugin-compression';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    outDir: 'web/dist',
    rollupOptions: {
      input: {
        app: 'src/js/app.ts',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    origin: `${process.env.DDEV_PRIMARY_URL}:5173`,
    cors: {
      origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(localhost|\.local|\.test|\.site)(?::\d+)?$/
    },
    watch: {
      ignored: ['./storage/**', './vendor/**', './web/**']
    }
  },
  plugins: [
    critical({
      criticalUrl: `${process.env.DDEV_PRIMARY_URL}:5173`,
      criticalBase: 'web/dist/criticalcss',
      criticalPages: [
        { uri: '', template: 'index' },
      ],
      criticalConfig: {},
    }),
    checker({
      stylelint: {
        lintCommand: 'stylelint "src/**/*.css"',
      },
      eslint: {
        lintCommand: 'eslint "src/**/*.ts"',
        useFlatConfig: true,
        dev: {
          overrideConfig: {
            cache: true
          }
        }
      },
    }),
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
    ViteCommpression({
      filter: /\.(js|mjs|json|css|ico|map)(\?.*)?$/i,
    }),
    ViteImageOptimizer({}),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'src/scss'),
      '@js': path.resolve(__dirname, 'src/js'),
    },
    preserveSymlinks: true,
  },
}));