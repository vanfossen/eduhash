<!-- App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import { md5Hash, bcryptHash, argon2idHash } from "./utils.ts";

// constants
const ALGORITHM_LIST = ["MD5", "bcrypt", "Argon2id"];

// variables
const username = ref("");
const password = ref("");
const algorithm = ref([]);
const entry = ref([]);
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

  // TODO - possible more error checking
  if (algorithm.value.length < 1) {
    error.value = "At least one algorithm is required.";
    return;
  }

  if (username.value && password.value && algorithm.value.length > 0) {
    // clear old table and/or error
    entry.value = [];
    error.value = "";

    // MD5
    if (algorithm.value.includes("MD5")) {
      entry.value.push({
        username: username.value,
        algorithm: "MD5",
        salt16: "(not present)",
        salt64: "(not present)",
        hash: await md5Hash(password.value),
      });
    }

    // bcrypt
    if (algorithm.value.includes("bcrypt")) {
      const bcryptResult = await bcryptHash(password.value);
      entry.value.push({
        username: username.value,
        algorithm: "bcrypt",
        salt16: bcryptResult[0],
        salt64: bcryptResult[1],
        hash: bcryptResult[2],
      });
    }

    // Argon2id
    if (algorithm.value.includes("Argon2id")) {
      const argonResult = await argon2idHash(password.value);
      entry.value.push({
        username: username.value,
        algorithm: "Argon2id",
        salt16: argonResult[0],
        salt64: argonResult[1],
        hash: argonResult[2],
      });
    }

    // clear login field
    username.value = "";
    password.value = "";
    algorithm.value = [];
  }
};
</script>

<template>
  <div class="flex grow flex-col items-center justify-center font-mono">
    <!-- Login.vue -->
    <div
      class="my-16 flex flex-col items-center rounded-2xl border border-black px-8 py-4 shadow-2xl"
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
            type="checkbox"
            name="options"
            :value="alg"
            :aria-label="alg"
          />
        </label>
      </div>

      <!-- Display error message -->
      <div class="badge badge-error my-2" v-if="error">{{ error }}</div>

      <!-- login -->
      <button class="btn btn-wide my-2" @click="handleLogin">Login</button>
    </div>

    <!-- Crypto.vue -->
    <div
      v-if="entry.length > 0"
      class="w-4/5 overflow-x-auto rounded-2xl border border-black bg-base-200 p-2"
    >
      <table class="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Algorithm</th>
            <th>Salt (Hex)</th>
            <th>Salt (Base64)</th>
            <th>Hash</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in entry" :key="item.username">
            <th>{{ item.username }}</th>
            <td>{{ item.algorithm }}</td>
            <td>{{ item.salt16 }}</td>
            <td>{{ item.salt64 }}</td>
            <td>{{ item.hash }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-else
      class="card grid place-items-center rounded-box bg-base-200 px-16 py-8"
    >
      Complete login prompt to view table
    </div>
  </div>
</template>

<style scoped></style>
