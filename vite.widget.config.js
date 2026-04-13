/**
 * Vite configuration
 *
 * Builds the React widget bundle for WordPress
 * Outputs a compiled script that can be enqueued in the theme
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  /** React plugin */
  plugins: [react()],
  build: {
    /**
     * Library build config
     * Defines the entry point and output for the widget bundle
     */
    lib: {
      /** Entry point for the widget loader */
      entry: 'src/loaders/widget-loader.jsx',
      /** 
       * Global variable name for the library
       * Used if exposing the bundle in non-module environments
       */
      name: 'MyWidget',

      /** Output filename for the bundled script */
      fileName: () => 'widget-bundle.js'
    },
    /**
     * Output directory for the compiled bundle
     * 
     * Matches the directory used in WordPress enqueue configuration.
     */
    outDir: 'js'
  }
})