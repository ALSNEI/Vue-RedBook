import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

// const home = r => require.ensure([依赖的模块数组]，回调函数，模块名)按需加载组件
const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/myOwn',
      name: 'myOwn',
      component: resolve => require.ensure([], () => resolve(require("@/components/myOwn/myOwn.vue"))),
      meta: {
        auth: true, //添加该字段，表示进入该页面需要这个条件参数
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require.ensure([], () => resolve(require("@/components/login/login.vue"))),
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require.ensure([], () => resolve(require("@/components/search/search.vue"))),
    },

  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to,from);
  // 判断是否需要需要登录才可以进入该页面
  if (to.meta.auth){
    // 判断是否已经登录
    if(true){

    }else{
       next({
         path: '/login',
         query: {
           redirect: to.fullPath
         } // 将跳转的路由path作为参数，登录成功后跳转到该路由
       })
    }
  }else{

  }

  next();
})

export default router

