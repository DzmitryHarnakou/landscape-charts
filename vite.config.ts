import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dsv from "@rollup/plugin-dsv";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dsv({
      processRow: (row, id) => {
        Object.keys(row).forEach((key) => {
          const value = row[key];
          row[key] = isNaN(+value) ? value : +value as any;
        });
      },
    }),
  ],
});
