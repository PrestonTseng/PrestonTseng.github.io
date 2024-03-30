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
                { text: '利用 Azure OpenAI 與 Cognitive Search 開發企業知識管理系統' },
                { text: '利用 Azure OpenAI GPT 開發智能客服系統' },
                { text: '規劃與建立 SyncoBox 微前端架構' },
              ]
            },
            {
              name: '全端工程師',
              start: moment('2019-07-01'),
              end: moment('2024-01-01'),
              items: [
                { text: '開發 SyncoBox EIP 的差勤模組、簽核模組與部分前端頁面' },
                { text: '建立與維護 CI/CD 流程與 Azure 上的部署環境' },
                { text: '開發 SyncoBox Automation 流程自動化微服務' },
                { text: '客製化開發 Revit 模型提送申請流程自動化服務' },
                { text: '開發並維護 SyncoBox 全服務共用的後端擴充方法、權限邏輯與微服務間溝通介面' },
                { text: '利用 Nvidia Omniverse 開發高品質的渲染微服務' },
                { text: '在 SyncoBox 數位協同設計自動化服務中負責模型瀏覽元件與 SDK 開發', link: 'https://webim.com.tw/tech-ch/syncobox-autodesk-platform-services-2/' },
                { text: '負責 Autodesk Platform Service Viewer 的整合與相關元件開發' },
                { text: '開發 SyncoBox Panorama 環景服務，支援 Progressive Web App 與離線存取' },
                { text: '開發並維護 SyncoBox 全服務共用的前端元件、3D模型預覽元件、環景預覽元件與PWA相關功能' },
                { text: '以 Web 技術重構 WeBIMSync，做為微服務整合進 SyncoBox', link: 'https://www.syncobox.com/solutions/webimsync' },
                { text: '開發 SyncoBox 模型標記系統，減少建築設計中 50% 的紙本討論工作' },
                { text: '基於 BIM 模型開發 SyncoBox 設備管理系統，提高 40% 的設備維護效率' },
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
                { text: 'Utilized Azure OpenAI and Cognitive Search to develop an enterprise knowledge management service.' },
                { text: 'Utilized Azure OpenAI GPT to develop AI customer service.' },
                { text: 'Designed and built the SyncoBox micro front-end architecture.'}
              ]
            },
            {
              name: 'Full-Stack Developer',
              start: moment('2019-07-01'),
              end: moment('2024-01-01'),
              items: [
                { text: 'Developed attendance and approval modules, and parts of front-end pages for SyncoBox EIP.' },
                { text: 'Established and maintained CI/CD processes and deployments on Azure' },
                { text: 'Developed SyncoBox Automation Service for Robotic Process Automation.' },
                { text: 'Customized an automated workflow for Autodesk Revit model submission and approval processes.' },
                { text: 'Developed and maintained the shared extension methods, permission logic, and communication interfaces between microservices for the backend of SyncoBox.' },
                { text: 'Developed high-quality rendering microservices utilizing Nvidia Omniverse.' },
                {
                  text: 'Played a key role in developing model browsing components and SDK for SyncoBox Design Automation Service.',
                  link: 'https://webim.com.tw/tech-ch/syncobox-autodesk-platform-services-2/'
                },
                { text: 'Contributed to the integration and development of related components for Autodesk Platform Service Viewer.' },
                { text: 'Developed SyncoBox EIP.' },
                { text: 'Developed SyncoBox Panorama Service, supporting Progressive Web App and offline access.' },
                { text: 'Developed and maintained various frontend components, 3D model preview components, panorama preview components, and PWA-related features for SyncoBox' },
                {

                  text: 'Refactored WeBIMSync into a web service, integrating it as a microservice within SyncoBox.',
                  link: 'https://www.syncobox.com/solutions/webimsync'
                },
                { text: 'Developed SyncoBox Markup Service, reducing paper-based discussions by 50% during architectural design.' },
                { text: 'Developed SyncoBox Facility Management Service based on BIM models, increasing maintenance efficiency by 40%.' },
                { text: 'Utilized computer vision and BIM models to develop CCTV electronic fences and alarm systems, enhancing worker safety.' }
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
