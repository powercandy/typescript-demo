// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router: any = new VueRouter({
  routes
})
Vue.config.productionTip = false
/* tslint:disable:no-unused-expression */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
/* tslint:enable:no-unused-expression */
