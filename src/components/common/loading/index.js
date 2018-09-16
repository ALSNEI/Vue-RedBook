/* 说明：
    插件文件：index.js
    作者：ALSNEI
*/ 
import Vue from 'vue';
import load from './loading.vue'
const Mask = Vue.extend(load);

// 针对二次封装的axios专用的loading，用法：见fetch.js
const service = (Vue, options) => {
  // 创建"子类"方便挂载,可以選擇掛載對象，實現局部loading或者全部loading。参数是一个包含组件选项的对象，其中,data选项中必须是函数
  let loading = null;
  function $loading(options = {}) {
    return new Promise(resolve => {
      // 第一次調用loading組件
      if (!loading) {
        loading = new Mask();
        // 手动创建一个未挂载的实例
        loading.$mount();
        // 挂载
        document.querySelector(options.container || 'body').appendChild(loading.$el)
      }
      loading.resetdefault(options);
      loading.show();
      resolve()
    })
  }
  // 定義關閉loading方法
  $loading.hide = () => {
    return new Promise((resolve) => {
      if (!loading || !loading.visible) {
        resolve()
        return
      }
      loading.hide();
    })
  }
  return $loading;
};

// 使用Vue.use()方法，则该方法默认会调用install方法，然后注册该插件
export default {
  service,
  install(Vue, options) {
    // 创建"子类"方便挂载,可以選擇掛載對象，實現局部loading或者全部loading。参数是一个包含组件选项的对象，其中,data选项中必须是函数
    // console.log(Vue)
    const Vueload = Vue.extend(load);
    let loading = null;

    function $loading(options = {}) {
      return new Promise(resolve => {
        // 第一次調用loading組件
        if (!loading) {
          loading = new Vueload();
          // 手动创建一个未挂载的实例
          loading.$mount();
          // 挂载
          document.querySelector(options.container || 'body').appendChild(loading.$el)
        }
        loading.resetdefault(options);
        loading.show();
        resolve()
      })
    }
    // 定義關閉loading方法
    $loading.hide = () => {
      return new Promise((resolve) => {
        if (!loading || !loading.visible) {
          resolve()
          return
        }
        loading.hide();
      })
    }
    Vue.prototype.$loading = $loading
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vueload);
  if (Vueload.installed) {
    Vueload.installed = false;
  }
}
