import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/login/login.vue'], resolve)
    },
    {
      path: '/',
      name: 'dashboard',
      component: resolve => require(['@/pages/dashboard/index.vue'], resolve)
    }
  ]
})
