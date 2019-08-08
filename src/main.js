// main.js
import Vue from 'vue'
import App from './App'
import router from '@/router/router.js'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
