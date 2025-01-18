<!-- src/components/NewNavbar.vue -->
<script setup lang="ts">
// vue and other libraries
import { Menu } from "lucide-vue-next";

// components
import ModalInfo from "./ModalInfo.vue";

// TODO
const navItems = [
  { name: "Generator", route: "#" },
  { name: "Flowchart", route: "#" },
  { name: "Glossary", route: "#" },
];
</script>

<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <Menu />
        </div>
        <ul
          tabindex="0"
          class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li v-for="item in navItems" :key="item.route">
            <a :href="item.route">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl" href="#">EduHash</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal hidden px-1 lg:flex">
        <li v-for="item in navItems" :key="item.route">
          <a :href="item.route">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ModalInfo />
    </div>
  </div>
</template>

<style scoped></style>
