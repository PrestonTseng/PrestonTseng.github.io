<template>
  <v-card color="transparent" flat>
    <v-card-title class="text-capitalize text-primary d-flex align-center">
      <v-icon class="mr-2">mdi-school</v-icon>
      <span>{{ t('educations') }}</span>
    </v-card-title>
    <v-card-text>
      <div v-for="(edu, index) in educations" :key="index" class="py-4">
        <div class="text-subtitle-1 font-weight-bold">{{ edu.degree }}</div>
        <div class="text-subtitle-1">{{ edu.school }} | {{ edu.time }}</div>
        <div v-for="(item, itemIdx) in edu.items" :key="itemIdx" class="d-flex align-center justify-start text-secondary" style="padding-top: 10px; padding-bottom: 10px">
          <v-icon small class="pt-1 pr-2">mdi-chevron-right</v-icon>
          <div>
            <nuxt-link :to="item.link" target="_blank" class="text-secondary">
              <span>{{ item.title }}</span>
              <v-icon v-if="item.link" class="pl-2" size="x-small">mdi-open-in-new</v-icon>
            </nuxt-link>
            <div class="font-italic text-body-2">{{ item.subtitle }}</div>
          </div>
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
  items: any
}

const educations = computed<Education[]>(() => {
  switch (locale.value) {
    case 'zh-TW':
      return [
        {
          school: '國立臺灣大學',
          degree: '土木工程系 交通工程組 碩士',
          time: '2020 - 2022',
          items: [
            { title: 'GPA：3.93/4.30' },
            {
              title: 'Real‐Time Indoor Localization with Visual SLAM for Emergency Responders',
              subtitle: 'Automation in Construction, 2022',
              link: 'https://www.sciencedirect.com/science/article/abs/pii/S0926580522001923'
            },
            {
              title: '應用 Visual SLAM 於建築內緊急救護之即時室內定位',
              subtitle: '碩士論文, 2022',
              link: 'https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22110NTU05015122%22.&searchmode=basic'
            },
            { title: 'Emergency Indoor Positioning System with Visual SLAM to Improve the Efficiency of EMS', subtitle: 'SCEM International Conference, 2022', link: null }
          ]
        },
        {
          school: '國立臺灣大學',
          degree: '土木工程系 學士',
          time: '2016 - 2020',
          items: [{ title: 'GPA：3.92/4.30' }, { title: '完成運輸工程學群。' }]
        }
      ]

    case 'en':
    default:
      return [
        {
          school: 'National Taiwan University',
          degree: 'M.S. in Civil Engineering',
          time: '2020 - 2022',
          items: [
            { title: 'Overall GPA: 3.93/4.30.' },
            {
              title: 'Real‐Time Indoor Localization with Visual SLAM for Emergency Responders',
              subtitle: 'Automation in Construction, 2022',
              link: 'https://www.sciencedirect.com/science/article/abs/pii/S0926580522001923'
            },
            {
              title: 'Real‐Time Indoor Localization with Visual SLAM for In‐building Emergency Response',
              subtitle: 'Master Thesis, 2022',
              link: 'https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22110NTU05015122%22.&searchmode=basic'
            },
            { title: 'Emergency Indoor Positioning System with Visual SLAM to Improve the Efficiency of EMS', subtitle: 'SCEM International Conference, 2022', link: null }
          ]
        },
        {
          school: 'National Taiwan University',
          degree: 'B.S. in Civil Engineering',
          time: '2016 - 2020',
          items: [{ title: 'Overall GPA: 3.92/4.30.' }, { title: 'Completed railway transportation curriculum.' }]
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
