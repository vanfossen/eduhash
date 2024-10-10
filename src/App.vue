<!-- App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import { md5Hash } from "./utils.ts";

// constants
const ALGORITHM_LIST = ["MD5", "scrypt", "Argon2id"];

// variables
const username = ref("");
const password = ref("");
const algorithm = ref("");
const entry = ref({
  username: "(no entry)",
  algorithm: "(no entry)",
  salt: "(no entry)",
  hash: "(no entry)",
});
const error = ref("");

// function that handles login actions
const handleLogin = async () => {
  // TODO - add regex for valid username characters
  if (!username.value) {
    error.value = "Username is required.";
    return;
  }

  // TODO - add regex for valid password characters
  if (!password.value) {
    error.value = "Password is required.";
    return;
  }

  // TODO - add regex for valid password characters
  if (!algorithm.value) {
    error.value = "Algorithm is required.";
    return;
  }

  if (username.value && password.value && algorithm.value) {
    switch (algorithm.value) {
      case "MD5":
        entry.value.salt = "(not present)";
        entry.value.hash = await md5Hash(password.value);
        break;
      case "scrypt":
        entry.value.salt = "(not implemented)";
        entry.value.hash = "(not implemented)";
        break;
      case "Argon2id":
        entry.value.salt = "(not implemented)";
        entry.value.hash = "(not implemented)";
        break;
      default:
      // code block
    }

    entry.value.username = username.value;
    entry.value.algorithm = algorithm.value;

    username.value = "";
    password.value = "";
    algorithm.value = "";
    error.value = "";
  }
};
</script>

<template>
  <div class="flex grow flex-col items-center justify-center">
    <!-- Login.vue -->
    <div
      class="my-16 flex flex-col items-center rounded-2xl border border-black px-8 py-4 font-mono shadow-2xl"
    >
      <h1 class="mx-2 my-4 text-2xl">Welcome!</h1>

      <!-- username -->
      <input
        v-model="username"
        id="username"
        type="text"
        placeholder="Username"
        class="input input-bordered m-2 w-full max-w-xs"
      />

      <!-- password -->
      <input
        v-model="password"
        id="password"
        type="password"
        placeholder="Password"
        class="input input-bordered m-2 w-full max-w-xs"
      />

      <!-- algorithm -->
      <div class="join my-2">
        <label v-for="alg in ALGORITHM_LIST" :key="alg">
          <input
            v-model="algorithm"
            class="btn join-item"
            type="radio"
            name="options"
            :value="alg"
            :aria-label="alg"
          />
        </label>
      </div>

      <!-- Display error message -->
      <p class="my-2 text-sm text-error" v-if="error">{{ error }}</p>

      <!-- login -->
      <button class="btn btn-wide my-2" @click="handleLogin">Login</button>
    </div>

    <!-- Crypto.vue -->
    <div class="overflow-x-auto rounded-2xl border border-black">
      <table class="table font-mono">
        <thead>
          <tr>
            <th>Username</th>
            <th>Algorithm</th>
            <th>Salt</th>
            <th>Hash</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{{ entry.username }}</th>
            <td>{{ entry.algorithm }}</td>
            <td>{{ entry.salt }}</td>
            <td>{{ entry.hash }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
