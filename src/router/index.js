import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/index.vue";
import Information from "../pages/Information/index.vue";
import LocationsServices from "../pages/LocationsServices/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/info",
    name: "info",
    component: Information,
  },
  {
    path: "/services",
    name: "services",
    component: LocationsServices,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
