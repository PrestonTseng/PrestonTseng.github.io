<template>
  <v-card variant="flat" class="pa-2 mb-2 rounded-lg">
    <v-card-title class="text-subtitle-1 pb-0 d-flex align-center">
      <v-icon size="small" class="pr-2">mdi-history</v-icon>
      <span>{{ t('latest') }}</span>
    </v-card-title>
    <v-list lines="one">
      <v-list-item v-for="note in notes" :key="note.title" :to="note._path">
        <v-list-item-title class="text-subtitle-2">{{ note.title }}</v-list-item-title>
        <v-list-item-subtitle class="text-caption">{{ formatDate(note.date) }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { formatDate } = useDateTimeFormat()

const { t, locale } = useI18n({
  messages: {
    en: {
      latest: 'Latest'
    },
    'zh-tw': {
      latest: '最新文章'
    }
  }
})
const notes = await queryContent(locale.value as string, 'notes').sort({ date: -1 }).limit(5).find()
</script>
