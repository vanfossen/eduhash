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

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title font-bold">
          <span class="inline-flex">
            <!-- heroicons | shield-exclamation -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-4 size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
              />
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
            <!-- heroicons | circle-stack -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-4 size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
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
              Remember if you have dismissed the security warning. This helps
              avoid showing the warning again during your next visit.
            </li>
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
