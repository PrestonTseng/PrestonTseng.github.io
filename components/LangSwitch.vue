<script setup>
import { useI18n } from 'vue-i18n'

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<template>
  <v-menu open-on-hover location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" variant="plain" icon="mdi-google-translate" :ripple="false"> </v-btn> 
    </template>
    <v-list>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.stop="setLocale(locale.code)"
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
