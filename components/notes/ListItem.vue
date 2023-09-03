<template>
  <v-card variant="flat" class="d-flex pa-2 mb-2 rounded-lg" height="200" :to="article.path">
    <v-img class="hover-zoom" width="300" max-width="300" :aspect-ratio="16 / 9" :src="defaultImage(article.date)" cover>
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height bg-fourth">
          <v-progress-circular indeterminate color="grey-lighten-4"></v-progress-circular>
        </div>
      </template>
    </v-img>
    <div>
      <NuxtLink class="text-primary hover-underline" :to="article._path">
        <v-card-title>{{ article.title }} </v-card-title>
      </NuxtLink>
      <v-card-subtitle class="d-flex align-center text-secondary">
        <v-icon left size="small" class="mr-1">mdi-calendar-month</v-icon>
        <span>{{ formatDate(article.date) }}</span>
        <v-icon left size="small" class="ml-3 mr-1">mdi-folder-outline</v-icon>
        <NuxtLink class="text-secondary hover-underline" :to="`notes/categories/${article.categories}`">
          {{ article.categories }}
        </NuxtLink>

        <NuxtLink v-for="(tag, index) in article.tags" :key="index" class="text-secondary text-decoration-none ml-3" :to="`notes/tags/${tag}`">
          #<span class="hover-underline">{{ `${tag}` }}</span>
        </NuxtLink>
      </v-card-subtitle>
      <v-card-text>{{ article.description }} </v-card-text>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { defaultImage } = useDefaultImage()

const props = defineProps<{
  article: ParsedContent
}>()

const article = computed(() => props.article)

const { formatDate } = useDateTimeFormat()
</script>

<style lang="scss">
.hover-underline {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.hover-zoom {
  img {
    transition-duration: .5s!important;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
}
</style>
