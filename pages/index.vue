<template>
  <v-container id="about-containter" style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="12" style="height: 50px"></v-col>
      <v-col cols="12" lg="4" class="text-center">
        <img class="rounded-pill mx-auto" :aspect-ratio="1" max-height="280" max-width="280" src="~/public/images/profile_photo.png" />
      </v-col>
      <v-col cols="12" lg="7">
        <v-card flat color="transparent">
          <div class="text-h6 font-weight-light px-4 py-2" :class="{ 'text-center': !lgAndUp }">{{ t('shortIntro') }}</div>
          <div class="text-h3 font-weight-medium text-primary px-2 pb-2" :class="{ 'text-center': !lgAndUp }">{{ t('prologue') }}</div>
          <v-card-text class="text-secondary text-medium-emphasis" style="white-space: pre-line; line-height: 1.5rem; font-size: 0.95rem">{{ t('longIntro') }}</v-card-text>
          <v-card-actions>
            <v-btn
              v-for="(link, index) in links"
              :key="index"
              size="small"
              color="secondary"
              variant="outlined"
              :ripple="false"
              :href="link.href"
              :target="link.target"
              class="rounded-pill"
              style="opacity: 0.7"
            >
              <v-icon left :icon="link.icon" class="px-1 pr-2"></v-icon>
              <span class="text-capitalize">{{ link.text }}</span>
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
      longIntro: `With 4 years of front-end experience, I transitioned to a full-stack role a year ago, specializing in Vue.js, Nuxt.js (front-end), and .NET Core with MySQL (back-end). I focus on developing web services for architecture and civil engineering, such as transferring complex BIM models to the web for improved accessibility and collaboration. I also explore tools like Azure OpenAI and Cognitive Search to enhance document retrieval and analysis. My aim is to innovate and drive digital transformation in this field.`
    },
    'zh-TW': {
      prologue: '曾柏硯',
      shortIntro: '全端工程師',
      longIntro: `從高中開始，我便持續自學網頁開發，至今已有４年前端工作經驗．１年前因現職工作需求，開始涉獵後端，作為全端工程師，同時負責前後端的開發。前端方面主要使用 Vue.js 和 Nuxt.js 進行開發。而後端方面則採用 .NET Core 搭配 MySQL。 在目前的職務上致力於研發各種網路服務，為建築和土木工程領域提供數位轉型的解決方案。例如將原本需要高度圖像處理設備的 BIM 模型轉移到網頁上，打破了設備的限制，讓各種不同的設備和環境都能立即查看和協作。此外，我也持續學習並嘗試新工具，例如運用 Azure OpenAI 和 Cognitive Search 技術，讓過去的建築和土木工程文件以及工程圖紙能夠輕鬆地被檢索和分析。我的使命是不斷探索創新的解決方案，推動建築與土木工程領域的數位化進程。`
    }
  }
})

const links = computed(() => [
  {
    icon: 'mdi-github',
    text: 'GitHub',
    href: 'https://github.com/prestontseng',
    target: '_blank'
  },
  {
    icon: 'mdi-linkedin',
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prestontseng',
    target: '_blank'
  },
  {
    icon: 'mdi-email',
    text: 'E-mail',
    href: 'mailto:csps50404@gmail.com',
    target: '_blank'
  }
])
</script>

<style lang="scss" scoped></style>
