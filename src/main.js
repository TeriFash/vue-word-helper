import Vue from "vue";
import { BootstrapVue, IconsPlugin, BIcon } from "bootstrap-vue";
import VueClipboard from "vue-clipboard2";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueFirestore from 'vue-firestore'
import firebase from "./firebase";
// import {firebase} from "@firebase/app";
// import "@firebase/firestore";
import "./assets/scss/main.scss";


Vue.use(VueFirestore);
Vue.use(firebase);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    BIcon
  },
  render: h => h(App)
}).$mount("#app");
