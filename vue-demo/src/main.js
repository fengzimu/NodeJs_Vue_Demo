// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { i18n } from '@/translations/i18n'
import $ from 'jquery'
window.jQuery = window.$ = require('jquery')
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'  
import '../node_modules/bootstrap/dist/js/bootstrap.min'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
