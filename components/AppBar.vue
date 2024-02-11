<template>
  <v-app-bar floating flat density="default" class="d-print-none">
    <v-btn variant="plain" active :ripple="false" :to="`/${locale}`">
      <v-app-bar-title>Po Yen <b>Tseng</b></v-app-bar-title>
    </v-btn>
    <template v-slot:append>
      <!-- <v-btn v-if="lgAndUp" to="/" color="primary">About</v-btn> -->
      <!-- <v-btn v-if="lgAndUp" to="portfolio" color="primary">Portfolio</v-btn> -->
      <!-- <v-btn v-if="lgAndUp" :to="`/${locale}/notes`" color="primary">Notes</v-btn> -->
      <lang-switch style="opacity: 0.7"></lang-switch>
      <v-btn color="primary" variant="outlined" :ripple="false" class="ml-4 d-print-none"
        style="opacity: 0.7" @click="print">
        <v-icon left icon="mdi-download" class="px-1 pr-2"></v-icon>
        <span class="text-capitalize">{{ t('download') }}</span>
      </v-btn>
    </template>

    <!-- <theme-switch v-model:theme="theme"></theme-switch> -->
  </v-app-bar>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { useI18n } from 'vue-i18n'
const { smAndUp, mdAndUp, lgAndUp, xlAndUp } = useDisplay()
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const { t, locale } = useI18n({
  messages: {
    en: {
      download: 'Download',
      fileName: `Preston's CV`
    },
    'zh-tw': {
      download: '下載',
      fileName: `曾柏硯的履歷`
    }
  }
})

const print = () => {
  var element = document.getElementById('about-containter')
  html2canvas(element as HTMLElement, { windowWidth: 1280, windowHeight: 1440, scale: 3, useCORS: true, allowTaint: true, ignoreElements: (e) => e.classList.contains('d-print-none') }).then(
    (canvas) => {
      var pdf = new jsPDF('p', 'mm', 'a4')
      var img = canvas.toDataURL('image/jpeg', 1.0)

      var widthOffset = 0
      var heightOffset = 0
      var width = pdf.internal.pageSize.getWidth()
      var height = pdf.internal.pageSize.getHeight()

      if (canvas.height / canvas.width > height / width) {
        width = (height * canvas.width) / canvas.height
        widthOffset = (pdf.internal.pageSize.getWidth() - width) / 2
      } else {
        height = (width * canvas.height) / canvas.width
        heightOffset = (pdf.internal.pageSize.getHeight() - height) / 2
      }

      pdf.addImage(img, 'JPEG', widthOffset, heightOffset, width, height)
      pdf.save(t('fileName'))
    }
  )
}
</script>

<style scoped></style>
