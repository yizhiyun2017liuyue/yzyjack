// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import information from './App'
import router from './router'

require('../static/css/reset.css')
require('../static/js/jquery.min.js')
require('../static/js/flexible.js')

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { information },
  template: '<information/>'
})
