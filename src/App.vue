<!-- src/App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import { hashAlgorithms } from "./data/hashAlgorithms.ts";

// components
import Crypto from "./components/Crypto.vue";
import Footer from "./components/Footer.vue";
import Input from "./components/Input.vue";
import Navbar from "./components/Navbar.vue";

// TODO - variables
const loading = ref<boolean>(false);
</script>

<template>
  <Navbar />

  <div class="flex grow flex-col items-center justify-center font-mono">
    <Input
      :loading="loading"
      @update:loading="loading = $event"
      :hashAlgorithms="hashAlgorithms"
    />

    <Crypto
      :loading="loading"
      @update:loading="loading = $event"
      :hashAlgorithms="hashAlgorithms"
    />
  </div>

  <Footer />
</template>

<style scoped></style>
