<!-- src/components/Navbar.vue -->
<script setup lang="ts">
// components
import ModalInfo from "./ModalInfo.vue";
</script>

<template>
  <div class="navbar bg-base-200 font-mono">
    <div class="flex-1">
      <span class="px-3 text-xl font-bold">EduHash</span>
    </div>
    <div class="flex-none">
      <ModalInfo />
    </div>
  </div>
</template>

<style scoped></style>
