<!-- ModalInfo.vue -->
<script setup lang="ts">
// components
import ThemeController from "./ThemeController.vue";
</script>

<template>
  <button class="btn btn-square btn-ghost" onclick="infoModal.showModal()">
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
  <dialog id="infoModal" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-circle btn-ghost btn-sm absolute right-4 top-4">
          ✕
        </button>
      </form>
      <h1 class="pb-4 text-lg font-bold">Welcome to EduHash!</h1>
      <div>
        <p>
          This web application is designed to help you learn about password
          security and hashing algorithms in a safe and interactive environment.
        </p>
      </div>
      <div class="divider"></div>
      <div>
        <p>
          <span class="font-bold">Important Security Note:</span> This
          application is for educational purposes only. Please do not enter any
          real passwords or personal, sensitive, or confidential information.
          Use this tool to experiment with example passwords and learn about
          password hashing safely!
        </p>
      </div>
      <div class="divider"></div>
      <div>
        <p>
          <span class="font-bold">Local Storage:</span> This application uses
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
            target="_blank"
            class="link-hover link link-info"
            >localStorage</a
          >
          to:
        </p>

        <ul class="list-disc pl-8">
          <li>
            Remember if you have dismissed the security warning. This helps
            avoid showing the warning again during your next visit.
          </li>
          <li>
            Remember your theme preference. This ensures your chosen theme is
            applied during your next visit.
          </li>
        </ul>

        <p>
          Your data is stored locally on your device and is not shared with any
          third parties.
        </p>
      </div>
      <div class="divider"></div>
      <ThemeController />
    </div>
  </dialog>
</template>

<style scoped></style>
