const Mock = require('mockjs');
const Random = Mock.Random;

// 首页推荐数据
const bannerData = (() => {
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
  let length = Random.integer(10, 20);
  let Data = [];
  for (let index = 0; index < length; index++) {
    const obj = Mock.mock({
      'id': index,
      'avatar': Random.dataImage('180x180', 'Hello bitch!'),
      'name': Random.ctitle(1, 7),
      'imgList|0-8': [{
        'imgurl': Random.dataImage('375x667', 'Hello bitch!')
      }],
      'like': Random.integer(0, 1000),
      'comments': Random.integer(0, 1000),
      'transmit': Random.integer(0, 1000),
      'star': Random.integer(0, 1000),
      'content': Random.cparagraph(1, 3),
      'topCommit': Random.csentence(5, 15),
      'time': Random.datetime('MM-dd')
    });
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
      'p1': Random.cword(4, 8)
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
  timeout: '500-1000' //设置响应时间
})

Mock.mock('/bannerData', 'get', (req, res) => {
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
