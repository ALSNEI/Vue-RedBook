import Qs from 'qs'//用于序列化，如果后台提交可以直接接受json格式，可以不用

export default {
  //`url`是服务器链接，用来请求用
  url: '',

  //`method`是发起请求时的请求方法
  method: `get`,

  //`baseURL`如果`url`不是绝对地址，那么将会加在其前面。
  //当axios使用相对地址时这个设置非常方便
  //在其实例中的方法
  baseURL: '',

  //`transformRequest`允许请求的数据在传到服务器之前进行转化。
  //这个只适用于`PUT`,`GET`,`PATCH`方法。
  //数组中的最后一个函数必须返回一个字符串，一个`ArrayBuffer`,或者`Stream`
  transformRequest: [function (data) {
    //依自己的需求对请求数据进行处理
    return data;
  }],

  //`transformResponse`允许返回的数据传入then/catch之前进行处理
  transformResponse: [function (data) {
    //依需要对数据进行处理
    return data;
  }],

  //`headers`是自定义的要被发送的头信息
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },

  //`paramsSerializer`是一个可选的函数，是用来序列化参数
  //例如：（https://ww.npmjs.com/package/qs,http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params)
  },

  //`timeout`定义请求的时间，单位是毫秒。
  //如果请求的时间超过这个设定时间，请求将会停止。
  timeout: 1000,

  //`withCredentials`表明是否跨域请求，
  //应该是用证书
  withCredentials: false, //默认值

  //`adapter`适配器，允许自定义处理请求，这会使测试更简单。
  //返回一个promise，并且提供验证返回（查看[response docs](#response-api)）
  adapter: function (config) {
    /*...*/
  },


  //`responsetype`表明服务器返回的数据类型，这些类型的设置应该是
  //'arraybuffer','blob','document','json','text',stream'
  responsetype: 'json',

  //`xsrfHeaderName` 是http头（header）的名字，并且该头携带xsrf的值
  xrsfHeadername: 'X-XSRF-TOKEN', //默认值

  //`onUploadProgress`允许处理上传过程的事件
  onUploadProgress: function (progressEvent) {
    //本地过程事件发生时想做的事
  },

  //`onDownloadProgress`允许处理下载过程的事件
  onDownloadProgress: function (progressEvent) {
    //下载过程中想做的事
  },

  //`maxContentLength` 定义http返回内容的最大容量
  maxContentLength: 2000,

  //`validateStatus` 定义promise的resolve和reject。
  //http返回状态码，如果`validateStatus`返回true（或者设置成null/undefined），promise将会接受；其他的promise将会拒绝。
  validateStatus: function (status) {
    return status >= 200 && stauts < 300; //默认
  },
}
