<template>
  <v-card color="transparent" flat>
    <v-card-title class="text-capitalize text-primary d-flex align-center">
      <v-icon class="mr-2">mdi-briefcase</v-icon>
      <span>{{ t('experiences') }}</span>
    </v-card-title>
    <v-card-text>
      <div v-for="(exp, index) in experiences" :key="index" class="py-4">
        <div class="d-flex align-center pb-2">
          <img :src="exp.icon" width="48" class="pa-1">
          <div class="ml-2">
            <div class="text-subtitle-1 font-weight-bold">{{ exp.company }}</div>
            <div class="d-flex align-center">
              <div class="text-secondary">{{ exp.type }}</div>
              <v-icon class="mx-3" icon="mdi-circle" size="2"></v-icon>
              <div class="text-secondary">{{ duration(exp.start, exp.end) }}</div>
            </div>
          </div>
        </div>
        <div v-for="(position, positionIndex) in exp.positions" :key="positionIndex" class="text-secondary pl-8">
          <div class="d-flex align-center text-subtitle-1 py-2">
            <div class="font-weight-bold">{{ position.name }}</div>
            <div class="mx-3 text-caption">|</div>
            <div class="text-caption">{{ timespan(position.start, position.end) }}</div>
          </div>
          <div v-for="(item, itemIndex) in position.items" :key="itemIndex"
            class="d-flex align-top justify-start text-secondary pl-4 py-1">
            <v-icon small class="pr-2">mdi-chevron-right</v-icon>
            <nuxt-link :to="item.link" target="_blank" class="text-secondary">
              <span>{{ item.text }}</span>
              <v-icon v-if="item.link" class="pl-2" size="x-small">mdi-open-in-new</v-icon>
            </nuxt-link>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import moment from 'moment'
import ntuLogo from '@/public/images/ntu-logo.jpeg'
import defaultLogo from '@/public/images/no-company.jpeg'
import juboLogo from '@/public/images/jubo-logo.jpeg'
import webimLogo from '@/public/images/webim-logo.jpeg'

const { t, locale } = useI18n({
  messages: {
    en: {
      experiences: 'experiences',
      year: 'year',
      years: 'years',
      month: 'month',
      months: 'months',
      present: 'present'
    },
    'zh-tw': {
      experiences: '工作經驗',
      year: '年',
      years: '年',
      month: '個月',
      months: '個月',
      present: '現職'
    }
  }
})

interface Experience {
  company: string,
  icon: string,
  type: string,
  start: moment.Moment,
  end: moment.Moment | null,
  positions: Position[]
}

interface Position {
  name: string,
  start: moment.Moment,
  end: moment.Moment | null,
  items: WorkItem[]

}

interface WorkItem {
  text: string,
  link?: string
}

