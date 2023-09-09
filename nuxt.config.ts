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
          styles: 'sass',
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
          mdc: true,
          toc: { depth: 4, searchDepth: 4 },
          anchorLinks: false
        },
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'nord'
            // Theme used if `html.dark`
            // dark: 'github-dark',
            // Theme used if `html.sepia`
            // sepia: 'monokai'
            // ---------------------------
            //  'css-variables'
            //  'dark-plus'
            //  'dracula-soft'
            //  'dracula'
            //  'github-dark-dimmed'
            //  'github-dark'
            //  'github-light'
            //  'hc_light'
            //  'light-plus'
            //  'material-theme-darker'
            //  'material-theme-lighter'
            //  'material-theme-ocean'
            //  'material-theme-palenight'
            //  'material-theme'
            //  'min-dark'
            //  'min-light'
            //  'monokai'
            //  'nord'
            //  'one-dark-pro'
            //  'poimandres'
            //  'rose-pine-dawn'
            //  'rose-pine-moon'
            //  'rose-pine'
            //  'slack-dark'
            //  'slack-ochin'
            //  'solarized-dark'
            //  'solarized-light'
            //  'vitesse-dark'
            //  'vitesse-light'
          }
        }
      }
    ]
  ]
})
