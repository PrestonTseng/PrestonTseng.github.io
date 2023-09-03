<template>
  <v-app :theme="theme" :class="bgcolor">
    <v-app-bar floating flat density="default" class="d-print-none">
      <v-btn variant="plain" active :ripple="false" :to="`/${locale}`">
        <v-app-bar-title>Po Yen <b>Tseng</b></v-app-bar-title>
      </v-btn>
      <template v-slot:append>
        <!-- <v-btn v-if="lgAndUp" to="/" color="primary">About</v-btn>
        <v-btn v-if="lgAndUp" to="portfolio" color="primary">Portfolio</v-btn>
        <v-btn v-if="lgAndUp" to="notes" color="primary">Notes</v-btn> -->
        <lang-switch></lang-switch>
      </template>

      <!-- <theme-switch v-model:theme="theme"></theme-switch> -->
    </v-app-bar>

    <v-main class="bg-bg-primary">
      <slot />
      <v-footer class="bg-secondary-container text-caption d-flex align-center justify-center d-print-none"> Copyright © All rights reserved. </v-footer>
    </v-main>

    <!-- <v-bottom-navigation v-if="!lgAndUp" grow bg-color="primary" class="d-print-none">
      <v-btn to="/">
        <v-icon>mdi-account</v-icon>
        About
      </v-btn>
      <v-btn to="portfolio">
        <v-icon>mdi-folder</v-icon>
        Portfolio
      </v-btn>
      <v-btn to="notes">
        <v-icon>mdi-post-outline</v-icon>
        Notes
      </v-btn>
    </v-bottom-navigation> -->
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: head.value.htmlAttrs?.lang, dir: head.value.htmlAttrs?.dir }
})

const nav = ref(0)
const theme = ref('light')
const bgcolor = computed(() => (theme.value === 'light' ? 'primary' : ''))
</script>

<style scoped></style>
