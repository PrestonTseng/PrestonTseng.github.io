<template>
  <v-container id="about-containter" style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="9"> TODO </v-col>
      <v-col cols="3">
        <notes-summary></notes-summary>
        <notes-latest></notes-latest>
        <notes-categories></notes-categories>
        <notes-tags></notes-tags>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({
  messages: {
    en: {
      category: 'Category'
    },
    'zh-tw': {
      category: '分類'
    }
  }
})
const notes = await queryContent(locale.value, 'notes').find()
const categories = computed(() =>
  notes
    .map((e) => e.categories)
    .reduce((acc, cur) => {
      let target = acc.find((e: any) => e.name == cur)
      if (target) target.counts++
      else acc.push({ name: cur, counts: 1 })
      return acc
    }, [])
)
</script>
