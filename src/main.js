import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Loader from './components/Loader.vue'
import Pagination from './components/Pagination.vue'


Vue.component('Loader', Loader)
Vue.component('Pagination', Pagination)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
