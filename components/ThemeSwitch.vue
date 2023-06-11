<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const emit = defineEmits(['update:theme'])
const props = defineProps({
  theme: {
    type: String,
    required: true
  }
})

const themeUpdated = () => {
  emit('update:theme', props.theme === 'light' ? 'dark' : 'light')
}

const icon = computed(() => (props.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'))
</script>

<template>
  <v-btn :icon="icon" variant="plain" :ripple="false" @click="themeUpdated">
  </v-btn>
</template>
