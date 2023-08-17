<template>
  <v-container style="max-width: 1440px; min-height: calc(100vh - 100px)">
    <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex flex-column align-center">
        <img src="~/assets/images/computer_penguin.png" width="360" />
        <div class="font-weight-light text-primary text-h2">{{ t('inProgress') }}</div>
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
