<!-- src/pages/Generator.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref, computed } from "vue";
import { algorithms } from "../data/algorithms.ts";
import { DigestOutput, HashData } from "../data/interfaces.ts";

// icons
import { SquareCheck } from "lucide-vue-next";
import { SquareX } from "lucide-vue-next";

// variables
const password = ref<string>("");
const algorithm = ref<string>("");
const error = ref<string>("");
const loading = ref<boolean>(false);
const hashData = ref<HashData>({
  label: "",
  salt: false,
  iteration: false,
  security: "",
});
const digest = ref<DigestOutput>({ hash: "", salt: "" });

// function to check validity of user input
const validateInput = (): undefined => {
  if (!password.value) {
    error.value = "Password is required.";
    return;
  }

  if (!algorithm.value) {
    error.value = "Algorithm is required.";
    return;
  }

  error.value = "";
};

// function to check password is input by user
const clearInput = (): undefined => {
  password.value = "";
  algorithm.value = "";
  error.value = "";
};

// TODO
const handleGenerate = async () => {
  validateInput();
  loading.value = true;

  const selectedAlgorithm = algorithms[algorithm.value];

  hashData.value = selectedAlgorithm.data;
  digest.value = await selectedAlgorithm.function(password.value);

  loading.value = false;
};

// computed property for disabling generate button
const isGenerateDisabled = computed(() => {
  return !password.value || !algorithm.value;
});

// computed property for disabling clear button
const isClearDisabled = computed(() => {
  return !password.value && !algorithm.value;
});
</script>

<template>
  <div class="flex grow flex-col items-center justify-center">
    <div
      class="m-4 flex flex-col items-center rounded-2xl border border-black px-8 py-4 shadow-2xl"
    >
      <h1 class="mx-2 my-4 text-3xl">Cryptographic Hash Generator</h1>

      <!-- password -->
      <input
        v-model="password"
        id="password"
        type="text"
        placeholder="Enter password..."
        autofocus
        class="input input-bordered my-2 w-full max-w-xs"
        aria-label="Password"
      />

      <!-- algorithm -->
      <select
        class="select select-bordered my-2 w-full max-w-xs"
        v-model="algorithm"
        aria-label="Algorithm"
      >
        <option disabled selected value="">Select algorithm...</option>
        <option v-for="(algorithm, key) in algorithms" :key="key" :value="key">
          {{ algorithm.data.label }}
        </option>
      </select>

      <!-- display error message -->
      <div class="badge badge-error" v-if="error" aria-live="assertive">
        {{ error }}
      </div>

      <!-- generate -->
      <button
        class="btn btn-wide my-2 mt-8"
        @click="handleGenerate"
        :disabled="isGenerateDisabled"
      >
        Generate
      </button>

      <!-- clear -->
      <button
        class="btn btn-wide my-2"
        @click="clearInput"
        :disabled="isClearDisabled"
      >
        Clear
      </button>
    </div>

    <div
      class="m-4 w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 p-4 text-center"
    >
      <span v-if="loading" class="loading loading-bars loading-lg"></span>

      <div v-else>
        <div v-if="digest.hash">
          <h1 class="text-xl">{{ hashData.label }}</h1>

          <div class="divider"></div>

          <div
            class="grid grid-cols-3 grid-rows-2 items-center justify-items-center"
          >
            <div class="m-2 underline">Salt</div>
            <div class="m-2 underline">Iteration</div>
            <div class="m-2 underline">Security</div>

            <div>
              <span v-if="hashData.salt">{{ digest.salt }}</span>
              <SquareX v-else class="stroke-error" />
            </div>

            <div>
              <SquareCheck v-if="hashData.iteration" class="stroke-success" />
              <SquareX v-else class="stroke-error" />
            </div>

            <div>{{ hashData.security }}</div>
          </div>

          <div class="divider"></div>

          <span>{{ digest.hash }}</span>
        </div>

        <div v-else><span>Use generator to view hash value</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
