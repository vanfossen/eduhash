<!-- src/components/ModalInfo.vue -->
<script setup lang="ts">
// components
import ThemeController from "./ThemeController.vue";
</script>

<template>
  <button class="btn btn-square btn-ghost" onclick="infoModal.showModal()">
    <!-- lucide | info (https://lucide.dev/icons/info) -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-info"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
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

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title font-bold">
          <span class="inline-flex">
            <!-- lucide | shield-alert (https://lucide.dev/icons/shield-alert) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shield-alert mr-4 size-6"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
            Important Security Note:</span
          >
        </div>
        <div class="collapse-content">
          <p>
            This application is for educational purposes only. Please do not
            enter any real passwords or personal, sensitive, or confidential
            information. Use this tool to experiment with example passwords and
            learn about password hashing safely!
          </p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title font-bold">
          <span class="inline-flex">
            <!-- lucide | database (https://lucide.dev/icons/database) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-database mr-4 size-6"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5V19A9 3 0 0 0 21 19V5" />
              <path d="M3 12A9 3 0 0 0 21 12" />
            </svg>
            Local Storage:</span
          >
        </div>
        <div class="collapse-content">
          <p>
            This application uses
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
              Remember your theme preference. This ensures your chosen theme is
              applied during your next visit.
            </li>
          </ul>

          <p>
            Your data is stored locally on your device and is not shared with
            any third parties.
          </p>
        </div>
      </div>

      <div class="divider"></div>

      <ThemeController />
    </div>
  </dialog>
</template>

<style scoped></style>
