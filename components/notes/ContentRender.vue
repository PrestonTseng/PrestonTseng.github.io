<template>
  <v-card variant="text">
    <v-card-title>{{ props.doc.title }}</v-card-title>
    <v-card-text>
      <ContentRenderer :value="props.doc" />
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  doc: ParsedContent
}>()
</script>
