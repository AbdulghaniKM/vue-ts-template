import uiPlugin from "@nuxt/ui/vue-plugin";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(uiPlugin);

app.mount("#app");
