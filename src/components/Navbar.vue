<!-- src/components/Navbar.vue -->
<script setup lang="ts">
// vue and other libraries
import { Menu } from "lucide-vue-next";
import { RouterLink } from "vue-router";

// components
import ModalInfo from "./ModalInfo.vue";

// TODO
const navItems = [
  { name: "Generator", route: "/" },
  { name: "Flowchart", route: "/flowchart" },
  { name: "Glossary", route: "/glossary" },
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
          class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2"
        >
          <li v-for="item in navItems" :key="item.route">
            <RouterLink :to="item.route" active-class="font-bold underline">{{
              item.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink
        class="btn btn-ghost text-xl"
        to="/"
        active-class="font-black underline"
        >EduHash</RouterLink
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal hidden px-1 lg:flex">
        <li v-for="item in navItems" :key="item.route" class="mx-2">
          <RouterLink :to="item.route" active-class="font-bold underline">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ModalInfo />
    </div>
  </div>
</template>

<style scoped></style>
