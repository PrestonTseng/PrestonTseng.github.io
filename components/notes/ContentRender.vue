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

<style lang="scss">
.v-card-text {
  * {
    margin-bottom: 0.8rem;
  }
  pre {
    border-radius: 0.2rem;
    padding: 0.8rem;
    overflow-x: scroll;
    
    * {
      margin-bottom: 0;
    }
  }
  p, ul, li, ol {
    color: #414656!important;
  }

  img {
    max-width: 100%;
    padding: 1rem;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1rem;
  }
}
</style>
