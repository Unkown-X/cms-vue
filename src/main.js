import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import './plugins/element.js'
import { post, fetch } from './plugins/axios.js'
Vue.config.productionTip = false
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
