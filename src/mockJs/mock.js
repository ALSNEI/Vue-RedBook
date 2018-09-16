const Mock = require('mockjs');
const Random = Mock.Random;

// 首页推荐数据
const bannerData = (()=>{
    let Data = [];
    for (let index = 0; index < 3; index++) {
        const obj = {
          'id|+1': 0,
          'p1': Random.cword(4),
          'p2': Random.ctitle(4, 6),
          'imgurl': Random.dataImage('124x124', 'Hello bitch!'),
        };
        Data.push(obj);
    }
    return Data;
})();
// 首页商品列表
const shoplists = (() => {
    let length = Random.integer(10,20);
    let Data = [];
    for (let index = 0; index < length; index++) {
        let vipPrice = Random.float(10, 200, 0, 2).toFixed(1);
        const obj = {
        'id|+1': 0,
        'imgurl': Random.dataImage('180x180', 'Hello bitch!'),
        'p1': Random.cword(4,8),
        'location': Random.cword(4, 6),
        'p2': Random.ctitle(7, 30),
        'vipPrice': Number(vipPrice),
        'price': Number(vipPrice) + Number(Random.integer(60, 100)),
        'num':Random.integer(0,1000),
        };
        Data.push(obj);
    }
    return Data;
})();
// 搜索页面的热门数据
const nearbyhot = (() => {
  let Data = [];
  let length = Random.integer(8, 13);
  for (let index = 0; index < length; index++) {
    const obj = {
      'id|+1': 0,
      'p1': Random.cword(4,8)
    };
    Data.push(obj);
  }
  return Data;
})();
// 搜索得出数据
const searchdata = (() => {
  let Data = [];
  let length = Random.integer(10, 20);
  for (let index = 0; index < length; index++) {
    const obj = {
      'id|+1': 0,
      'p1': Random.cword(4, 8),
      'num': Random.integer(1, 100),
    };
    Data.push(obj);
  }
  return Data;
})();



Mock.setup({
    timeout:'500-1000'//设置响应时间
})

Mock.mock('/bannerData','get',(req,res)=>{
    return bannerData
});
Mock.mock('/shoplists', 'get', (req, res) => {
  return shoplists
});

Mock.mock('/nearbyhot', 'get', (req, res) => {
  return nearbyhot
});

Mock.mock('/searchdata', 'get', (req, res) => {
  return searchdata
});



