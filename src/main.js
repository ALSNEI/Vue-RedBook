// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'normalize.css'
import 'lib-flexible'
import '../static/css/iconfont.css'
import FastClick from 'fastclick'
import VueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/mockjs/mock.js'
import Ajax from '@/axios/fetch'
import ApiSetting from '@/axios/api.js'
import myHeader from '@/components/common/header'
import navSide from '@/components/common/navside'
import myMask from '@/components/common/mask'
import loading from '@/components/common/loading'
import store from './store'

Vue.config.productionTip = false
Vue.use(loading)
Vue.use(VueSwiper)
// 懒加载图片
Vue.use(VueLazyload, {
  error: '/static/img/waitime.jpg',
  loading: '/static/img/waitime.jpg',
  attempt: 5
})


Vue.prototype.$ajax = Ajax;
Vue.prototype.$ApiSetting = ApiSetting;

// 针对移动端的300ms延迟的点击引用fastclick插件
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

// 每个页面都会使用的，使用全局引入组件；个别页面使用的单独引入
Vue.component("my-header",myHeader)
Vue.component("nav-side", navSide)
Vue.component("myMask", myMask)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
