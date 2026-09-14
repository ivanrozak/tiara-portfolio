export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Tiara Bisrina — UX & CX Researcher',
      meta: [
        { name: 'description', content: 'Selected work and research practice by Tiara Bisrina.' },
        { name: 'theme-color', content: '#f7f7f5' },
      ],
    },
  },
})
