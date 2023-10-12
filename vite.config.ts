import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./build",
    rollupOptions: {
      output: {
        // Prevent vendor.js being created
        manualChunks: undefined,
        // chunkFileNames: "zzz-[name].js",
        // this got rid of the hash on style.css
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  server: {
    port: 4200,
  },
});
