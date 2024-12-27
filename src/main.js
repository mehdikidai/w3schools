import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";

const app = createApp(App);

app.component("xIcon", Icon);

app.use(createPinia());
app.use(router);

app.mount("#app");
