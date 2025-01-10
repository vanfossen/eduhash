<!-- src/components/Crypto.vue -->
<script setup lang="ts">
// props
const props = defineProps<{
  loading: boolean;
  hashValue: string;
  hashLabel: string;
}>();
</script>

<template>
  <div
    class="w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 px-4 py-2 text-center"
  >
    <span v-if="props.loading" class="loading loading-bars loading-lg"></span>

    <div v-else>
      <div v-if="props.hashValue">
        <h1 class="text-xl">{{ props.hashLabel }}</h1>
        <span>{{ props.hashValue }}</span>
      </div>

      <div v-else><span>Use generator to view hash value</span></div>
    </div>
  </div>
</template>

<style scoped></style>
