<template>
  <v-menu location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" width="92" :ripple="false">{{ currentLocaleName }} </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        @click="setLocale(locale.code)"
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const currentLocaleName = computed(
  () => locales.value.find((i) => i.code == locale.value)?.name
);
</script>
