<!-- src/App.vue -->
<script setup lang="ts">
// vue and other libraries
import { ref } from "vue";
import { TriangleAlert } from "lucide-vue-next";

// components
import Alert from "./components/Alert.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

// variables
const showAlert = ref<boolean>(true);
</script>

<template>
  <Navbar />

  <Alert
    v-if="showAlert"
    @update:showAlert="showAlert = $event"
    text="This application is currently in development. Please note that features may not function as expected and are subject to change."
  >
    <TriangleAlert />
  </Alert>

  <RouterView />

  <Footer />
</template>

<style scoped></style>
