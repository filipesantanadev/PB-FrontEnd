import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/index.vue";
import Manager from "../pages/manager/index.vue";
import About from "../pages/LocationsServices/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/info",
    name: "info",
    component: Manager,
  },
  {
    path: "/services",
    name: "services",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
