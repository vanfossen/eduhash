<!-- src/components/Input.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import { HashAlgorithm } from "../data/interfaces.ts";
import {
  md5Hash,
  sha256Hash,
  bcryptHash,
  scryptHash,
  argon2idHash,
} from "../utils/hashFunctions.ts";

// emits
const emit = defineEmits<{
  (e: "update:loading", value: boolean): void;
}>();

// props
const props = defineProps<{
  loading: boolean;
  hashAlgorithms: Array<HashAlgorithm>;
}>();

// variables
const password = ref<string>("");
const error = ref<string>("");

// function to check password is input by user
const validateInput = (): string => {
  if (!password.value) return "Password is required.";
  return "";
};

// function to process user input
const handleHash = async () => {
  const errorMessage = validateInput();
  if (errorMessage) {
    error.value = errorMessage;
    return;
  }

  if (password.value) {
    emit("update:loading", true);
    error.value = "";

    // hash generation
    const md5 = await md5Hash(password.value);
    const sha256 = await sha256Hash(password.value);
    const bcrypt = await bcryptHash(password.value);
    const scrypt = await scryptHash(password.value);
    const argon2id = await argon2idHash(password.value);

    // Update the hashAlgorithms array with the new hashes
    props.hashAlgorithms.forEach((algorithm) => {
      switch (algorithm.key) {
        case "md5":
          algorithm.hash = md5;
          break;
        case "sha256":
          algorithm.hash = sha256;
          break;
        case "bcrypt":
          algorithm.hash = bcrypt;
          break;
        case "scrypt":
          algorithm.hash = scrypt;
          break;
        case "argon2id":
          algorithm.hash = argon2id;
          break;
      }
    });

    password.value = "";
    emit("update:loading", false);
  }
};
</script>

<template>
  <div
    class="my-16 flex flex-col items-center rounded-2xl border border-black px-8 py-4 shadow-2xl"
  >
    <h1 class="mx-2 my-4 text-2xl">Please enter password below!</h1>

    <!-- password -->
    <input
      v-model="password"
      id="password"
      type="text"
      placeholder="Password"
      class="input input-bordered m-2 w-full max-w-xs"
    />

    <!-- display error message -->
    <div class="badge badge-error my-2" v-if="error">{{ error }}</div>

    <!-- generate -->
    <button class="btn btn-wide my-2" @click="handleHash">Generate</button>

    <!-- reset -->
    <button class="btn btn-wide my-2">Clear</button>
  </div>
</template>

<style scoped></style>
