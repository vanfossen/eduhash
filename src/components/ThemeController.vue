<!-- ThemeController.vue -->
<script setup lang="ts">
import { ref } from "vue";

const isDark = ref<boolean>(
  window.matchMedia("(prefers-color-scheme: dark)").matches,
);
</script>

<template>
  <div class="flex flex-col items-center justify-center font-mono">
    <p class="mb-2 font-bold">Theme</p>

    <div class="join join-horizontal">
      <input
        type="radio"
        name="theme-buttons"
        class="theme-controller btn join-item"
        aria-label="Light"
        value="light"
        :checked="!isDark"
      />
      <input
        type="radio"
        name="theme-buttons"
        class="theme-controller btn join-item"
        aria-label="Dark"
        value="dark"
        :checked="isDark"
      />
    </div>
  </div>
</template>

<style scoped></style>
