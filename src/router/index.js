import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import 'normalize.css'

Vue.use(Router)

// const home = r => require.ensure([依赖的模块数组]，回调函数，模块名)按需加载组件
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/myOwn',
      name: 'myOwn',
      component: resolve => require.ensure([],() => resolve(require("@/components/myOwn/myOwn.vue")))
    }
  ]
})
