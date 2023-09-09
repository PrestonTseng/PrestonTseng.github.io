<template>
  <v-list-item :class="`ml-${item.depth * 3}`" variant="plain" density="compact" :ripple="false" @click="onClick">{{ item.text }}</v-list-item>
  <notes-toc-render-item v-for="child in item.children" :key="child.id" :item="child"></notes-toc-render-item>
</template>
<script setup lang="ts">
interface TocItem {
  id: string
  depth: number
  text: string
  children: TocItem[] | undefined
}

const props = defineProps<{
  item: TocItem
}>()

const onClick = () => {
  const el = document.getElementById(props.item.id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
}
</script>
