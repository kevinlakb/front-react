import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  publicDir: "public",
  server: {
    host: "127.0.0.1",
    port: 3000,
    fs: {
      strict: true,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.tsx'),
      },
    },
  },
  plugins: [react()],
});
