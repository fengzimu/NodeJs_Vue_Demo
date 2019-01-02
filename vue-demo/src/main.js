// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { i18n } from '@/translations/i18n'
import $ from 'jquery'
import axios from 'axios'

Vue.use(axios)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  i18n,
  components: { App },
  template: '<App/>'
})
