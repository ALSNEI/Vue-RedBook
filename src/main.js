// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myHeader from '@/components/common/header'
import 'lib-flexible'

Vue.config.productionTip = false

// 每个页面都会使用的，使用全局引入组件；个别页面使用的单独引入
Vue.component("my-header",myHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
