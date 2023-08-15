<template>
  <v-container style="max-width: 1440px; min-height: calc(100vh - 100px)">
    <v-row align="start" justify="center">
      <v-col cols="12">
        <v-img src="assets/working-lg.jpg" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" width="100%" cover eager>
          <v-row class="ma-0" style="height: 70%" align="center" justify="center">
            <div class="text-h1 pb">{{ t('inProgress') }}</div>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { t } = useI18n({
  messages: {
    en: {
      inProgress: 'In Progress'
    },
    'zh-TW': {
      inProgress: '準備中'
    }
  }
})
const { smAndUp, mdAndUp, lgAndUp, xlAndUp } = useDisplay()
</script>

<style scoped></style>
