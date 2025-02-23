<!-- src/pages/Generator.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref, computed } from "vue";
import { algorithms } from "../data/algorithms.ts";

// icons
// import { SquareCheck } from "lucide-vue-next";
// import { SquareX } from "lucide-vue-next";

// variables
const password = ref<string>("");
const loading = ref<boolean>(false);
const results = ref<any[]>([]);

// function to check password is input by user
const clearInput = (): undefined => {
  password.value = "";
};

// TODO
const handleGenerate = async () => {
  loading.value = true;

  results.value = [];

  // generate salt
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);

  // generate function here
  for (const algorithm of algorithms) {
    const hash = await algorithm.function(password.value, salt);

    results.value.push({
      name: algorithm.name,
      salt: algorithm.salt
        ? Array.from(salt)
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("")
        : null,
      hash: hash,
      iteration: algorithm.iteration,
      security: algorithm.security,
    });
  }

  loading.value = false;
};

// computed property for disabling generate button
const isGenerateDisabled = computed(() => {
  return !password.value;
});

// computed property for disabling clear button
const isClearDisabled = computed(() => {
  return !password.value;
});

const hasResults = computed(() => {
  return results.value.length > 0;
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

      <!-- generate -->
      <button
        class="btn btn-wide my-2"
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
      class="m-4 w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black p-4 text-center"
    >
      <span v-if="loading" class="loading loading-bars loading-lg"></span>

      <div v-else>
        <div v-if="hasResults" class="overflow-x-auto">
          <table class="table table-zebra">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>Salt</th>
                <th>Hash</th>
                <th>Iteration</th>
                <th>Security</th>
              </tr>
            </thead>

            <!-- body -->
            <tbody>
              <tr v-for="result in results">
                <th>{{ result.name }}</th>
                <td>{{ result.salt || false }}</td>
                <td>{{ result.hash }}</td>
                <td>{{ result.iteration }}</td>
                <td>{{ result.security }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-else><span>Use generator to view hash values</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
