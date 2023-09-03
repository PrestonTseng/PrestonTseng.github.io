<template>
  <v-container id="about-containter" style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="9">
        <v-card flat color="transparent">
          <ContentList :path="`/${locale}/notes`">
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
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const limit = ref(10)
const page = ref(1)
const total = await queryContent(locale.value, 'notes').count()
const length = computed(() => Math.ceil(total / limit.value))
const totalVisiable = ref(4)

const notes = ref<ParsedContent[]>([])

watch(
  () => page.value,
  async (p) => {
    notes.value = await queryContent(locale.value, 'notes')
      .sort({ date: -1 })
      .skip((p - 1) * limit.value)
      .limit(limit.value)
      .find()
  },
  { immediate: true }
)
</script>
