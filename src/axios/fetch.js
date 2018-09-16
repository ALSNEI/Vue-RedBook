import Vue from 'vue'
import Axios from 'axios'
import config from './config'
import loading from '@/components/common/loading'

let load = loading.service();
// 控制loading的显示隐藏
let showloading = true;
// 请求拦截器
Axios.interceptors.request.use(config => {
  // 控制loading显示
  if(showloading){
    load();
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
// 响应拦截器
Axios.interceptors.response.use(response => {
  // 控制loading关闭
  load.hide();
  return response;
}, function (error) {
  return Promise.reject(error);
});


class Ajax {
  static Get(url) {
    if (url.indexOf('searchdata') == -1) {
      showloading = true;
    }else{
      showloading = false;
    }
    let getData = new Promise((resolve, reject) => {
      Axios.get(url).then((response) => {
        console.log(response);
        if(this.handleResponse(response)){
            resolve(response.data);
        }else{
            reject(response)
        }
      }).catch((e,res) => {
        // console.log(e);
        this.checkCode(res)
        reject(e)
      })
    })
    return getData
  };
  static Post(url, data) {
    return new Promise((resolve, reject) => {
      Axios.post(url, data).then(response => {
        // console.log(response);
        if (this.handleResponse(response)) {
          resolve(response.data);
        } else {
          reject(response)
        }
      }).catch(e => {
        // console.log(e);
        this.checkCode(res)
        reject(e)
      })
    })
  };
  static handleResponse(res) {
    // console.log(res);
    
    if(res&&res.status===200){
        return true;
    }else{
        return false;
    }
  };
  static checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res && res.status === -404) {
      alert(res.msg)
    }
    if (res && res.data && (!res.data.success)) {
      alert(res.data.error_msg)
    }
    return res
  };
}


export default Ajax;
