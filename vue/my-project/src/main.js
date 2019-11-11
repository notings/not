import Vue from 'vue'
import App from './App.vue'
import './assets/base.css'
import './assets/scss/index.css';
import router from './routers/index'
import axios from 'axios'
import store from './store/vuex'
import Vuex from 'vuex'

// import 'lib-flexible/flexible'
// import rem from './assets/rem.js';
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  // rem,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
