// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxt/content",
    [
      "@nuxtjs/i18n",
      {
        baseUrl: 'https://my-nuxt-app.com',
        langDir: 'locales',
        locales: [
          {
            code: "en",
            iso: "en-US",
            file: 'en.json', 
            name: 'English'
          },
          {
            code: "zh-TW",
            iso: "zh-TW",
            file: 'zh-TW.json',
            name: '繁體中文'
          },
        ],
        strategy: 'no_prefix',
        defaultLocale: "en",
        legacy: false,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          redirectOn: "root", // recommended
        },
      },
    ],
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
