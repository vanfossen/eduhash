<!-- src/components/ModalInfo.vue -->
<script setup lang="ts">
// vue and other libraries
import { Info } from "lucide-vue-next";
import { ShieldAlert } from "lucide-vue-next";
import { Database } from "lucide-vue-next";

// components
import ThemeController from "./ThemeController.vue";
</script>

<template>
  <button class="btn btn-square btn-ghost" onclick="infoModal.showModal()">
    <Info />
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
          security and hashing algorithms in a simple and interactive
          environment.
        </p>
      </div>
      <div class="divider"></div>

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title font-bold">
          <span class="inline-flex">
            <ShieldAlert class="mr-4 size-6" />
            Important Security Note:
          </span>
        </div>
        <div class="collapse-content">
          <p>
            This application is for educational purposes only. Please do not
            enter any real passwords, personal, sensitive, or confidential
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
            <Database class="mr-4 size-6" />
            Local Storage:
          </span>
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
        </div>
      </div>

      <div class="divider"></div>

      <ThemeController />
    </div>
  </dialog>
</template>

<style scoped></style>
