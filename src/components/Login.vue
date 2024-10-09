<!-- Login.vue -->
<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col items-center rounded-2xl border border-black px-8 py-4 font-mono shadow-2xl"
  >
    <h1 class="mx-2 my-4 text-2xl">Welcome!</h1>

    <!-- username -->
    <input
      id="username"
      type="text"
      placeholder="Username"
      class="input input-bordered m-2 w-full max-w-xs"
    />

    <!-- password -->
    <input
      id="password"
      type="password"
      placeholder="Password"
      class="input input-bordered m-2 w-full max-w-xs"
    />

    <!-- Display error message -->
    <p class="text-sm text-error">TODO</p>

    <!-- login -->
    <button class="btn btn-wide m-2">Login</button>
  </div>
</template>

<style scoped></style>
