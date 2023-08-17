<template>
  <v-container style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="12" style="height: 50px"></v-col>
      <v-col cols="12" lg="3" class="text-center">
        <img class="rounded-pill mx-auto" :aspect-ratio="1" max-height="280" max-width="280" src="~/assets/images/profile_photo.png"/>
      </v-col>
      <v-col cols="12" lg="7">
        <v-card flat color="transparent">
          <div class="text-h6 font-weight-light px-4 py-2" :class="{ 'text-center': !lgAndUp }">{{ t('shortIntro') }}</div>
          <div class="text-h3 font-weight-medium text-primary px-2 pb-4" :class="{ 'text-center': !lgAndUp }">{{ t('prologue') }}</div>
          <v-card-text class="text-body-1 text-secondary text-medium-emphasis" style="white-space: pre-line">{{ t('longIntro') }}</v-card-text>
          <v-card-actions>
            <v-btn v-for="(link, index) in links" :key="index" variant="plain" :ripple="false" :href="link.href" target="_blank">
              <v-icon left size="large">{{ link.icon }}</v-icon>
              <span class="pl-2 text-body-2">{{ link.text }}</span>
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
          <about-skills></about-skills>
        </v-col>
        <v-col cols="12">
          <about-certifications></about-certifications>
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

const { smAndUp, mdAndUp, lgAndUp, xlAndUp } = useDisplay()

const { t, locale } = useI18n({
  messages: {
    en: {
      prologue: 'Po Yen Tseng',
      shortIntro: 'Full-Stack Developer',
      longIntro:
        'I have 4 years of experience as a front-end engineer and transitioned to a full-stack role a year ago. My expertise lies in utilizing Vue and Nuxt for front-end development, along with ASP.NET Core for back-end development. Within the AEC industry, I have successfully tackled various challenges, such as optimizing high device-requirement BIM models for web operation, developing suitable SaaS solutions for construction companies, and leveraging computer vision technologies to enhance safety and convenience on construction sites. \n\nI am currently working on a project that utilizes LangChain, GPT, and vector search technologies, expanding the possibilities in the AEC industry.'
    },
    'zh-TW': {
      prologue: '曾柏硯',
      shortIntro: '全端工程師',
      longIntro:
        '我擁有4年的前端工程師經驗，並於一年前轉向全端角色。我的專業領域在於使用Vue和Nuxt進行前端開發，同時使用ASP.NET Core進行後端開發。在建築工程領域，我成功地應對了各種挑戰，例如將高設備需求的BIM模型優化為適用於網頁操作，為建築公司開發適當的SaaS解決方案，並運用計算機視覺技術來提升建築工地的安全性和便利性。 \n\n   我目前正在參與一個項目，利用LangChain、GPT和向量搜索技術，擴展建築工程領域的可能性。'
    }
  }
})

const links = computed(() => [
  {
    icon: 'mdi-github',
    text: 'GitHub',
    href: 'https://github.com/prestontseng'
  },
  {
    icon: 'mdi-linkedin',
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prestontseng'
  },
  {
    icon: 'mdi-email',
    text: 'Email',
    href: 'mailto:csps50404@gmail.com'
  }
])
</script>

<style scoped></style>
