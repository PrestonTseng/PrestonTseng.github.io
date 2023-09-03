<template>
  <v-card variant="flat" class="pa-2 mb-2 d-flex flex-column align-center rounded-lg">
    <img class="rounded-pill pa-2" :aspect-ratio="1" height="140" width="140" :src="headshot" />
    <div class="py-1 text-h6 font-weight-medium">{{ content.name }}</div>
    <div class="pb-1 text-body-2">{{ content.title }}</div>
    <v-card-actions class="d-flex align-center jusitfy-center">
      <v-card v-for="(summary, index) in summaries" :key="index" :to="summary.link" variant="plain" class="pa-2 mx-2 d-flex flex-column align-center text-body-1">
        <span>{{ summary.name }}</span>
        <span>{{ summary.counts }}</span>
      </v-card>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import headshot from '@/public/images/profile_photo_sm.png'

const { t, locale } = useI18n({
  messages: {
    en: {
      name: 'Po Yen Tseng',
      notes: 'Notes',
      categories: 'Categories',
      tags: 'Tags'
    },
    'zh-tw': {
      name: '曾柏硯',
      notes: '文章',
      categories: '分類',
      tags: '標籤'
    }
  }
})
const notes = await queryContent(locale.value, 'notes').find()

const content = computed(() => ({
  name: t('name'),
  title: 'AI | Full-stack | DevOps'
}))

const summaries = computed(() => [
  {
    link: `/${locale.value}/notes`,
    name: t('notes'),
    counts: notes.length
  },
  {
    link: `/${locale.value}/notes/categories`,
    name: t('categories'),
    counts: notes.map((e: any) => e.categories).reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []).length
  },
  {
    link: `/${locale.value}/notes/tags`,
    name: t('tags'),
    counts: notes
      .map((e: any) => e.tags)
      .flat()
      .reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []).length
  }
])
</script>
