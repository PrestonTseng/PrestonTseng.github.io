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
  items: string[]
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
            '開發企業資訊門戶 (EIP) 和 WeBIM Service 的發票系統',
            '研究使用深度學習和計算機視覺技術進行 dashboard 信號識別的可行性和方法',
            '使用 Nvidia Omniverse 為 RESTful API 開發高質量的全景渲染服務',
            '開發 Autodesk Forge Viewer 的實時協作擴展',
            '重新研發 BIM 管理軟件 WeBIMSync 作為 web 服務，以克服 BIM 模型高設備要求的限制',
            '使用 CCTV 和 BIM 模型實現電子柵欄和警報系統，提高工人安全',
            '為 SyncoBox 開發標記系統，減少建築設計中 50% 的紙質工作',
            '為 SyncoBox 開發 BIM 設施管理系統，提高 40% 的設備維護效率'
          ]
        },
        {
          company: '花火樹有限公司',
          position: '前端工程師',
          time: '2018 - 2019',
          items: ['負責多個中型網站項目', '開發量化房地產分析服務 “MotherMong3000”']
        },
        {
          company: '智齡科技股份有限公司',
          position: '前端實習工程師',
          time: '2018 - 2018',
          items: ['利用 React/Redux 開發長期護理系統的血液檢查結果查詢頁面']
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
            'Developed an enterprise information portal (EIP) and invoicing system for WeBIM Service.',
            'Researched the feasibility and methodology of dashboard signal recognition with deep leaning and computer vision technic.',
            'Developed high-quality panorama rendering service as RESTful API utilizing Nvidia Omniverse.',
            'Developed a real-time collaborating extension for Autodesk Forge Viewer.',
            'Reproduced WeBIMSync, a BIM management software, as a web service to overcome the high device requirement of BIM models.',
            'Implemented electronic fencing and alarm system with CCTV and BIM model to enhance worker safety.',
            'Developed a markup system for SyncoBox to reduce 50% paper works in construction design.',
            'Developed a BIM facilities management system for SyncoBox to increase 40% of equipment maintenance efficiency.'
          ]
        },
        {
          company: 'Hanabiki Ltd',
          position: 'Front-end Developer',
          time: '2018 - 2019',
          items: ['Responsible for several medium-scale web projects.', 'Developed a quantitative real estate analysis service called ”MotherMong3000”.']
        },
        {
          company: 'Smart Ageing Tech CO., LTD',
          position: 'Front-end Developer Intern',
          time: '2018 - 2018',
          items: ['Developed the blood testing module of long-term care system']
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
