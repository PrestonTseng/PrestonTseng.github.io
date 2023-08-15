<template>
  <v-container style="max-width: 1440px">
    <v-row align="start" justify="center">
      <v-col cols="12">
        <about-introduction></about-introduction>
      </v-col>
      <v-col cols="12" lg="6">
        <v-col cols="12">
          <about-experiences></about-experiences>
        </v-col>
        <v-col cols="12">
          <about-certifications></about-certifications>
        </v-col>
      </v-col>
      <v-col cols="12" lg="6">
        <v-col cols="12">
          <about-skills></about-skills>
        </v-col>
        <v-col cols="12">
          <about-education></about-education>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { t } = useI18n()
const { smAndUp, mdAndUp, lgAndUp, xlAndUp } = useDisplay()
</script>

<style scoped></style>
