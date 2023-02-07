import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {
  presetUno,
  presetAttributify,
  presetIcons,
  transformerAttributifyJsx,
} from "unocss";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
      transformers: [transformerAttributifyJsx()],
    }),
    // If you are using @vitejs/plugin-react with @unocss/preset-attributify, you must add the plugin before @vitejs/plugin-react.
    react(),
  ],
});
