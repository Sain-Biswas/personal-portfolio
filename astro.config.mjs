// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: "local",
        cssVariable: "--font-reca",
        name: "Recursive",
        variants: [
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/RecursiveMonoCslSt-Light.woff2"],
          },
          {
            weight: 300,
            style: "italic",
            src: ["./src/assets/fonts/RecursiveMonoCslSt-LtItalic.woff2"],
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/RecursiveMonoCslSt-Regular.woff2"],
          },
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/RecursiveMonoCslSt-Italic.woff2"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/RecursiveMonoCslSt-SemiBd.woff2"],
          },
          {
            weight: 600,
            style: "italic",
            src: ["./src/assets/fonts/RecursiveMonoCslSt-SmBdItalic.woff2"],
          },
        ],
      },
      {
        name: "BebasNeue",
        provider: "local",
        cssVariable: "--font-bebasa",
        variants: [
          {
            weight: 400,
            src: ["./src/assets/fonts/BebasNeue-Regular.woff2"],
            style: "normal",
          },
        ],
      },
      {
        name: "Adoria",
        provider: "local",
        cssVariable: "--font-adoriaa",
        variants: [
          {
            weight: 400,
            src: ["./src/assets/fonts/Adoria.otf"],
            style: "normal",
          },
        ],
      },
    ],
  },
});
