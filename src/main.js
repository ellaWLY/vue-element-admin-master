// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
import axios from 'axios';
import Vuex from 'vuex';
import '@/styles/public.scss';
import './permission';

// import Cookies from 'js-cookie'; //引入cookie操作依赖

Vue.config.productionTip = false;
Vue.use(ElementUI); 
Vue.prototype.$http = axios;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
