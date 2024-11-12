<!-- src/components/ThemeController.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref, watch } from "vue";

// variables
const themeStorage = localStorage.getItem("theme");
const isDark = ref<boolean>(false);

if (themeStorage) {
  isDark.value = themeStorage === "dark" ? true : false;
} else {
  isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
}

watch(isDark, (newValue) => {
  localStorage.setItem("theme", newValue ? "dark" : "light");
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
};
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
        @click="toggleTheme"
      />
      <input
        type="radio"
        name="theme-buttons"
        class="theme-controller btn join-item"
        aria-label="Dark"
        value="dark"
        :checked="isDark"
        @click="toggleTheme"
      />
    </div>
  </div>
</template>

<style scoped></style>
