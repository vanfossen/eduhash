<!-- src/components/Crypto.vue -->
<script setup lang="ts">
// vue and other libraries
import { Output } from "../interfaces.ts";

// props
const props = defineProps<{
  output: Output;
  loading: boolean;
}>();
</script>

<template>
  <div
    class="w-4/5 max-w-fit overflow-x-auto rounded-2xl border border-black bg-base-200 px-4 py-2"
  >
    <span v-if="props.loading" class="loading loading-bars loading-lg"></span>

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
        <div v-if="props.output.md5.hash">
          <p>
            <a
              :href="props.output.md5.link"
              target="_blank"
              class="link-hover link link-info"
              >{{ props.output.md5.name }}
            </a>
          </p>

          <div class="divider"></div>

          <ul class="list-disc pl-5">
            <li>Hash:</li>
            <ul class="list-disc pl-5">
              <li>{{ props.output.md5.hash }}</li>
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
        <div v-if="props.output.bcrypt.hash">
          <p>
            <a
              :href="props.output.bcrypt.link"
              target="_blank"
              class="link-hover link link-info"
            >
              {{ props.output.bcrypt.name }}
            </a>
          </p>

          <div class="divider"></div>

          <ul class="list-disc pl-5">
            <li>Hash:</li>
            <ul class="list-disc pl-5">
              <li>{{ props.output.bcrypt.hash }}</li>
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
        <div v-if="props.output.scrypt.hash">
          <p>
            <a
              :href="props.output.scrypt.link"
              target="_blank"
              class="link-hover link link-info"
            >
              {{ props.output.scrypt.name }}
            </a>
          </p>

          <div class="divider"></div>

          <ul class="list-disc pl-5">
            <li>Hash:</li>
            <ul class="list-disc pl-5">
              <li>{{ props.output.scrypt.hash }}</li>
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
        <div v-if="props.output.argon2id.hash">
          <p>
            <a
              :href="props.output.argon2id.link"
              target="_blank"
              class="link-hover link link-info"
            >
              {{ props.output.argon2id.name }}
            </a>
          </p>

          <div class="divider"></div>

          <ul class="list-disc pl-5">
            <li>Hash:</li>
            <ul class="list-disc pl-5">
              <li>{{ props.output.argon2id.hash }}</li>
            </ul>
          </ul>
        </div>

        <span v-else> Complete prompt to view table </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
