<!-- src/App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import { Output } from "./interfaces.ts";

// components
import Crypto from "./components/Crypto.vue";
import Footer from "./components/Footer.vue";
import Input from "./components/Input.vue";
import Navbar from "./components/Navbar.vue";

// TODO - variables
const output = ref<Output>({
  md5: { name: "MD5", link: "", hash: "" },
  sha256: {
    name: "SHA-256",
    link: "",
    hash: "",
  },
  bcrypt: {
    name: "bcrypt",
    link: "",
    hash: "",
  },
  scrypt: {
    name: "scrypt",
    link: "",
    hash: "",
  },
  argon2id: {
    name: "Argon2id",
    link: "",
    hash: "",
  },
});
const loading = ref<boolean>(false);
</script>

<template>
  <Navbar />

  <div class="flex grow flex-col items-center justify-center font-mono">
    <Input
      :output="output"
      @update:output="output = $event"
      :loading="loading"
      @update:loading="loading = $event"
    />

    <Crypto
      :output="output"
      @update:output="output = $event"
      :loading="loading"
      @update:loading="loading = $event"
    />
  </div>

  <Footer />
</template>

<style scoped></style>
