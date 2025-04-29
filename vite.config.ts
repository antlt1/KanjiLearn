import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src") // Map '~' to the 'src' folder
    }
  },
  server: {
    host: true, // Allow access from network
    port: 3000, // Specify the development server port
    hmr: {
      overlay: false, // Disable overlay for HMR
      protocol: "ws", // Use WebSocket for HMR
      host: "localhost", // Ensure HMR host is set correctly
    },
  },
});
