// https://nuxt.com/docs/api/configuration/nuxt-config

const color = {
  '--color-white': 'hsla(0, 0%, 100%, 1)',
  '--color-white50': 'hsla(0, 0%, 100%, .5)',
  '--color-white20': 'hsla(0, 0%, 100%, .2)',
  '--color-white30': 'hsla(0, 0%, 100%, .3)',
  '--color-backdrop': 'hsla(45, 17%, 95%, .8)',
  '--color-black': 'hsla(0, 0%, 0%, 1)',
  '--color-blue': 'hsla(204, 97%, 54%, 1)',
  '--color-lightblue': 'hsla(208, 90%, 40%, 1)',
  '--color-lightgrey': 'hsla(0, 0%, 97%, 1)',
  '--color-mint': 'hsla(172, 45%, 75%, 1)',
  '--color-lilac': 'hsla(227, 65%, 87%, 1)',
  '--color-rust': 'hsla(22, 62%, 76%, 1)',
  '--color-babyblue': 'hsla(206, 84%, 86%, 1)',
  '--color-pink': 'hsla(284, 61%, 74%, 1)',
  '--color-dark': 'hsla(0, 0%, 9%, 1)',
  '--color-hilite': 'hsla(172, 95%, 18%, 1)',
  '--color-hilite-off': 'hsla(172, 95%, 18%, 0)',
  '--color-white-flash': 'hsla(0, 0%, 100%, .5)',
  '--color-beige': 'hsla(36, 31%, 90%, 1)',
  '--color-green300': 'hsla(159, 42%, 88%, 1)',
  '--color-green400': 'hsla(160, 52%, 71%, 1)',
  '--color-green500': 'hsla(172, 95%, 18%, 1)',
  '--color-green600': 'hsla(171, 15%, 35%, 1)',
  '--color-green700': 'hsla(171, 11%, 24%, 1)',
  '--color-green800': 'hsla(158, 23%, 18%, 1)',
  '--color-yellow500': 'hsla(36, 97%, 70%, 1)',
  '--color-yellow600': 'hsla(36, 74%, 25%, 1)',
  '--color-yellow700': 'hsla(36, 91%, 13%, 1)',
  '--spectrum-purple-200': 'hsla(261, 78.7%, 81.6%, 1)',
  '--spectrum-purple-600': 'hsla(267, 43%, 44.7%, 1)'
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  modules: [
    [
      '@invictus.codes/nuxt-vuetify',
      {
        /* vuetify options */
        vuetifyOptions: {
          theme: {
            defaultTheme: 'light',
            themes: {
              light: {
                dark: false,
                colors: {
                  'primary': '#3A6AB3',
                  'secondary': '#414656',
                  'tertiary': '#A6ABBD',  
                  'contrast': '#E97D91'
                }
              }
            }
          }
        },

        moduleOptions: {
          /* nuxt-vuetify module options */
          treeshaking: true,
          useIconCDN: true,

          /* vite-plugin-vuetify options */
          styles: true,
          autoImport: true
        }
      }
    ],
    [
      '@nuxtjs/i18n',
      {
        langDir: 'locales',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.json',
            name: 'English'
          },
          {
            code: 'zh-TW',
            iso: 'zh-TW',
            file: 'zh-TW.json',
            name: '繁體中文'
          }
        ],
        strategy: 'no_prefix',
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root' // recommended
        }
      }
    ]
  ]
})
