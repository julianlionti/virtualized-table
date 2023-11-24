import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
  ],
  optimizeDeps: {
    // exclude: Object.keys(packageJson.peerDependencies),
  },
  build: {
    minify: "esbuild",
    lib: {
      entry: resolve("src", "index.ts"),
      name: packageJson.name,
      formats: ["es", "cjs"],
      fileName: (format) =>
        `${packageJson.name}.${format === "cjs" ? "cjs" : "es.js"}`,
    },
  },
});
