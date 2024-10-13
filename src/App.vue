<!-- App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import { md5Hash, bcryptHash, argon2idHash } from "./utils.ts";

// components
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Warning from "./components/Warning.vue";

// constants
const ALGORITHM_LIST = ["MD5", "bcrypt", "Argon2id"];

// interfaces
interface Input {
  username: string;
  password: string;
  algorithm: string[];
}

interface Output {
  username: string;
  algorithm: string;
  salt16: string;
  salt64: string;
  hash: string;
}

// variables
const input = ref<Input>({ username: "", password: "", algorithm: [] });
const output = ref<Output[]>([]);
const error = ref<string>("");
const loading = ref<boolean>(false);

// TODO - comment
const validateInput = (): string => {
  // TODO - add regex for valid username characters
  if (!input.value.username) return "Username is required.";
  // TODO - add regex for valid password characters
  if (!input.value.password) return "Password is required.";
  // TODO - possible more error checking
  if (input.value.algorithm.length < 1)
    return "At least one algorithm is required.";
  return "";
};

// function that handles login actions
const handleLogin = async () => {
  const errorMessage = validateInput();
  if (errorMessage) {
    error.value = errorMessage;
    return;
  }

  // TODO - comment
  if (
    input.value.username &&
    input.value.password &&
    input.value.algorithm.length > 0
  ) {
    // clear previous login
    loading.value = true;
    output.value = [];
    error.value = "";

    // MD5
    if (input.value.algorithm.includes("MD5")) {
      const md5Result = await md5Hash(input.value.password);

      output.value.push({
        username: input.value.username,
        algorithm: "MD5",
        hash: md5Result[0],
        salt16: "(not present)",
        salt64: "(not present)",
      });
    }

    // bcrypt
    if (input.value.algorithm.includes("bcrypt")) {
      const bcryptResult = await bcryptHash(input.value.password);
      output.value.push({
        username: input.value.username,
        algorithm: "bcrypt",
        hash: bcryptResult[0],
        salt16: bcryptResult[1],
        salt64: bcryptResult[2],
      });
    }

    // Argon2id
    if (input.value.algorithm.includes("Argon2id")) {
      const argonResult = await argon2idHash(input.value.password);
      output.value.push({
        username: input.value.username,
        algorithm: "Argon2id",
        hash: argonResult[0],
        salt16: argonResult[1],
        salt64: argonResult[2],
      });
    }

    // clear login
    input.value = { username: "", password: "", algorithm: [] };

    // disable loading
    loading.value = false;
  }
};
</script>

<template>
  <Navbar />

  <Warning />

  <div class="flex grow flex-col items-center justify-center font-mono">
    <!-- Login.vue -->
    <div
      class="my-16 flex flex-col items-center rounded-2xl border border-black px-8 py-4 shadow-2xl"
    >
      <h1 class="mx-2 my-4 text-2xl">Welcome!</h1>

      <!-- username -->
      <input
        v-model="input.username"
        id="username"
        type="text"
        placeholder="Username"
        class="input input-bordered m-2 w-full max-w-xs"
      />

      <!-- password -->
      <input
        v-model="input.password"
        id="password"
        type="password"
        placeholder="Password"
        class="input input-bordered m-2 w-full max-w-xs"
      />

      <!-- algorithm -->
      <div class="join my-2">
        <label v-for="alg in ALGORITHM_LIST" :key="alg">
          <input
            v-model="input.algorithm"
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
      class="w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 px-4 py-2"
    >
      <span v-if="loading" class="loading loading-bars loading-lg"></span>

      <table v-else-if="output.length > 0" class="table">
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
          <tr v-for="item in output" :key="item.algorithm">
            <th>{{ item.username }}</th>
            <td>{{ item.algorithm }}</td>
            <td>{{ item.salt16 }}</td>
            <td>{{ item.salt64 }}</td>
            <td>{{ item.hash }}</td>
          </tr>
        </tbody>
      </table>

      <span v-else> Complete login prompt to view table </span>
    </div>
  </div>

  <Footer />
</template>

<style scoped></style>
