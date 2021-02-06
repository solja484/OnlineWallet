import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'feather-icons/dist/feather.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHryvnia } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHryvnia);

Vue.component('fa-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
