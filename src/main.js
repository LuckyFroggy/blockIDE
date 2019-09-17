// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import store from './vuex/store'
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.qs = QS;
import https from './https.js'
Vue.prototype.$https = https;
import "@/assets/css/theme-dark.css"
Vue.config.productionTip = false
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
window.onbeforeunload = function () {
  //页面离开清除编辑器缓存
  let allCookies = this.$cookies.keys();
  allCookies.forEach(element => {
    if (element.indexOf("keys_") >= 0) {
      this.$cookies.remove(element);
    }
  });
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
