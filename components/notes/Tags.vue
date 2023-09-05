<template>
  <v-card variant="flat" class="pa-2 mb-2 rounded-lg">
    <v-card-title class="text-subtitle-1 d-flex align-center">
      <v-icon size="small" class="pr-2">mdi-tag-multiple</v-icon>
      <span>{{ t('tags') }}</span>
    </v-card-title>

    <v-card-text class="px-2">
      <v-card
        v-for="(tag, index) in tags"
        :key="index"
        :to="`/${locale}/notes/tags/${tag.name}`"
        :ripple="false"
        variant="plain"
        class="text-capitalize d-inline-block pa-2"
        :class="{ 'active-tag': currentTag == tag.name, 'text-primary': currentTag == tag.name, 'text-secondary': currentTag != tag.name }"
        :style="`font-size: ${getSize(tag.counts)}px`"
      >
        {{ `#${tag.name}` }}
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  currentTag?: string
}>()

interface Tag {
  name: string
  counts: number
}

const { t, locale } = useI18n({
  messages: {
    en: {
      tags: 'Tags'
    },
    'zh-tw': {
      tags: '標籤'
    }
  }
})

const notes = await queryContent(locale.value, 'notes').find()
const tags = computed<Tag[]>(() =>
  notes
    .map((e) => e.tags)
    .flat()
    .reduce((acc, cur) => {
      let target = acc.find((e: Tag) => e.name == cur)
      if (target) target.counts++
      else acc.push({ name: cur, counts: 1 })
      return acc
    }, [])
    .sort((a: Tag, b: Tag) => b.counts - a.counts)
)

const getSize = (counts: number): number => {
  const max = Math.max(...tags.value.map((e) => e.counts))
  const min = Math.min(...tags.value.map((e) => e.counts))
  if (counts < (max + min) / 3) return 14
  if (counts < ((max + min) / 3) * 2) return 20
  else return 24
}
</script>

<style lang="scss" scoped>
.active-tag {
  opacity: 1;
}
</style>
