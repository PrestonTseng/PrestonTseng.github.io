<template>
  <v-container id="about-containter" style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="9">
        <v-card flat color="transparent">
          <v-card-title class="pb-8 d-flex align-center">
            <v-icon size="small" class="pr-2">mdi-folder-multiple</v-icon>
            <span>{{ `${t('category')}:` }}</span>
            <span class="mx-2 text-primary">{{ category }}</span>
            <v-btn size="small" icon="mdi-close" variant="plain" :to="`/${locale}/notes`"></v-btn>
          </v-card-title>
          <ContentList>
            <notes-list-item v-for="article in notes" :key="article._path" :article="article" />
            <template #not-found>
              <notes-not-found></notes-not-found>
            </template>
          </ContentList>
          <v-card-actions v-if="length > 1" class="d-flex justify-center">
            <v-pagination v-model="page" :length="length" :total-visible="totalVisiable"></v-pagination>
          </v-card-actions>
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
import { ref, computed, onMounted, watch } from 'vue'
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { category } = route.params

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

const limit = ref(10)
const page = ref(1)
const total = await queryContent(locale.value as string, 'notes').where({ categories: category }).count()
const length = computed(() => Math.ceil(total / limit.value))
const totalVisiable = ref(4)

const notes = ref<ParsedContent[]>([])

watch(
  () => page.value,
  async (p) => {
    notes.value = await queryContent(locale.value as string, 'notes')
      .where({ categories: category })
      .sort({ date: -1 })
      .skip((p - 1) * limit.value)
      .limit(limit.value)
      .find()
  },
  { immediate: true }
)
</script>
