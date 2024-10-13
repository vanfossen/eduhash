<!-- Warning.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";

// variables
const warning = ref<boolean>(true);

const hideWarning = () => {
  warning.value = false;
};
</script>

<template>
  <div v-if="warning" role="alert" class="alert alert-warning">
    <!-- heroicons | shield-exclamation -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
      />
    </svg>

    <p>
      This application is for educational purposes only. Please do not enter any
      real passwords or personal, sensitive, or confidential information. Use
      this tool to experiment with example passwords and learn about password
      hashing safely!
    </p>

    <button class="btn btn-circle btn-warning" @click="hideWarning">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
