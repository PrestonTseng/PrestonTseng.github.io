<template>
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
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<style scoped></style>
