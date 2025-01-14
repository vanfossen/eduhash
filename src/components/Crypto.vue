<!-- src/components/Crypto.vue -->
<script setup lang="ts">
// vue and other libraries
import { SquareCheck } from "lucide-vue-next";
import { SquareX } from "lucide-vue-next";

// interfaces
import { HashData } from "../data/interfaces";

// props
const props = defineProps<{
  loading: boolean;
  hashData: HashData;
  digest: string;
}>();
</script>

<template>
  <div
    class="w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 px-4 py-4 text-center"
  >
    <span v-if="props.loading" class="loading loading-bars loading-lg"></span>

    <div v-else>
      <div v-if="props.digest">
        <h1 class="text-xl">{{ props.hashData.label }}</h1>

        <div class="divider"></div>

        <div
          class="grid grid-cols-2 grid-rows-2 items-center justify-items-center"
        >
          <div>Salt</div>
          <div>Iteration</div>

          <div>
            <div v-if="props.hashData.salt"><SquareCheck /></div>
            <div v-else><SquareX /></div>
          </div>

          <div>
            <div v-if="props.hashData.iteration"><SquareCheck /></div>
            <div v-else><SquareX /></div>
          </div>
        </div>

        <div class="divider"></div>

        <span>{{ props.digest }}</span>
      </div>

      <div v-else><span>Use generator to view hash value</span></div>
    </div>
  </div>
</template>

<style scoped></style>
