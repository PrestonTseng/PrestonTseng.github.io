<template>
  <v-container id="about-containter" style="max-width: 1280px">
    <v-row align="start" justify="center">
      <v-col cols="9">
        <ContentDoc>
          <template #default>
            <notes-content-render :doc="doc"></notes-content-render>
          </template>
          <template #not-found>
            <notes-content-not-found></notes-content-not-found>
          </template>
        </ContentDoc>
      </v-col>
      <v-col class="sticky" cols="3">
        <notes-toc-render-item v-for="item in doc.body.toc.links" :key="item.id" :item="item"></notes-toc-render-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const route = useRoute()
const { slug } = route.params
const { t, locale } = useI18n({
  messages: {}
})
const actived = ref('')
const doc = await queryContent(locale.value, 'notes', slug.toString()).findOne()
</script>

<style lang="scss">
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
}
</style>
