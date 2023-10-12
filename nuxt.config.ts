// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    basicAuth: {
      pairs: {
        admin: "admin",
      }
    }
  },
  devtools: { enabled: true }
})
