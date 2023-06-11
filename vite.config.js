import { defineConfig } from 'vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

export default defineConfig({
    base: './',
    resolve: {
        alias: {
            // ...
            'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
        },
    },
    plugins: [
        // ...
        VueI18nPlugin({
            include: path.resolve(__dirname, './src/i18n/**'), // PUT YOUR OWN PATH TO LOCALES HERE
        }),
    ],
})