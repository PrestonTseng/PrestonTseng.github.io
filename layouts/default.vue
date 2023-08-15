<template>
  <v-app :theme="theme" :class="bgcolor">
    <v-app-bar floating flat density="compact" color="transparent">
      <v-tabs bg-color="transparent" color="primary" style="position: absolute; left: 50%; transform: translate(-50%)">
        <v-tab to="/"> About </v-tab>
        <v-tab to="projects">Projects</v-tab>
        <v-tab to="blog">Blog</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <!-- <lang-switch></lang-switch>
      <theme-switch v-model:theme="theme"></theme-switch> -->
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer app class="bg-secondary-container text-caption d-flex align-center"> Copyright © All rights reserved. </v-footer>
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
