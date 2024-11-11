<!-- App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import { Output } from "./interfaces.ts";

// components
import Input from "./components/Input.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

// variables
const output = ref<Output>({
  md5: { name: "MD5", link: "https://en.wikipedia.org/wiki/MD5", hash: "" },
  bcrypt: {
    name: "bcrypt",
    link: "https://en.wikipedia.org/wiki/Bcrypt",
    hash: "",
    hashId: "",
    inputCost: "",
    hashSalt: "",
    hashValue: "",
  },
  scrypt: {
    name: "scrypt",
    link: "https://en.wikipedia.org/wiki/Scrypt",
    hash: "",
  },
  argon2id: {
    name: "Argon2id",
    link: "https://en.wikipedia.org/wiki/Argon2",
    hash: "",
  },
});
const loading = ref<boolean>(false);
</script>

<template>
  <Navbar />

  <div class="flex grow flex-col items-center justify-center font-mono">
    <!-- Input.vue -->
    <Input
      :output="output"
      :loading="loading"
      @update:loading="loading = $event"
    />

    <!-- Crypto.vue -->
    <div
      class="w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 px-4 py-2"
    >
      <span v-if="loading" class="loading loading-bars loading-lg"></span>

      <div v-else role="tablist" class="tabs tabs-bordered">
        <input
          type="radio"
          name="tabs_1"
          role="tab"
          class="tab"
          aria-label="MD5"
          checked
        />
        <div role="tabpanel" class="tab-content p-10">
          <div v-if="output.md5.hash">
            <p>
              <a
                :href="output.md5.link"
                target="_blank"
                class="link-hover link link-info"
                >{{ output.md5.name }}
              </a>
            </p>

            <div class="divider"></div>

            <ul class="list-disc pl-5">
              <li>Hash:</li>
              <ul class="list-disc pl-5">
                <li>{{ output.md5.hash }}</li>
              </ul>
            </ul>
          </div>

          <span v-else> Complete prompt to view table </span>
        </div>

        <input
          type="radio"
          name="tabs_1"
          role="tab"
          class="tab"
          aria-label="bcrypt"
        />
        <div role="tabpanel" class="tab-content p-10">
          <div v-if="output.bcrypt.hash">
            <p>
              <a
                :href="output.bcrypt.link"
                target="_blank"
                class="link-hover link link-info"
              >
                {{ output.bcrypt.name }}
              </a>
            </p>

            <p class="mt-4">{{ output.bcrypt.hash }}</p>

            <div class="divider"></div>

            <ul class="list-disc pl-5">
              <li>hashId:</li>
              <ul class="list-disc pl-5">
                <li>{{ output.bcrypt.hashId }}</li>
              </ul>

              <li>inputCost:</li>
              <ul class="list-disc pl-5">
                <li>{{ output.bcrypt.inputCost }}</li>
              </ul>

              <li>hashSalt:</li>
              <ul class="list-disc pl-5">
                <li>{{ output.bcrypt.hashSalt }}</li>
              </ul>

              <li>hashValue:</li>
              <ul class="list-disc pl-5">
                <li>{{ output.bcrypt.hashValue }}</li>
              </ul>
            </ul>
          </div>

          <span v-else> Complete prompt to view table </span>
        </div>

        <input
          type="radio"
          name="tabs_1"
          role="tab"
          class="tab"
          aria-label="scrypt"
        />
        <div role="tabpanel" class="tab-content p-10">
          <div v-if="output.scrypt.hash">
            <p>
              <a
                :href="output.scrypt.link"
                target="_blank"
                class="link-hover link link-info"
              >
                {{ output.scrypt.name }}
              </a>
            </p>

            <div class="divider"></div>

            <ul class="list-disc pl-5">
              <li>Hash:</li>
              <ul class="list-disc pl-5">
                <li>{{ output.scrypt.hash }}</li>
              </ul>
            </ul>
          </div>

          <span v-else> Complete prompt to view table </span>
        </div>

        <input
          type="radio"
          name="tabs_1"
          role="tab"
          class="tab"
          aria-label="Argon2id"
        />
        <div role="tabpanel" class="tab-content p-10">
          <div v-if="output.argon2id.hash">
            <p>
              <a
                :href="output.argon2id.link"
                target="_blank"
                class="link-hover link link-info"
              >
                {{ output.argon2id.name }}
              </a>
            </p>

            <div class="divider"></div>

            <ul class="list-disc pl-5">
              <li>Hash:</li>
              <ul class="list-disc pl-5">
                <li>{{ output.argon2id.hash }}</li>
              </ul>
            </ul>
          </div>

          <span v-else> Complete prompt to view table </span>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped></style>
