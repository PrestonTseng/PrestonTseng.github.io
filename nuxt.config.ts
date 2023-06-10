// https://nuxt.com/docs/api/configuration/nuxt-config
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
                    // @TODO: list all vuetify options
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
