import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mime-type-jsx',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('.jsx')) {
          return {
            code,
            map: null,
            // Set the correct content type for .jsx files
            contentType: 'application/javascript',
          };
        }
      },
    },
  ],
});
