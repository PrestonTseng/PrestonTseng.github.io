<template>
  <v-card color="transparent" flat>
    <v-card-title class="text-capitalize text-primary d-flex align-center">
      <v-icon class="mr-2">mdi-certificate</v-icon>
      <span>{{ t('certifications') }}</span>
    </v-card-title>
    <v-card-text>
      <div v-for="(certification, index) in certifications" :key="index" class="py-4">
        <div class="text-subtitle-1 font-weight-bold">{{ certification.title }}</div>
        <div v-for="(item, itemIdx) in certification.items" :key="itemIdx" class="d-flex align-center justify-start text-secondary" style="padding-top: 10px; padding-bottom: 10px">
          <v-icon small class="pt-1 pr-2">mdi-chevron-right</v-icon>
          <nuxt-link :to="item.link" target="_blank" class="text-secondary">
            <span>{{ item.name }}</span>
            <v-icon v-if="item.link" class="pl-2" size="x-small">mdi-open-in-new</v-icon>
          </nuxt-link>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    en: {
      certifications: 'certifications',
      languages: 'Languages',
      ai102: 'Microsoft Certified: Azure AI Engineer Associate'
    },
    'zh-tw': {
      certifications: '認證',
      languages: '語言能力',
      ai102: 'Microsoft 認證：Azure AI 工程師技術師'
    }
  }
})

const certifications = computed(() => [
  {
    title: t('languages'),
    items: [
      { icon: null, name: 'TOFEL iBT 91', link: '' },
      { icon: null, name: 'JLPT N2', link: '' }
    ]
  },
  {
    title: t('Microsoft'),
    items: [{ icon: null, name: t('ai102'), link: 'https://learn.microsoft.com/api/credentials/share/zh-tw/23651313/544238A3102ED4B9?sharingId=B5C9BD1C8BCCDD7B' }]
  }
])
</script>

<style lang="scss"></style>
