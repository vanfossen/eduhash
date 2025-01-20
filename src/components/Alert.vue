<!-- src/components/Alert.vue -->
<script setup lang="ts">
// vue and other libraries
import { X } from "lucide-vue-next";

// emits
const emit = defineEmits<{
  (e: "update:showAlert", value: boolean): void;
}>();

// props
const props = defineProps<{
  text: string;
}>();

// TODO
const handleClose = () => {
  emit("update:showAlert", false);
};
</script>

<template>
  <div role="alert" class="alert alert-warning">
    <slot />
    <span>{{ props.text }}</span>
    <button @click="handleClose" class="btn btn-circle btn-ghost">
      <X color="black" />
    </button>
  </div>
</template>

<style scoped></style>
