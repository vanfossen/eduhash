<!-- Navbar.vue -->
<script setup lang="ts">
// components
import ModalInfo from "./ModalInfo.vue";
</script>

<template>
  <div class="navbar bg-base-200 font-mono">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">EduHash</a>
    </div>
    <div class="flex-none">
      <ModalInfo />
    </div>
  </div>
</template>

<style scoped></style>
