<template>
  <v-container id="about-containter" style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="9">
        <v-card flat color="transparent">
          <v-card-title class="pb-8 d-flex align-center">
            <v-icon size="small" class="pr-2">mdi-folder-multiple</v-icon>
            <span>{{ `${t('tag')}:` }}</span>
            <span class="mx-2 text-primary">{{ `#${tag}` }}</span>
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
        <notes-tags :current-tag="tag"></notes-tags>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { tag } = route.params

const { t, locale } = useI18n({
  messages: {
    en: {
      tag: 'tag'
    },
    'zh-tw': {
      tag: '標籤'
    }
  }
})

const limit = ref(10)
const page = ref(1)
const total = await queryContent(locale.value, 'notes')
  .where({ tags: { $contains: tag } })
  .count()
const length = computed(() => Math.ceil(total / limit.value))
const totalVisiable = ref(4)

const notes = ref<ParsedContent[]>([])

watch(
  () => page.value,
  async (p) => {
    notes.value = await queryContent(locale.value, 'notes')
      .where({ tags: { $contains: tag } })
      .sort({ date: -1 })
      .skip((p - 1) * limit.value)
      .limit(limit.value)
      .find()
  },
  { immediate: true }
)
</script>
