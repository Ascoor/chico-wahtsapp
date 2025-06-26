import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; 

// إذا كنت بحاجة إلى استيراد componentTagger، تأكد من إضافته هنا
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 7000,
  },
  base: '/chico-wahtsapp/',  // يجب أن يكون هنا اسم المستودع الذي قمت باستضافته على GitHub Pages
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
      ]
    },
  },
}));
