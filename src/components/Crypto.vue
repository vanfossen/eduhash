<!-- src/components/Crypto.vue -->
<script setup lang="ts">
// vue and other libraries
import { Output } from "../interfaces.ts";
import { hashAlgorithms } from "../data/hashAlgorithms.ts";

// props
const props = defineProps<{
  output: Output;
  loading: boolean;
}>();
</script>

<template>
  <div
    class="w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 px-4 py-2"
  >
    <span v-if="props.loading" class="loading loading-bars loading-lg"></span>

    <div v-else role="tablist" class="tabs tabs-bordered">
      <template v-for="(hashType, index) in hashAlgorithms" :key="hashType.key">
        <input
          type="radio"
          name="tabs_1"
          role="tab"
          class="tab"
          :aria-label="hashType.label"
          :checked="index === 0"
        />
        <div role="tabpanel" class="tab-content p-10">
          <div v-if="hashType.hash">
            <p>
              <a
                :href="hashType.link"
                target="_blank"
                class="link-hover link link-info"
              >
                {{ hashType.label }}
              </a>
            </p>

            <div class="divider"></div>

            <ul class="list-disc pl-5">
              <li>Hash:</li>
              <ul class="list-disc pl-5">
                <li>{{ hashType.hash }}</li>
              </ul>
            </ul>
          </div>

          <span v-else> Complete prompt to view table </span>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
