// !Main CSS
import "./assets/main.css";

// !Vue
import { createApp } from "vue";

// !App
import App from "./App.vue";

// !Router
import router from "./router";

// !Language
import i18n from "./i18n/index";
import en from "./i18n/locales/en.json";
import ar from "./i18n/locales/ar.json";

// !Animate CSS
import "animate.css";

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:5000/api/v1';

// !store
import index from "./Store/index";

// !Vuex
import Vuex from "vuex";

// !Subscribe
import "./Store/subscriber";

// !Toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// ! Toast Options
import options from "./utils/toastOptions";

// !Language File -> Loaded && !Default Language
import "./utils/LangMounted";

// !Language
export default {
  en,
  ar,
};

const app = createApp(App);

app.use(router);
app.use(index);
app.use(Toast, options);
app.use(Vuex);
app.use(i18n);
app.mount("#app");
