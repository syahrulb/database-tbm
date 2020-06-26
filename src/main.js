import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import { VuejsDatatableFactory } from 'vuejs-datatable';
import vuetify from './vuetify' // path to vuetify export
 

// VuejsDatatableFactory.useDefaultType(false)
//   .registerTableType('datatable', tableType => tableType.mergeSettings({
//     table: {
//       class: 'table table-bordered',
//     },
//     pager: {
//       classes: {
//         pager: 'pagination pagination-primary text-center float-right',
//         selected: 'page-item active',
//       },
//       icons: {
//         next: '<i class="zmdi zmdi-skip-next" title="Next page"></i>',
//         previous: '<i class="zmdi zmdi-skip-previous" title="Previous page"></i>',
//       },
//     },
//   }));
Vue.config.productionTip = false
Vue.use(VModal);
Vue.use(VueSweetalert2);
// Vue.use(VuejsDatatableFactory);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
