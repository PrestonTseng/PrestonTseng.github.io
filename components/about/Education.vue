<template>
  <v-card color="transparent" flat>
    <v-card-title class="text-capitalize text-primary d-flex align-center">
      <v-icon class="mr-2">mdi-school</v-icon>
      <span>{{ t('education') }}</span>
    </v-card-title>
    <v-card-text>
      <div v-for="(edu, index) in educations" :key="index" class="py-4">
        <div class="text-subtitle-1 font-weight-bold">{{ edu.degree }}</div>
        <div class="text-subtitle-1">{{ edu.school }} | {{ edu.time }}</div>
        <div v-for="(item, itemIdx) in edu.items" :key="itemIdx" class="d-flex align-center justify-start text-secondary" style="padding-top: 10px; padding-bottom: 10px">
          <v-icon small class="pt-1 pr-2">mdi-chevron-right</v-icon>
          <span>{{ item }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({
  messages: {
    en: {
      educations: 'educations'
    },
    'zh-TW': {
      educations: '學術經歷'
    }
  }
})

interface Education {
  school: string
  degree: string
  time: string
  items: string[]
}

const educations = computed<Education[]>(() => {
  switch (locale.value) {
    case 'zh-TW':
      return [
        {
          school: '國立臺灣大學',
          degree: '土木工程系 交通工程組 碩士',
          time: '2020 - 2022',
          items: ['Got a Shin Kong Life Scholarship, which is given to outstanding students in Taiwan.']
        },
        {
          school: '國立臺灣大學',
          degree: '土木工程系 學士',
          time: '2016 - 2020',
          items: [
            'Overall GPA: 3.92/4.30. Last 60 credits GPA: 4.11/4.30.',
            'Completed railway transportation curriculum.',
            'Got a Mr. Yi‑Hsiung Hsieh Memorial Scholarship which is given to outstanding students in Civil Engineering Department.',
            'Got a Shin Kong Life Scholarship, which is given to outstanding students in Taiwan.'
          ]
        }
      ]

    case 'en':
    default:
      return [
        {
          school: 'National Taiwan University',
          degree: 'M.S. in Civil Engineering',
          time: '2020 - 2022',
          items: ['Got a Shin Kong Life Scholarship, which is given to outstanding students in Taiwan.']
        },
        {
          school: 'National Taiwan University',
          degree: 'B.S. in Civil Engineering',
          time: '2016 - 2020',
          items: [
            'Overall GPA: 3.92/4.30. Last 60 credits GPA: 4.11/4.30.',
            'Completed railway transportation curriculum.',
            'Got a Mr. Yi‑Hsiung Hsieh Memorial Scholarship which is given to outstanding students in Civil Engineering Department.',
            'Got a Shin Kong Life Scholarship, which is given to outstanding students in Taiwan.'
          ]
        }
      ]
  }
})
</script>

<style lang="scss">
.semi-transparent {
  .v-timeline-item__body {
    opacity: 0.4;
    transition: opacity 0.2s ease-in-out;
  }

  .v-timeline-item__body:hover {
    opacity: 1;
  }
}

.semi-transparent:hover {
  .v-timeline-item__body {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
}
</style>
