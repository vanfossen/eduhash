<!-- App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref, defineEmits } from "vue";
import { Output } from "../interfaces.ts";
import { md5Hash, bcryptHash, scryptHash, argon2idHash } from "../utils.ts";

const emit = defineEmits<{
  (e: "update:loading", value: boolean): void;
}>();

// TODO - props
const props = defineProps<{
  output: Output;
  loading: boolean;
}>();

// TODO - local state
const password = ref<string>("");
const error = ref<string>("");
const output = ref(props.output);

// function to check password is input by user
const validateInput = (): string => {
  if (!password.value) return "Password is required.";
  return "";
};

// function to process user input
const handleHash = async () => {
  const errorMessage = validateInput();
  if (errorMessage) {
    error.value = errorMessage;
    return;
  }

  if (password.value) {
    emit("update:loading", true);
    error.value = "";

    // hash generation
    output.value.md5.hash = await md5Hash(password.value);

    [
      output.value.bcrypt.hash,
      output.value.bcrypt.hashId,
      output.value.bcrypt.inputCost,
      output.value.bcrypt.hashSalt,
      output.value.bcrypt.hashValue,
    ] = await bcryptHash(password.value);

    output.value.scrypt.hash = await scryptHash(password.value);
    output.value.argon2id.hash = await argon2idHash(password.value);

    password.value = "";
    emit("update:loading", false);
  }
};
</script>

<template>
  <div
    class="my-16 flex flex-col items-center rounded-2xl border border-black px-8 py-4 shadow-2xl"
  >
    <h1 class="mx-2 my-4 text-2xl">Please enter password below!</h1>

    <!-- password -->
    <input
      v-model="password"
      id="password"
      type="text"
      placeholder="Password"
      class="input input-bordered m-2 w-full max-w-xs"
    />

    <!-- display error message -->
    <div class="badge badge-error my-2" v-if="error">{{ error }}</div>

    <!-- generate -->
    <button class="btn btn-wide my-2" @click="handleHash">Generate</button>
  </div>
</template>

<style scoped></style>
