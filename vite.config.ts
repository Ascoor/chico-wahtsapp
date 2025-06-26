import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 7000,
  },

  // تحقق من إذا كانت البيئة هي GitHub Pages (غالبًا ما يكون `production`)
  base: process.env.NODE_ENV === 'gh-pages' ? '/chico-wahtsapp/' : '/',

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      external: [
        'stream',
        'http',
        'https',
        'url',
        'zlib',
      ],
    },
  },
}));
