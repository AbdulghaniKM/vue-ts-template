import ui from "@nuxt/ui/vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    ui({
      // Configure auto-import through Nuxt UI's options
      autoImport: {
        imports: ["vue", "vue-router", "pinia"],
        vueTemplate: true,
        dirs: [
          "./src/views/*/stores",
          "./src/components",
          "./src/views/*/components",
          "./src/layout",
        ],
        eslintrc: {
          enabled: true,
        },
      },
      // Configure components auto-import through Nuxt UI's options
      components: {
        dirs: ["src/components", "src/views/*/components", "src/layout"],
        dts: "components.d.ts",
      },
      ui: {
        colors: {
          primary: "yellow",
        },
      },
    }),
  ],
});
