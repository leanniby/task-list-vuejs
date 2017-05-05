// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
