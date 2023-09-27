// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  i18n: {
    locales: [
      {code: 'fr', iso: 'fr', file: './locales/fr-FR.json'},
      {code: 'en', iso: 'en-US', file: './locales/en-US.json'},
    ], // list of locales in your site
    defaultLocale: 'fr',
  }
});
