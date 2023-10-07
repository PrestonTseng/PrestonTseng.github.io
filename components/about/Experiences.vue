<template>
  <v-card color="transparent" flat>
    <v-card-title class="text-capitalize text-primary d-flex align-center">
      <v-icon class="mr-2">mdi-briefcase</v-icon>
      <span>{{ t('experiences') }}</span>
    </v-card-title>
    <v-card-text>
      <div v-for="(exp, index) in experiences" :key="index" class="py-4">
        <div class="d-flex align-center">
          <div class="text-subtitle-1 font-weight-bold">{{ exp.position }}</div>
          <div class="mx-2 text-caption text-secondary">{{ exp.type }}</div>
        </div>
        <div class="text-subtitle-1">{{ exp.company }} | {{ exp.time }}</div>
        <div v-for="(item, itemIdx) in exp.items" :key="itemIdx" class="d-flex align-center justify-start text-secondary" style="padding-top: 10px; padding-bottom: 10px">
          <template v-if="item.type == 'subtitle'">
            <span class="mt-4 font-weight-bold">{{ item.text }}</span>
          </template>
          <template v-else>
            <v-icon small class="pr-2">mdi-chevron-right</v-icon>
            <nuxt-link :to="item.link" target="_blank" class="text-secondary">
              <span>{{ item.text }}</span>
              <v-icon v-if="item.link" class="pl-2" size="x-small">mdi-open-in-new</v-icon>
            </nuxt-link>
          </template>
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
      experiences: 'experiences'
    },
    'zh-tw': {
      experiences: '工作經驗'
    }
  }
})

interface Experience {
  company: string
  position: string
  type: string
  time: string
  items: any
}

