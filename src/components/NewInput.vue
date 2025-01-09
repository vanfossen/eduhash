<!-- src/components/NewInput.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref, computed } from "vue";
import { hashAlgorithms } from "../data/hashAlgorithms.ts";

// emits
const emit = defineEmits<{
  (e: "update:loading", value: boolean): void;
}>();

// variables
const password = ref<string>("");
const hash = ref<string>("");
const error = ref<string>("");

// function to check validity of user input
const validateInput = (): undefined => {
  if (!password.value) {
    error.value = "Password is required.";
    return;
  }

  if (!hash.value) {
    error.value = "Hash algorithm is required.";
    return;
  }

  error.value = "";
};

// function to check password is input by user
const clearInput = (): undefined => {
  password.value = "";
  hash.value = "";
  error.value = "";
};

const handleGenerate = () => {
  validateInput();

  emit("update:loading", true);

  (async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    emit("update:loading", false);
  })();
};

// computed property for disabling generate button
const isGenerateDisabled = computed(() => {
  return !password.value || !hash.value;
});

// computed property for disabling clear button
const isClearDisabled = computed(() => {
  return !password.value && !hash.value;
});
</script>

<template>
  <div
    class="my-16 flex flex-col items-center rounded-2xl border border-black px-8 py-4 shadow-2xl"
  >
    <h1 class="mx-2 my-4 text-2xl">Hello, World!</h1>

    <!-- password -->
    <input
      v-model="password"
      id="password"
      type="text"
      placeholder="Password"
      class="input input-bordered w-full max-w-xs"
      aria-label="Password"
    />

    <!-- hash -->
    <select
      class="select select-bordered w-full max-w-xs"
      v-model="hash"
      aria-label="Hash algorithm"
    >
      <option disabled selected value="">Select hash algorithm...</option>
      <option
        v-for="algorithm in hashAlgorithms"
        :key="algorithm.key"
        :value="algorithm.key"
      >
        {{ algorithm.label }}
      </option>
    </select>

    <!-- display error message -->
    <div class="badge badge-error" v-if="error" aria-live="assertive">
      {{ error }}
    </div>

    <!-- generate -->
    <button
      class="btn btn-wide"
      @click="handleGenerate"
      :disabled="isGenerateDisabled"
    >
      Generate
    </button>

    <!-- clear -->
    <button
      class="btn btn-wide"
      @click="clearInput"
      :disabled="isClearDisabled"
    >
      Clear
    </button>
  </div>
</template>

<style scoped></style>
