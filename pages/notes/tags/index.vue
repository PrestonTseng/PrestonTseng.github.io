<template>
  <v-container id="about-containter" style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="9">
        <v-card flat color="transparent">
          <v-card-title class="pb-8 d-flex align-center">
            <v-icon size="small" class="pr-2">mdi-tag-multiple</v-icon>
            <span>{{ `${t('tag')}` }}</span>
          </v-card-title>
          <v-card-text class="pt-4">
            <v-hover v-for="(tag, index) in tags" :key="index">
              <template v-slot:default="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  :to="`/${locale}/notes/tags/${tag.name}`"
                  :ripple="false"
                  variant="plain"
                  class="text-capitalize d-inline-block my-2 mr-4 pa-4"
                  :class="{ 'text-primary': isHovering, 'text-secondary': !isHovering }"
                  :height="64"
                  :style="`font-size: ${getSize(tag.counts)}px`"
                >
                  {{ `#${tag.name}` }}
                </v-card>
              </template>
            </v-hover>
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
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({
  messages: {
    en: {
      tag: 'Tags'
    },
    'zh-tw': {
      tag: '標籤'
    }
  }
})
const notes = await queryContent(locale.value, 'notes').find()
const tags = computed(() =>
  notes
    .map((e) => e.tags)
    .flat()
    .reduce((acc, cur) => {
      let target = acc.find((e: any) => e.name == cur)
      if (target) target.counts++
      else acc.push({ name: cur, counts: 1 })
      return acc
    }, [])
    .sort((a: any, b: any) => b.counts - a.counts)
)

const getSize = (counts: number): number => {
  const max = Math.max(...tags.value.map((e: any) => e.counts))
  const min = Math.min(...tags.value.map((e: any) => e.counts))
  if (counts < (max + min) / 3) return 24
  if (counts < ((max + min) / 3) * 2) return 48
  else return 64
}
</script>
