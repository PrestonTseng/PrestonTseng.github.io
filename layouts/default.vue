<script setup lang="ts">
import { ref } from 'vue'

const background = ref(
    `https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80`
)
const nav = ref(0)
const theme = ref('light')

</script>

<template>
    <v-app :theme="theme">
        <v-parallax :src="background">
            <v-app-bar flat density="compact">
                <v-spacer></v-spacer>
                <v-tabs v-model="nav" bg-color="transparent" color="primary">
                    <v-tab to="/"> Index </v-tab>
                    <v-tab>Experiences</v-tab>
                    <v-tab>Projects</v-tab>
                    <v-tab>Blog</v-tab>
                </v-tabs>

                <v-spacer></v-spacer>
                <lang-switch></lang-switch>
                <theme-switch v-model:theme="theme"></theme-switch>
            </v-app-bar>

            <v-main>
                <slot />
            </v-main>
        </v-parallax>
    </v-app>
</template>

<style scoped></style>
