<!-- src/pages/Glossary.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import glossaryData from "../data/glossary.json";

// variable
const glossary = ref(glossaryData);
</script>

<template>
  <div class="grow">
    <h1 class="m-6 text-center text-3xl">Glossary</h1>

    <div class="flex flex-wrap justify-center">
      <div
        v-for="entry in glossary"
        :key="entry.word"
        class="card m-4 w-96 border border-black bg-base-100 shadow-xl"
      >
        <div class="card-body">
          <h2 class="card-title">{{ entry.word }}</h2>
          <p>{{ entry.definition }}</p>
          <div class="card-actions justify-end">
            <a
              v-for="source in entry.sources"
              :key="source.title"
              class="link-hover link text-xs"
              :href="source.url"
              target="_blank"
              >({{ source.title }})</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
