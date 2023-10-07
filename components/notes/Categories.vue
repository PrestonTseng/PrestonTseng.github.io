<template>
  <v-card variant="flat" class="pa-2 mb-2 rounded-lg">
    <v-card-title class="text-subtitle-1 pb-0 d-flex align-center">
      <v-icon size="small" class="pr-2">mdi-folder-multiple</v-icon>
      <span>{{ t('categories') }}</span>
    </v-card-title>
    <v-list lines="one" density="compact">
      <v-list-item v-for="(category, index) in categories" :key="index" :to="`/${locale}/notes/categories/${category.name}`">
        <v-list-item-title class="d-flex align-center text-subtitle-2">
          <v-icon class="mr-2">mdi-folder-outline</v-icon>
          <span>{{ `${category.name} (${category.counts})` }}</span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({
  messages: {
    en: {
      categories: 'Categories'
    },
    'zh-tw': {
      categories: '分類'
    }
  }
})
const notes = await queryContent(locale.value as string, 'notes').find()
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
