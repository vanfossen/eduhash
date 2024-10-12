<!-- Navbar.vue -->
<script setup lang="ts"></script>

<template>
  <div class="navbar bg-base-200">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">EduHash</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <!-- heroicons | information-circle -->
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
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
