<!-- src/App.vue -->
<script setup lang="ts">
// components
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />

  <RouterView />

  <Footer />
</template>

<style scoped></style>
