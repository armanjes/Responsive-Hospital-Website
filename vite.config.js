import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        service: resolve(__dirname, "./pages/service.html"),
        doctor: resolve(__dirname, "./pages/doctor.html"),
        contact: resolve(__dirname, "./pages/contact.html"),
        login: resolve(__dirname, "./pages/login.html"),
      },
    },
  },
});
