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
          <span>{{ item.name }}</span>
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
      languages: 'Languages'
    },
    'zh-TW': {
      certifications: '認證',
      languages: '語言能力'
    }
  }
})

const certifications = ref([
  {
    title: t('languages'),
    items: [
      { icon: null, name: 'TOFEL iBT 91' },
      { icon: null, name: 'JLPT N2' }
    ]
  }
])
</script>

<style lang="scss"></style>
