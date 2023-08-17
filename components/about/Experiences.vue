<template>
  <v-card color="transparent" flat>
    <v-card-title class="text-capitalize text-primary d-flex align-center">
      <v-icon class="mr-2">mdi-briefcase</v-icon>
      <span>{{ t('experiences') }}</span>
    </v-card-title>
    <v-card-text>
      <div v-for="(exp, index) in experiences" :key="index" class="py-4">
        <div class="text-subtitle-1 font-weight-bold">{{ exp.position }}</div>
        <div class="text-subtitle-1">{{ exp.company }} | {{ exp.time }}</div>
        <div v-for="(item, itemIdx) in exp.items" :key="itemIdx" class="d-flex align-center justify-start text-secondary" style="padding-top: 10px; padding-bottom: 10px">
          <v-icon v-if="item.type == 'item'" small class="pt-1 pr-2">mdi-chevron-right</v-icon>
          <nuxt-link :to="item.link" target="_blank" class="text-secondary" :class="{ 'mt-4 font-weight-bold': item.type == 'subtitle' }">
            <span>{{ item.text }}</span>
            <v-icon v-if="item.link" class="pl-2" size="x-small">mdi-open-in-new</v-icon>
          </nuxt-link>
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
    'zh-TW': {
      experiences: '工作經驗'
    }
  }
})

interface Experience {
  company: string
  position: string
  time: string
  items: any
}

const experiences = computed<Experience[]>(() => {
  switch (locale.value) {
    case 'zh-TW':
      return [
        {
          company: '衛武資訊股份有限公司',
          position: '研發工程師',
          time: '2019 - 現職',
          items: [
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
            { type: 'item', text: '基於電腦視覺與 BIM 模型開發 CCTV 電子柵欄和警報系統，保障工人安全' },
            { type: 'subtitle', text: '機器學習' },
            { type: 'item', text: '利用微軟 OpenAI 與 Cognitive Search 開發企業知識管理系統' }
          ]
        },
        {
          company: '花火樹有限公司',
          position: '前端工程師',
          time: '2018 - 2019',
          items: [
            { type: 'item', text: '負責數個獨立前端網站項目' },
            { type: 'item', text: '開發量化房地產分析服務 「MotherMong3000」' }
          ]
        },
        {
          company: '智齡科技股份有限公司',
          position: '前端實習工程師',
          time: '2018 - 2018',
          items: [{ type: 'item', text: '利用 React/Redux 開發長期護理系統的血液檢查結果查詢頁面' }]
        }
      ]

    case 'en':
    default:
      return [
        {
          company: 'WeBIM Service Co., Ltd.',
          position: 'Research and Development Engineer',
          time: '2019 -',
          items: [
            { type: 'subtitle', text: 'Web Backend' },
            { type: 'item', text: 'Developed SyncoBox EIP.' },
            { type: 'item', text: 'Developed SyncoBox Automation Service for Robotic Process Automation.' },
            { type: 'item', text: 'Customized an automated workflow for Autodesk Revit model submission and approval processes.' },
            { type: 'item', text: 'Developed several foundational backend development shared across the team.' },
            { type: 'item', text: 'Developed high-quality rendering microservices utilizing Nvidia Omniverse.' },
            { type: 'subtitle', text: 'Web Frontend' },
            {
              type: 'item',
              text: "Played a key role in developing model browsing components and SDK for SyncoBox Design Automation Service.",
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
            { type: 'item', text: 'Utilized computer vision and BIM models to develop CCTV electronic fences and alarm systems, enhancing worker safety.' },
            { type: 'subtitle', text: 'Machine Learning' },
            { type: 'item', text: 'Utilized Microsoft OpenAI and Cognitive Search to develop an enterprise knowledge management service.' }
          ]
        },
        {
          company: 'Hanabiki Ltd',
          position: 'Front-end Developer',
          time: '2018 - 2019',
          items: [
            { type: 'item', text: 'Developed several web projects.' },
            { type: 'item', text: 'Developed a real estate analysis service called ”MotherMong3000”.' }
          ]
        },
        {
          company: 'Smart Ageing Tech CO., LTD',
          position: 'Front-end Developer Intern',
          time: '2018 - 2018',
          items: [{ type: 'item', text: 'Developed the blood testing module of long-term care system' }]
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
