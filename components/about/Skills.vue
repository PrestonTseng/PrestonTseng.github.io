<template>
  <v-card color="transparent" flat>
    <v-card-title class="text-capitalize text-primary d-flex align-center">
      <v-icon class="mr-2">mdi-tools</v-icon>
      <span>{{ t('skills') }}</span>
    </v-card-title>
    <v-card-text>
      <div v-for="(skill, index) in skills" :key="index" class="py-2">
        <div class="text-subtitle-1 font-weight-bold">{{ skill.title }}</div>
        <div class="text-secondary d-flex flex-wrap align-center">
          <div v-for="(item, index) in skill.items" :key="index" class="d-flex align-center py-3">
            <v-icon v-if="item.icon && item.icon.startsWith('mdi')" small class="pt-1 pr-2 text-medium-emphasis" :icon="item.icon"></v-icon>
            <img v-else-if="item.icon" :src="item.icon" height="21" class="pr-2 pt-1" />
            <span class="text-medium-emphasis">{{ item.name }}</span>
            <span v-if="index < skill.items.length - 1" class="mx-3">|</span>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    en: {
      skills: 'skills',
      'front-end': 'front-end',
      'back-end': 'back-end',
      programming: 'programming',
      'maching-learning': 'Maching Learning',
      devops: 'DevOps'
    },
    'zh-TW': {
      skills: '技能',
      'front-end': '網頁前端',
      'back-end': '網頁後端',
      programming: '程式語言',
      'maching-learning': '機器學習',
      devops: 'DevOps'
    }
  }
})

const skills = computed(() => [
  {
    title: t('front-end'),
    items: [
      { icon: 'mdi-language-javascript', name: 'Javascript' },
      { icon: 'mdi-language-typescript', name: 'Typescript' },
      { icon: 'mdi-vuejs', name: 'Vue.js' },
      { icon: 'mdi-nuxt', name: 'Nuxt.js' },
      { icon: 'mdi-vuetify', name: 'Vuetify.js' },
      { icon: 'mdi-language-html5', name: 'HTML5' },
      { icon: 'mdi-language-css3', name: 'CSS' },
      { icon: 'mdi-sass', name: 'SASS' }
    ]
  },
  {
    title: t('back-end'),
    items: [
      { icon: 'mdi-language-csharp', name: 'C#' },
      { icon: 'mdi-dot-net', name: 'ASP.NET Core' },
      { icon: 'mdi-database-search', name: 'MySQL' }
    ]
  },
  {
    title: t('maching-learning'),
    items: [
      { icon: 'mdi-language-python', name: 'Python' },
      { icon: 'icons/pytorch.svg', name: 'Pytorch' },
      { icon: 'icons/openai.svg', name: 'Azure OpenAI' }
    ]
  },
  {
    title: t('devops'),
    items: [
      { icon: 'mdi-git', name: 'Git' },
      { icon: 'mdi-docker', name: 'Docker' },
      { icon: 'mdi-microsoft-azure-devops', name: 'Azure DevOps' }
    ]
  }
])
</script>

<style lang="scss"></style>
