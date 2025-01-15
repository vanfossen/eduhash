<!-- src/components/Input.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref, computed } from "vue";
import { algorithms } from "../data/algorithms.ts";

// interfaces
import { HashData } from "../data/interfaces.ts";

// emits
const emit = defineEmits<{
  (e: "update:loading", value: boolean): void;
  (e: "update:hashData", value: HashData): void;
  (e: "update:digest", value: string): void;
}>();

// variables
const password = ref<string>("");
const algorithm = ref<string>("");
const error = ref<string>("");

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

const handleGenerate = async () => {
  validateInput();
  emit("update:loading", true);

  const selectedAlgorithm = algorithms[algorithm.value];

  emit("update:hashData", selectedAlgorithm.data);
  emit("update:digest", await selectedAlgorithm.function(password.value));

  emit("update:loading", false);
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
</template>

<style scoped></style>
