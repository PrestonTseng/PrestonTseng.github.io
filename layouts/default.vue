<template>
  <v-app :theme="theme" :class="bgcolor">
    <v-app-bar floating flat density="default">
      <v-app-bar-title>Po Yen <b>Tseng</b></v-app-bar-title>
      <template v-slot:append>
        <v-btn to="/" color="primary">About</v-btn>
        <v-btn to="portfolio" color="primary">Portfolio</v-btn>
        <v-btn to="notes" color="primary">Notes</v-btn>
        <lang-switch></lang-switch>
      </template>
     
      <!-- <theme-switch v-model:theme="theme"></theme-switch> -->
    </v-app-bar>

    <v-main>
      <slot />
      <v-footer class="bg-secondary-container text-caption d-flex align-center justify-center"> Copyright © All rights reserved. </v-footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const background = ref(`https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80`)
const nav = ref(0)
const theme = ref('light')
const bgcolor = computed(() => (theme.value === 'light' ? 'primary' : ''))
</script>

<style scoped></style>
