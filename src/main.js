import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import vuetify from './vuetify' 
Vue.config.productionTip = false
Vue.use(VModal);
Vue.use(VueSweetalert2);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
