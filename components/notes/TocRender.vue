<template>
  <v-card variant="text">
    <v-card-text>
      <v-list select-strategy="independent" active-class="text-primary">
        <notes-toc-render-item v-for="item in props.toc.links" :key="item.id" :item="item"></notes-toc-render-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps<{
  toc: any
}>()
</script>