const experiences = computed<Experience[]>(() => {
  switch (locale.value) {
    case 'zh-tw':
      return [
        {
          company: '衛武資訊股份有限公司',
          position: '研發工程師',
          time: '2019 - 現職',
          type: '全職',
          items: [
            { type: 'subtitle', text: '機器學習' },
            { type: 'item', text: '利用 Azure OpenAI 與 Cognitive Search 開發企業知識管理系統' },
            { type: 'subtitle', text: '網頁後端' },
            { type: 'item', text: '開發 SyncoBox EIP 的差勤、簽核、費用申請模組' },
            { type: 'item', text: '開發 SyncoBox Automation 流程自動化微服務' },
            { type: 'item', text: '客製化開發 Revit 模型提送申請流程自動化服務' },
            { type: 'item', text: '進行後端基礎建設開發團隊共用套件' },
            { type: 'item', text: '利用 Nvidia Omniverse 開發高品質的渲染微服務' },
            { type: 'subtitle', text: '網頁前端' },
            { type: 'item', text: '在 SyncoBox 數位協同設計自動化服務中負責模型瀏覽元件與 SDK 開發', link: 'https://webim.com.tw/tech-ch/syncobox-autodesk-platform-services-2/' },
            { type: 'item', text: '負責 Autodesk Platform Service Viewer 的整合與相關元件開發' },
            { type: 'item', text: '負責 SyncoBox EIP 前端頁面' },
            { type: 'item', text: '開發 SyncoBox Panorama 環景服務，支援 Progressive Web App 與離線存取' },
            { type: 'item', text: '進行前端基礎建設開發團隊共用套件' },
            { type: 'item', text: '以 Web 技術重構 WeBIMSync，做為微服務整合進 SyncoBox', link: 'https://www.syncobox.com/solutions/webimsync' },
            { type: 'item', text: '開發 SyncoBox 模型標記系統，減少建築設計中 50% 的紙本討論工作' },
            { type: 'item', text: '基於 BIM 模型開發 SyncoBox 設備管理系統，提高 40% 的設備維護效率' },
            { type: 'item', text: '基於電腦視覺與 BIM 模型開發 CCTV 電子柵欄和警報系統，保障工人安全' }
          ]
        },
        {
          company: '花火樹有限公司',
          position: '前端工程師',
          type: '兼職',
          time: '2018 - 2019',
          items: [
            { type: 'item', text: '負責數個獨立前端網站項目' },
            { type: 'item', text: '開發量化房地產分析服務 「MotherMong3000」' }
          ]
        },
        {
          company: '智齡科技',
          position: '前端工程師',
          type: '兼職',
          time: '2018 - 2018',
          items: [{ type: 'item', text: '利用 React/Redux 獨立完成照護系統的血液檢查前端頁面' }]
        },
        {
          company: '國立台灣大學 視覺化實驗室',
          position: '工讀生',
          type: '兼職',
          time: '2016 - 2020',
          items: [
            { type: 'item', text: '利用 Node.js + Vue.js 獨立開發實驗室管理系統，降低 70% 的紙本與人力作業' },
            { type: 'item', text: '利用 AI 與影像辨識技術開發人流管理系統' }
          ]
        }
      ]

    case 'en':
    default:
      return [
        {
          company: 'WeBIM Service Co., Ltd.',
          position: 'Research and Development Engineer',
          type: 'Full-time',
          time: '2019 -',
          items: [
            { type: 'subtitle', text: 'Machine Learning' },
            { type: 'item', text: 'Utilized Microsoft OpenAI and Cognitive Search to develop an enterprise knowledge management service.' },
            { type: 'subtitle', text: 'Web Backend' },
            { type: 'item', text: 'Developed SyncoBox EIP.' },
            { type: 'item', text: 'Developed SyncoBox Automation Service for Robotic Process Automation.' },
            { type: 'item', text: 'Customized an automated workflow for Autodesk Revit model submission and approval processes.' },
            { type: 'item', text: 'Developed several foundational backend development shared across the team.' },
            { type: 'item', text: 'Developed high-quality rendering microservices utilizing Nvidia Omniverse.' },
            { type: 'subtitle', text: 'Web Frontend' },
            {
              type: 'item',
              text: 'Played a key role in developing model browsing components and SDK for SyncoBox Design Automation Service.',
              link: 'https://webim.com.tw/tech-ch/syncobox-autodesk-platform-services-2/'
            },
            { type: 'item', text: 'Contributed to the integration and development of related components for Autodesk Platform Service Viewer.' },
            { type: 'item', text: 'Developed SyncoBox EIP.' },
            { type: 'item', text: 'Developed SyncoBox Panorama Service, supporting Progressive Web App and offline access.' },
            { type: 'item', text: 'Developed several foundational frontend components shared across the team.' },
            {
              type: 'item',
              text: 'Refactored WeBIMSync into a web service, integrating it as a microservice within SyncoBox.',
              link: 'https://www.syncobox.com/solutions/webimsync'
            },
            { type: 'item', text: 'Developed SyncoBox Markup Service, reducing paper-based discussions by 50% during architectural design.' },
            { type: 'item', text: 'Developed SyncoBox Facility Management Service based on BIM models, increasing maintenance efficiency by 40%.' },
            { type: 'item', text: 'Utilized computer vision and BIM models to develop CCTV electronic fences and alarm systems, enhancing worker safety.' }
          ]
        },
        {
          company: 'Hanabiki Ltd',
          position: 'Front-end Developer',
          type: 'Part-time',
          time: '2018 - 2019',
          items: [
            { type: 'item', text: 'Developed several web projects.' },
            { type: 'item', text: 'Developed a real estate analysis service called ”MotherMong3000”.' }
          ]
        },
        {
          company: 'Smart Ageing Tech Co., Ltd.',
          position: 'Front-end Developer',
          type: 'Part-time',
          time: '2018 - 2018',
          items: [{ type: 'item', text: `Developed the front-end interface for a healthcare system's blood testing module independently using React/Redux.` }]
        },
        {
          company: 'National Taiwan University V.Lab',
          position: 'Undergraduate Researcher',
          type: 'Part-time',
          time: '2016 - 2020',
          items: [
            { type: 'item', text: 'Independently developed a laboratory management system using Node.js and Vue.js, reducing paper-based and manual operations by 70%.' },
            { type: 'item', text: 'Developed a people flow management system utilizing AI and image recognition technology.' }
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
