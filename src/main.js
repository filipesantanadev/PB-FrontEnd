import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import naive from "naive-ui";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMusic,
  faCircleInfo,
  faHandHoldingMedical,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

library.add(faMusic, faCircleInfo, faHandHoldingMedical, faAngleDown);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(naive)
  .use(router)
  .mount("#app");
