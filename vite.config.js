import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@context": "/src/context",
      "@layouts": "/src/layouts",
      "@stores": "/src/stores",
      "@features": "/src/features",
      "@services": "/src/services",
      "@lib": "/src/lib",
      "@hooks": "/src/hooks",
    },
  },
});
