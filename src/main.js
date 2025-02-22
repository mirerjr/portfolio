import App from "./App.vue";
import { createApp } from "vue";
import "./style.css";
import "./plugins/font-awesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).component("fontAwesomeIcon", FontAwesomeIcon).mount("#app");
