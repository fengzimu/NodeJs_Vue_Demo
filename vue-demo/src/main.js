// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { i18n } from '@/translations/i18n'
import $ from 'jquery'
import axios from 'axios'
//Element part
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//Bootstrap part
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Mock from './mock'

Vue.use(ElementUI)
Vue.use(axios)
Vue.config.productionTip = false
//Need to remove when pack 
// axios.defaults.baseURL = 'http://localhost:8080/api'
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  i18n,
  components: { App },
  template: '<App/>'
})
