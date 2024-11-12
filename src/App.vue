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

// variables
const output = ref<Output>({
  md5: { name: "MD5", link: "https://en.wikipedia.org/wiki/MD5", hash: "" },
  bcrypt: {
    name: "bcrypt",
    link: "https://en.wikipedia.org/wiki/Bcrypt",
    hash: "",
  },
  scrypt: {
    name: "scrypt",
    link: "https://en.wikipedia.org/wiki/Scrypt",
    hash: "",
  },
  argon2id: {
    name: "Argon2id",
    link: "https://en.wikipedia.org/wiki/Argon2",
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
