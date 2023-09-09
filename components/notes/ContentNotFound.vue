<template>
  <v-card flat color="transparent" class="d-flex flex-column align-center justify-center pt-16">
    <img width="320" class="my-8 pa-4" :src="emptyImage" />
    <div class="text-h3 font-weight-light my-4">Article Not found.</div>
  </v-card>
</template>

<script setup lang="ts">
import emptyImage from '@/public/images/404-error.png'
</script>
