// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/test-utils'],
  imports: {
    dirs: ['composables/**']
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://remotive.com/api'
    }
  }
})
