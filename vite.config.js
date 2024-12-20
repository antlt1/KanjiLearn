import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

// Định nghĩa lại __dirname trong ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"), // Alias "~" trỏ tới thư mục "src"
    },
  },
});
