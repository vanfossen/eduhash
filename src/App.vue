<!-- src/App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";

// components
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Input from "./components/Input.vue";
import Crypto from "./components/Crypto.vue";

// interfaces
import { HashData } from "./data/interfaces.ts";

// TODO - variables
const loading = ref<boolean>(false);
const hashData = ref<HashData>({ label: "", salt: false, iteration: false });
const digest = ref<string>("");
</script>

<template>
  <Navbar />

  <div class="flex grow flex-col items-center justify-center font-mono">
    <Input
      @update:loading="loading = $event"
      @update:hashData="hashData = $event"
      @update:digest="digest = $event"
    />

    <Crypto :loading="loading" :hashData="hashData" :digest="digest" />
  </div>

  <Footer />
</template>

<style scoped></style>
