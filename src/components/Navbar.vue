<!-- Navbar.vue -->
<script setup lang="ts"></script>

<template>
  <div class="navbar bg-base-200 font-mono">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">EduHash</a>
    </div>
    <div class="flex-none">
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
            <button
              class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 class="text-lg font-bold">Welcome to EduHash!</h3>
          <p class="py-4">
            This web application is designed to help you learn about password
            security and hashing algorithms in a safe and interactive
            environment.
          </p>
          <p class="py-4">
            <b>Important Security Note:</b> This application is for educational
            purposes only. Please do not enter any real passwords or personal,
            sensitive, or confidential information. Use this tool to experiment
            with example passwords and learn about password hashing safely!
          </p>
          <p class="py-4">
            <b>Cookies/Local Storage:</b> This application uses
            <strong class="text-info">localStorage</strong> to remember if you
            have dismissed the security warning. This helps avoid showing the
            warning again during your next visit. Your data is stored locally on
            your device and is not shared with any third parties.
          </p>
        </div>
      </dialog>
    </div>
  </div>
</template>

<style scoped></style>
