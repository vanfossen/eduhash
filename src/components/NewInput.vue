<!-- src/components/NewInput.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref, computed } from "vue";
import { hashAlgorithms } from "../data/hashAlgorithms.ts";
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
  (e: "update:hashValue", value: string): void;
  (e: "update:hashLabel", value: string): void;
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

// mapping of algorithms to their respective hashing functions
const hashFunctions: Record<string, (input: string) => Promise<string>> = {
  md5: md5Hash,
  sha256: sha256Hash,
  bcrypt: bcryptHash,
  scrypt: scryptHash,
  argon2id: argon2idHash,
};

const handleGenerate = async () => {
  validateInput();
  emit("update:loading", true);

  const hashFunction = hashFunctions[algorithm.value];

  emit(
    "update:hashLabel",
    hashAlgorithms.find((a) => a.key === algorithm.value)?.label || "",
  );
  emit("update:hashValue", await hashFunction(password.value));

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
    class="my-16 flex flex-col items-center rounded-2xl border border-black px-8 py-4 shadow-2xl"
  >
    <h1 class="mx-2 my-4 text-3xl">Cryptographic Hash Generator</h1>

    <!-- password -->
    <input
      v-model="password"
      id="password"
      type="text"
      placeholder="Password"
      class="input input-bordered w-full max-w-xs"
      aria-label="Password"
    />

    <!-- algorithm -->
    <select
      class="select select-bordered w-full max-w-xs"
      v-model="algorithm"
      aria-label="Algorithm"
    >
      <option disabled selected value="">Select algorithm...</option>
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
