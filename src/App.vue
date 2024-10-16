<!-- App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import { md5Hash, bcryptHash, scryptHash, argon2idHash } from "./utils.ts";

// components
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Warning from "./components/Warning.vue";

// interfaces
interface AlgorithmOutput {
  name: string;
  hash: string;
}

interface Output {
  md5: AlgorithmOutput;
  bcrypt: AlgorithmOutput;
  scrypt: AlgorithmOutput;
  argon2id: AlgorithmOutput;
}

// variables
const password = ref<string>("");
const output = ref<Output>({
  md5: { name: "MD5", hash: "" },
  bcrypt: { name: "bcrypt", hash: "" },
  scrypt: { name: "scrypt", hash: "" },
  argon2id: { name: "Argon2id", hash: "" },
});
const error = ref<string>("");
const loading = ref<boolean>(false);

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
    loading.value = true;
    error.value = "";

    // hash generation
    output.value.md5.hash = await md5Hash(password.value);
    output.value.bcrypt.hash = await bcryptHash(password.value);
    output.value.scrypt.hash = await scryptHash(password.value);
    output.value.argon2id.hash = await argon2idHash(password.value);

    password.value = "";
    loading.value = false;
  }
};
</script>

<template>
  <Navbar />

  <Warning />

  <div class="flex grow flex-col items-center justify-center font-mono">
    <!-- Input.vue -->
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
    </div>

    <!-- Crypto.vue -->
    <div
      class="w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 px-4 py-2"
    >
      <span v-if="loading" class="loading loading-bars loading-lg"></span>

      <div v-else role="tablist" class="tabs tabs-bordered">
        <input
          type="radio"
          name="tabs_1"
          role="tab"
          class="tab"
          aria-label="MD5"
          checked
        />
        <div role="tabpanel" class="tab-content p-10">
          <span v-if="output.md5.hash">{{ output.md5.hash }}</span>

          <span v-else> Complete prompt to view table </span>
        </div>

        <input
          type="radio"
          name="tabs_1"
          role="tab"
          class="tab"
          aria-label="bcrypt"
        />
        <div role="tabpanel" class="tab-content p-10">
          <span v-if="output.bcrypt.hash">{{ output.bcrypt.hash }}</span>

          <span v-else> Complete prompt to view table </span>
        </div>

        <input
          type="radio"
          name="tabs_1"
          role="tab"
          class="tab"
          aria-label="scrypt"
        />
        <div role="tabpanel" class="tab-content p-10">
          <span v-if="output.scrypt.hash">{{ output.scrypt.hash }}</span>

          <span v-else> Complete prompt to view table </span>
        </div>

        <input
          type="radio"
          name="tabs_1"
          role="tab"
          class="tab"
          aria-label="Argon2id"
        />
        <div role="tabpanel" class="tab-content p-10">
          <span v-if="output.argon2id.hash">{{ output.argon2id.hash }}</span>

          <span v-else> Complete prompt to view table </span>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped></style>
