<template>
  <v-app :theme="theme" :class="bgcolor">
    <slot name="header">
      <app-bar></app-bar>
    </slot>

    <v-main>
      <slot />

      <slot name="footer">
        <v-footer class="text-caption d-flex align-center justify-center d-print-none"> Copyright © All rights reserved. </v-footer>
      </slot>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const theme = ref('light')
const bgcolor = computed(() => '')
</script>

<style scoped></style>
