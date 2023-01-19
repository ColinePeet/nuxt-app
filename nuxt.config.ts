// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // buildModules: [
  //   '@pinia/nuxt',
  // ]
  modules: [
    // ...
    '@pinia/nuxt',
  ]
})
