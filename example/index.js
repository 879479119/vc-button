// const Vue = require('vue')
import Vue from 'vue'
import App from './App.vue'
// import '../assets/index.less'

Vue.config.productionTip = false

new Vue({
  // el: '#container',
  // template: '<App />',
  // components: { App }
  render: create => create(App)
}).$mount('#container')
