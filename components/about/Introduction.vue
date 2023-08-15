<template>
  <v-card color="transparent" flat>
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="12" class="d-flex flex-column align-center justify-center" style="padding-top: 148px">
          <div class="text-h1 font-weight-black text-primary">{{ t('prologue') }}</div>
        </v-col>
        <v-col cols="12" class="d-flex align-center justify-center my-16">
          <v-row>
            <v-col cols="12" lg="4" class="d-flex flex-column align-center justify-center">
              <v-img class="rounded-xl" :aspect-ratio="1" max-height="300" max-width="300" src="assets/profile-photo.jpg" cover></v-img>
            </v-col>
            <v-col cols="12" lg="8" class="d-flex flex-column align-start justify-center" style="white-space: pre-line">
              <span class="text-h4 font-weight-bold py-4 text-primary">{{ t('shortIntro') }}</span>
              <span class="text-subtitle-1 py-4 text-secondary">{{ t('longIntro') }}</span>
              <div class="d-flex align-start justify-start py-4 text-contrast" style="margin-left: -16px">
                <v-btn v-for="(link, index) in links" :key="index" variant="plain" :ripple="false" :href="link.href">
                  <v-icon left size="large">{{ link.icon }}</v-icon>
                  <span class="pl-2 text-body-2">{{ link.text }}</span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({
  messages: {
    en: {
      prologue: "I'm Preston",
      shortIntro: "I'm a Full Stack Engineer working at Taipei, Taiwan.",
      longIntro:
        'I have 4 years of experience as a front-end engineer and transitioned to a full-stack role a year ago. My expertise lies in utilizing Vue and Nuxt for front-end development, along with ASP.NET Core for back-end development. Within the AEC industry, I have successfully tackled various challenges, such as optimizing high device-requirement BIM models for web operation, developing suitable SaaS solutions for construction companies, and leveraging computer vision technologies to enhance safety and convenience on construction sites. \n\nI am currently working on a project that utilizes LangChain, GPT, and vector search technologies, expanding the possibilities in the AEC industry.'
    },
    'zh-TW': {
      prologue: "I'm Preston",
      shortIntro: "I'm a Full Stack Engineer working at Taipei, Taiwan.",
      longIntro:
        'I have 4 years of experience as a front-end engineer and transitioned to a full-stack role a year ago. My expertise lies in utilizing Vue and Nuxt for front-end development, along with ASP.NET Core for back-end development. Within the AEC industry, I have successfully tackled various challenges, such as optimizing high device-requirement BIM models for web operation, developing suitable SaaS solutions for construction companies, and leveraging computer vision technologies to enhance safety and convenience on construction sites. \n\nI am currently working on a project that utilizes LangChain, GPT, and vector search technologies, expanding the possibilities in the AEC industry.'
    }
  }
})

const links = computed(() => [
  {
    icon: 'mdi-github',
    text: '@prestontseng',
    href: 'https://github.com/prestontseng'
  },
  {
    icon: 'mdi-linkedin',
    text: '@prestontseng',
    href: 'https://www.linkedin.com/in/linkedInAccount'
  },
  {
    icon: 'mdi-email',
    text: 'csps50404@gmail.com',
    href: 'mailto:csps50404@gmail.com'
  }
])
</script>

<style lang="scss"></style>