const experiences = computed<Experience[]>(() => {
  switch (locale.value) {
    case 'zh-tw':
      return [
        {
          company: '衛武資訊股份有限公司',
          icon: webimLogo,
          type: '全職',
          start: moment('2019-07-01'),
          end: null,
          positions: [
            {
              name: 'AI 技術組長',
              start: moment('2024-01-01'),
              end: null,
              items: [
                { text: '利用 Azure AI Service 開發企業知識管理系統，協助企業將紙本文件數位化，提升文件查閱的效率' },
                { text: '利用 OpenAI GPT 開發智能客服系統自動回覆客戶問題，降低客服人員 86% 的工作量' },
                { text: '負責研究並建立微前端架構，使 Vue2 與 Vue3 的服務在轉移時能夠並存' }
              ]
            },
            {
              name: '全端工程師',
              start: moment('2019-07-01'),
              end: moment('2024-01-01'),
              items: [
                { text: '負責規劃與開發 SyncoBox EIP 的差勤、簽核模組' },
                { text: '建立與維護 CI/CD 流程與 Azure 上的部署環境' },
                { text: '負責規劃與開發 SyncoBox Automation ，將 BIM 模型的檢查流程 100% 自動化' },
                { text: '開發並維護後端團隊的共用套件、權限邏輯與微服務溝通介面，提高維護性與降低協作成本' },
                { text: '負責研究並利用 Nvidia Omniverse 開發高品質的渲染服務' },
                { text: '負責開發 SyncoBox 數位協同設計自動化服務中的 3D 模型管理介面', link: 'https://webim.com.tw/tech-ch/syncobox-autodesk-platform-services-2/' },
                { text: '負責規劃與利用 Autodesk Platform Service Viewer 開發 3D 模型渲染元件' },
                { text: '負責規劃與開發 SyncoBox Panorama ，提供支援離線存取的線上環景服務' },
                { text: '以 Web 技術重構 WeBIMSync 並整合進 SyncoBox 服務中', link: 'https://www.syncobox.com/solutions/webimsync' },
                { text: '負責規劃與開發 SyncoBox Markups，減少建築設計中 50% 的紙本討論工作' },
                { text: '負責開發 SyncoBox 建築設備管理系統，提高 40% 的廠房維護效率' },
                { text: '基於電腦視覺與 BIM 模型開發 CCTV 電子柵欄和警報系統，保障工人安全' }
              ]
            },
          ]
        },
        {
          company: '花火樹有限公司',
          icon: defaultLogo,
          type: '兼職',
          start: moment('2018-07-01'),
          end: moment('2019-07-01'),
          positions: [
            {
              name: '前端工程師',
              start: moment('2018-07-01'),
              end: moment('2019-07-01'),
              items: [
                { text: '負責獨立前端網站接案項目開發' },
                { text: '開發量化房地產分析服務 「MotherMong3000」' }
              ]
            }
          ]
        },
        {
          company: '國立台灣大學 視覺化實驗室',
          icon: 'images/ntu-logo.jpeg',
          type: '兼職',
          start: moment('2017-09-01'),
          end: moment('2020-06-30'),
          positions: [
            {
              name: '工作人員',
              start: moment('2017-09-01'),
              end: moment('2020-06-30'),
              items: [
                { text: '利用 Node.js + Vue.js 獨立開發實驗室管理系統，降低 70% 的紙本與人力作業' },
                { text: '利用 AI 與影像辨識技術開發人流管理系統' }
              ]
            }
          ]
        }
      ]

    case 'en':
    default:
      return [
        {
          company: 'WeBIM Service Co., Ltd.',
          icon: webimLogo,
          type: 'Full-time',
          start: moment('2019-07-01'),
          end: null,
          positions: [
            {
              name: 'AI Technical Lead',
              start: moment('2024-01-01'),
              end: null,
              items: [
                { text: 'Developed enterprise knowledge management system using Azure AI Service to digitize paper documents and improve document retrieval efficiency' },
                { text: 'Developed intelligent customer service system using OpenAI GPT to automatically respond to customer inquiries, reducing 86% of customer service workload' },
                { text: 'Researched and established micro-front-end architecture to allow Vue2 and Vue3 services to coexist during migration' }
              ]
            },
            {
              name: 'Full-Stack Developer',
              start: moment('2019-07-01'),
              end: moment('2024-01-01'),
              items: [
                { text: 'Responsible for designing and developing the attendance and approval modules of SyncoBox EIP' },
                { text: 'Established and maintained CI/CD processes and deployments on Azure' },
                { text: 'Designed and developed SyncoBox Automation to automate 100% of the inspection process of BIM models' },
                { text: 'Developed and maintained shared packages, permission logic, and microservice communication interfaces for the backend team to improve maintainability and reduce collaboration costs' },
                { text: 'Researched and utilized Nvidia Omniverse to develop high-quality rendering services' },
                { text: 'Developed the 3D model management module for SyncoBox digital design automation service', link: 'https://webim.com.tw/tech-ch/syncobox-autodesk-platform-services-2/' },
                { text: 'Designed and utilized Autodesk Platform Service Viewer to develop 3D model rendering components' },
                { text: 'Designed and developed SyncoBox Panorama to provide online panoramic services with offline access support' },
                { text: 'Refactored WeBIMSync with web technologies and integrated it into SyncoBox services', link: 'https://www.syncobox.com/solutions/webimsync' },
                { text: 'Designed and developed SyncoBox Markups to reduce 50% of paper-based discussions in architectural design' },
                { text: 'Developed SyncoBox facility management service to improve factory maintenance efficiency by 40%' },
                { text: 'Developed CCTV electronic fence and alarm system based on computer vision and BIM models to ensure worker safety' }
              ]
            }
          ]
        },
        {
          company: 'Hanabiki Ltd',
          icon: defaultLogo,
          type: 'Part-time',
          start: moment('2018-07-01'),
          end: moment('2019-07-01'),
          positions: [
            {
              name: 'Frontend Developer',
              start: moment('2018-07-01'),
              end: moment('2019-07-01'),
              items: [
                { text: 'Developed front-end pages for several web projects.' },
                { text: 'Developed a real estate analysis service called ”MotherMong3000”.' }
              ]
            }
          ]
        },
        {
          company: 'National Taiwan University V.Lab',
          icon: ntuLogo,
          type: 'Part-time',
          start: moment('2017-09-01'),
          end: moment('2020-06-30'),
          positions: [
            {
              name: 'Undergraduate Researcher',
              start: moment('2017-09-01'),
              end: moment('2020-06-30'),
              items: [
                { text: 'Independently developed a laboratory management system using Node.js and Vue.js, reducing paper-based and manual operations by 70%.' },
                { text: 'Developed a people flow management system utilizing AI and image recognition technology.' }
              ]
            }
          ]
        }
      ]
  }
})

const duration = (start: moment.Moment, end: moment.Moment | null): string => {
  const e = end ?? moment()
  const years = e.diff(start, 'years')
  const months = e.diff(start, 'months') % 12

  return `${years} ${t(years > 1 ? 'years' : 'year')} ${months} ${t(months > 1 ? 'months' : 'month')}`
}

const timespan = (start: moment.Moment, end: moment.Moment | null): string => {
  const from = start.format("yyyy MMM")
  const to = end ? end.format("yyyy MMM") : t('present')
  return `${from} - ${to}`
}

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
