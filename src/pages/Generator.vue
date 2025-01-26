<!-- src/pages/Generator.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";

// components
import Input from "../components/Input.vue";
import Crypto from "../components/Crypto.vue";

// interfaces
import { HashData } from "../data/interfaces.ts";

// variables
const loading = ref<boolean>(false);
const hashData = ref<HashData>({
  label: "",
  salt: false,
  iteration: false,
  security: "",
});
const digest = ref<string>("");
</script>

<template>
  <div class="flex grow flex-col items-center justify-center">
    <Input
      @update:loading="loading = $event"
      @update:hashData="hashData = $event"
      @update:digest="digest = $event"
    />

    <Crypto :loading="loading" :hashData="hashData" :digest="digest" />
  </div>
</template>

<style scoped></style>
