<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n({
  messages: {
    en: {
      author: 'Po Yen Tseng'
    },
    'zh-tw': {
      author: '曾柏硯'
    }
  }
})

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: head.value.htmlAttrs?.lang, dir: head.value.htmlAttrs?.dir }
})

const author = computed(() => t('author'))
useSeoMeta({
  author
})
</script>
