/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";
import { peerDependencies, dependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      formats: ["es", "cjs"],
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
    },
    target: "esnext",
    sourcemap: true,
  },
});
