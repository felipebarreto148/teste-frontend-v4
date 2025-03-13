// https://nuxt.com/docs/api/configuration/nuxt-config

// Plugins
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["@/assets/styles/main.css"],
  modules: [
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/ui'
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})