<template>
  <v-container style="max-width: 1440px; min-height: calc(100vh - 100px)">
    <v-row align="start" justify="center">
      <v-col cols="12">
        <v-img src="images/working.jpg" lazy-src="images/working-sm.jpeg" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" width="100%" cover eager>
          <v-row class="ma-0" style="height: 70%" align="center" justify="center">
            <div class="font-weight-light" :class="{ 'text-h1': lgAndUp, 'text-h2': mdAndDown, 'text-h4': smAndDown }">{{ t('inProgress') }}</div>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { xs, smAndDown, mdAndDown, lgAndUp, xlAndUp } = useDisplay()

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
</script>

<style scoped></style>
