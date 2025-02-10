// rollup.config.js
import PluginCritical from 'rollup-plugin-critical';

export default {
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    PluginCritical({
      criticalUrl: 'http://localhost',
      criticalBase: './',
      criticalPages: [
        { uri: '', template: 'index' },
      ],
      criticalConfig: {
        ignore: {
          atrule: ['@font-face'],
        },
      },
    }),
  ],
}