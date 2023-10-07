<template>
  <v-container id="about-containter" style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="9">
        <v-card flat color="transparent">
          <v-card-title class="pb-8 d-flex align-center">
            <v-icon size="small" class="pr-2">mdi-folder-multiple</v-icon>
            <span>{{ `${t('category')}` }}</span>
          </v-card-title>
          <v-card-text>
            <v-card
              v-for="(category, index) in categories"
              :key="index"
              class="d-inline-flex flex-column jusitfy-center align-center ma-4 pa-2"
              variant="plain"
              :ripple="false"
              :to="`/${locale}/notes/categories/${category.name}`"
            >
              <v-badge :content="category.counts" color="primary" offset-x="6" offset-y="12">
                <v-icon size="64">mdi-folder</v-icon>
              </v-badge>
              <span>{{ category.name }}</span>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
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
      category: 'Categories'
    },
    'zh-tw': {
      category: '分類'
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
    .sort((a: any, b: any) => b.counts - a.counts)
)
</script>
