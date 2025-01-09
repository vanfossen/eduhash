<!-- src/components/NewCrypto.vue -->
<script setup lang="ts">
// props
const props = defineProps<{
  loading: boolean;
  hashValue: number;
}>();
</script>

<template>
  <div
    class="w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 px-4 py-2"
  >
    <span v-if="props.loading" class="loading loading-bars loading-lg"></span>

    <span v-else>{{ props.hashValue }}</span>
  </div>
</template>

<style scoped></style>
