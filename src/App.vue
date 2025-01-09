<!-- src/App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";

// components
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import NewInput from "./components/NewInput.vue";
import NewCrypto from "./components/NewCrypto.vue";

// TODO - variables
const loading = ref<boolean>(false);
</script>

<template>
  <Navbar />

  <div class="flex grow flex-col items-center justify-center font-mono">
    <NewInput :loading="loading" @update:loading="loading = $event" />

    <NewCrypto :loading="loading" @update:loading="loading = $event" />
  </div>

  <Footer />
</template>

<style scoped></style>
