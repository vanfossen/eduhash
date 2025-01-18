// src/router.ts
import { createWebHistory, createRouter } from "vue-router";

// TODO
import Generator from "./pages/Generator.vue";
import Flowchart from "./pages/Flowchart.vue";
import Glossary from "./pages/Glossary.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: Generator },
  { path: "/flowchart", component: Flowchart },
  { path: "/glossary", component: Glossary },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory("/eduhash/"),
  routes,
});

export default router;
