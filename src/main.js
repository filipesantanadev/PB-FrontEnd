import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import naive from "naive-ui";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMusic,
  faCircleInfo,
  faHandHoldingMedical,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMusic, faCircleInfo, faHandHoldingMedical);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(naive)
  .use(router)
  .mount("#app");
