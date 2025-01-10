<!-- src/App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";

// components
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Input from "./components/Input.vue";
import Crypto from "./components/Crypto.vue";

// TODO - variables
const loading = ref<boolean>(false);
const hashValue = ref<string>("");
const hashLabel = ref<string>("");
</script>

<template>
  <Navbar />

  <div class="flex grow flex-col items-center justify-center font-mono">
    <Input
      @update:loading="loading = $event"
      @update:hashValue="hashValue = $event"
      @update:hashLabel="hashLabel = $event"
    />

    <Crypto :loading="loading" :hashValue="hashValue" :hashLabel="hashLabel" />
  </div>

  <Footer />
</template>

<style scoped></style>
