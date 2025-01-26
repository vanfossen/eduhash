<!-- src/components/Crypto.vue -->
<script setup lang="ts">
// vue and other libraries
import { SquareCheck } from "lucide-vue-next";
import { SquareX } from "lucide-vue-next";

// interfaces
import { HashData } from "../data/interfaces.ts";

// props
const props = defineProps<{
  loading: boolean;
  hashData: HashData;
  digest: string;
}>();
</script>

<template>
  <div
    class="m-4 w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 p-4 text-center"
  >
    <span v-if="props.loading" class="loading loading-bars loading-lg"></span>

    <div v-else>
      <div v-if="props.digest">
        <h1 class="text-xl">{{ props.hashData.label }}</h1>

        <div class="divider"></div>

        <div
          class="grid grid-cols-3 grid-rows-2 items-center justify-items-center"
        >
          <div class="m-2 underline">Salt</div>
          <div class="m-2 underline">Iteration</div>
          <div class="m-2 underline">Security</div>

          <div>
            <SquareCheck v-if="props.hashData.salt" class="stroke-success" />
            <SquareX v-else class="stroke-error" />
          </div>

          <div>
            <SquareCheck
              v-if="props.hashData.iteration"
              class="stroke-success"
            />
            <SquareX v-else class="stroke-error" />
          </div>

          <div>{{ props.hashData.security }}</div>
        </div>

        <div class="divider"></div>

        <span>{{ props.digest }}</span>
      </div>

      <div v-else><span>Use generator to view hash value</span></div>
    </div>
  </div>
</template>

<style scoped></style>
