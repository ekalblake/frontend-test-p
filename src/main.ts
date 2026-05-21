import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "./app/router/app.routes";
import { vuetify } from "./app/plugins/vuetify";

import "./shared/styles/style.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
