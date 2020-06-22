import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import vSelect from "vue-select2";
// import "vue-select/dist/vue-select.css";
// import "vue-select/src/scss/vue-select.scss";

Vue.config.productionTip = false
Vue.use(VModal);
Vue.use(VueSweetalert2);
Vue.component('v-select', require("vue-select"))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
