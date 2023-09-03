// https://nuxt.com/docs/api/configuration/nuxt-config

const baseURL = `https://prestontseng.github.io`

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'service-worker',
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
    head: {
      title: `Preston's Website`,
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'format-detection', content: 'telephone=no' }],
      link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.ico' }]
    }
  },
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
                  primary: '#3A6AB3',
                  secondary: '#414656',
                  third: '#A6ABBD',
                  fourth: '#f3f2f0',
                  contrast: '#E97D91'
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
        baseUrl: '/',
        langDir: 'locales',
        locales: [
          {
            code: 'zh-tw',
            iso: 'zh-tw',
            file: 'zh-tw.json',
            name: '	繁體中文'
          },
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.json',
            name: 'English'
          }
        ],
        strategy: 'prefix',
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root' // recommended
        }
      }
    ],
    [
      '@nuxt/content',
      {
        experimental: {
          clientDb: true
        },
        markdown: {
          toc: { depth: 3, searchDepth: 3 }
        }
      }
    ]
  ]
})
