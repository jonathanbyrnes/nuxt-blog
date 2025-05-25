// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    // Server
    privateKey: 'secretKey',


    // Public
    public: {
    API_URL: process.env.API_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    }
  }
})
