<template>
  <v-container id="about-containter" style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="12" style="height: 50px"></v-col>
      <v-col cols="12" lg="4" class="text-center">
        <img class="rounded-pill mx-auto" :aspect-ratio="1" max-height="280" max-width="280" :src="headshotLg" />
      </v-col>
      <v-col cols="12" lg="7">
        <v-card flat color="transparent">
          <div class="text-h6 font-weight-light px-4 py-2" :class="{ 'text-center': !lgAndUp }">{{ t('shortIntro') }}</div>
          <div class="text-h3 font-weight-medium text-primary px-2 pb-2" :class="{ 'text-center': !lgAndUp }">{{ t('prologue') }}</div>
          <v-card-text class="text-secondary text-medium-emphasis" style="white-space: pre-line; line-height: 1.5rem; font-size: 0.95rem">{{ t('longIntro') }}</v-card-text>
          <v-card-actions :class="{'d-flex justify-center': !lgAndUp}">
            <v-btn
              v-for="(link, index) in links"
              :key="index"
              size="small"
              color="secondary"
              variant="outlined"
              :ripple="false"
              :href="link.href"
              :target="link.target"
              class="rounded-pill ml-4"
              style="opacity: 0.7"
            >
              <v-icon left :icon="link.icon" class="px-1 pr-2"></v-icon>
              <span class="text-lowercase">{{ link.text }}</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" style="height: 50px"></v-col>
      <v-col cols="12" lg="6">
        <v-col cols="12">
          <about-experiences></about-experiences>
        </v-col>
      </v-col>
      <v-col cols="12" lg="6">
        <v-col cols="12">
          <about-certifications></about-certifications>
        </v-col>
        <v-col cols="12">
          <about-skills></about-skills>
        </v-col>
        <v-col cols="12">
          <about-education></about-education>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'
import headshotLg from '@/public/images/profile_photo.png'
import headshot from '@/public/images/profile_photo_sm.png'

const { smAndUp, mdAndUp, lgAndUp, xlAndUp } = useDisplay()

const { t } = useI18n({
  messages: {
    en: {
      prologue: 'Po Yen Tseng',
      shortIntro: 'Full-Stack Developer',
      longIntro: `Since high school, I have been self-taught in programming, and my passion for technology led me to frequently enroll in computer science courses during my university and graduate studies. I actively engaged in internships and freelance projects from my university days to hone my practical skills. Initially starting as a front-end developer, my thirst for knowledge prompted me to volunteer for back-end development projects, eventually evolving into a full-stack developer. I am passionate about researching new technologies, with a recent focus on AI-related technologies. Utilizing what I've learned, I successfully guided my team to venture into new business domains for the company by developing AI applications.`,
      download: 'Download',
      fileName: `Preston's CV`
    },
    'zh-tw': {
      prologue: '曾柏硯',
      shortIntro: '全端工程師',
      longIntro: `自高中開始自學程式設計，對技術的熱情使我在大學及研究所期間，經常跨系修讀資訊工程相關課程。我從大學時期就積極參與實習與接案工作來磨練自己的實務能力，初期為前端工程師，但出於對技術的渴望，我主動要求參與後端開發項目，最終成為一名全端工程師。我對於研究新技術充滿熱情，近期特別專注於研究 AI 相關的技術，並且利用所學，成功帶領團隊開拓了公司 AI 應用開發的相關業務。`,
      download: '下載',
      fileName: `曾柏硯的履歷`
    }
  }
})

const title = computed(() => t('prologue'))
const description = computed(() => t('longIntro'))
useHead({
  title,
  meta: [{ hid: 'description', name: 'description', content: description }]
})

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: headshot,
  twitterCard: 'summary_large_image'
})

const links = computed(() => [
  {
    icon: 'mdi-github',
    text: '@prestontseng',
    href: 'https://github.com/prestontseng',
    target: '_blank'
  },
  {
    icon: 'mdi-linkedin',
    text: '@prestontseng',
    href: 'https://www.linkedin.com/in/prestontseng',
    target: '_blank'
  },
  {
    icon: 'mdi-email',
    text: 'csps50404@gmail.com',
    href: 'mailto:csps50404@gmail.com',
    target: '_blank'
  }
])
</script>

<style lang="scss">
@page {
  size: A4;
  -webkit-print-color-adjust: exact;
}
</style>
