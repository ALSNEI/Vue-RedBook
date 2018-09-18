<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home_wrap{
  .search_wrapper{
    position: fixed;
    top: 1.346667rem;
    left: 0%;
    width: 100%;
    z-index: 10;

  }
  .middle_wapper{
    padding: 6px;/*px*/
    margin: 0px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
    list-style: none;
    li{
      flex:1;
      height: 100%;
      text-align: center;
      div{
        display: inline-block;
        width: 2.266667rem;
        text-align: left;
        .middle_p1{
          display: block;
          color: #55a40f;
          font-size: 15px;/*px*/
          margin: 6px 0px 18px;/*px*/
        }
        .middle_p2{
          display: block;
          color: #666;
          font-size: 12px;/*px*/
          margin: 0px 0px 4px;/*px*/
        }
      }
    }
    li:nth-child(2){
      .middle_p1{
          color:#ff3f0d;
        }
    }
    li:last-child{
      .middle_p1{
          color:#f742a0;
        }
    }
    li+li{
      border-left: 1px solid #ddd8ce;
    }
  }
  .shoplist_warp-enter,.shoplist_warp-leave-active {
    opacity: 0;
  }
  .shoplist_warp{
    // padding-left:.266667rem;
    background: #fff;
    .shop_p{
      font-size: 17px;/*px*/
      padding: .373333rem 0;
      margin: 0px;
      color: #333;
    }
    .checkAll{
      color: #06c1ae;
      padding: 0 .266667rem;
      margin: 0px;
      margin-left: -.266667rem;
      line-height: 1.066667rem;
      font-size: 15px;/*px*/
      border-top: 1px solid #DDD8CE;/*px*/
      i{
          font-size: 14px;/*px*/
          float: right;
      }
    }
  }
}
</style>

<style lang="scss">
// 首页swiper 专用样式
// .swiper-container{
//   height: 4.8rem;
//   background:#fff;
//   .swiper-slide{
//     ul{
//       width: 100%;
//       margin: 0px;
//       padding: 0px;
//       display: flex;
//       justify-content: center;
//       flex-wrap: wrap;
//       li{
//         width: 20%;
//         padding: 10px 0px;/*px*/
//         text-align: center;
//         list-style-type: none;
//         color: #666;
//         font-size: 12px;/*px*/
//         span{
//           display: block;
//           width: 1.066667rem;
//           height: 1.066667rem;
//           font-size: 25px;/*px*/
//           color:#fff;
//           border-radius: 50%;
//           margin: 0 auto;
//           line-height: 1.066667rem;
//           margin-bottom:7px;/*px*/
//         }
//       }
//     }
//   }
//   .swiper-pagination{
//     bottom:.106667rem;
//     .swiper-pagination-bullet{
//       margin: 0px 10px;/*px*/
//       opacity: 0.1;
//     }
//     .swiper-pagination-bullet-active{
//       background:#06c1ae;
//       opacity:1;
//     }
//   }
// }
</style>

<template>
  <div class="home_wrap">
    <my-header  leftInfo="location" rightInfo="my">
    </my-header>
    <search class="search_wrapper"></search>
    <nav-side></nav-side>
    <myMask></myMask>
    <router-view></router-view>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <ul>
          <li v-for="(item, index) in iconData" :key="index" v-if="index<=9">
            <span class="iconfont" :class="item.icon" :style="{backgroundColor:item.color}"></span>
            <div>{{item.p}}</div>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item, index) in iconData" v-if="index>=10" :key="index">
            <span class="iconfont" :class="item.icon"  :style="{backgroundColor:item.color}"></span>
            <div>{{item.p}}</div>
          </li>
        </ul>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <seperateLine></seperateLine>
    <ul class="middle_wapper">
      <li v-for="(item,id) in middleAds" :key="id">
        <div>
          <strong class="middle_p1">
            {{item.p1}}
          </strong>
          <small class="middle_p2">
            {{item.p2}}
          </small>
        </div>
        <img :src="item.imgurl" alt="item.p1">
      </li>
    </ul>
    <seperateLine></seperateLine>
    <transition name="fade">
      <div class="shoplist_warp" v-show="shoplist.length>0">
          <p class="shop_p">猜你喜欢</p>
          <listShop :item="item" v-for="(item,index) in shoplist" :key="index"></listShop>
          <p class="checkAll">查看全部团购
            <i class="iconfont icon-jiantouyou"></i>
          </p>
      </div>
    </transition>
    <!-- <div class="content">
      <router-link tag="a" to="/myOwn">go myOwn</router-link>
    </div> -->
    <designFooter></designFooter>
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import seperateLine from '@/components/common/seperate-line'
import listShop from '@/components/common/listShop'
import designFooter from '@/components/common/myfooter'
import search from '@/components/common/search'
export default {
  name: 'home',
  data () {
    return {
      open_app_url:'',
      // vue-awesome-swiper需要根据新API进行写配置，否则分页器或者其他无法显示。
      swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          pagination: {
            el: '.swiper-pagination',
          },
          paginationClickable: false,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
        },
      iconData:[
        {icon:'icon-meishi',p:'美食',color:'#fd9d21'},
        {icon:'icon-maoyan',p:'猫眼电影',color:'#ff6767'},
        {icon:'icon-jiudian',p:'酒店',color:'#8a90fa'},
        {icon:'icon-xiuxianyule',p:'休闲娱乐',color:'#fed030'},
        {icon:'icon-waimai',p:'外卖',color:'#fd9d21'},
        {icon:'icon-ktv',p:'KTV',color:'#fed030'},
        {icon:'icon-zhoubianyou',p:'周边游',color:'#4dc6ee'},
        {icon:'icon-liren',p:'丽人',color:'#ff80c2'},
        {icon:'icon-xiaochi',p:'小吃快餐',color:'#fd9d21'},
        {icon:'icon-huochepiaoicon01',p:'机票/火车票',color:'#599eec'},
        {icon:'icon-jinrixindan',p:'今日新单',color:'#00d3be'},
        {icon:'icon-shenghuofuwu',p:'生活服务',color:'#A8DD99'},
        {icon:'icon-zuliao',p:'足疗/按摩',color:'#fed030'},
        {icon:'icon-tiandianyinpin',p:'甜点饮品',color:'#fd9d21'},
        {icon:'icon-muyingqinzi',p:'母婴亲子',color:'#ff80c2'},
        {icon:'icon-xuexi',p:'学习培训',color:'#84d23d'},
        {icon:'icon-jiehun',p:'结婚',color:'#ff80c2'},
        {icon:'icon-jiazhuang',p:'家装',color:'#84d23d'},
        {icon:'icon-daijinquan',p:'代金券',color:'#fd9d21'},
        {icon:'icon-sandian',p:'全部分类',color:'#00d3be'},
      ],
      middleAds:[],
      msg: 'Welcome to home',
      shoplist:[]
    }
  },
  components:{
    seperateLine,
    listShop,
    designFooter,
    swiper,
    swiperSlide,
    search
  },
  async created(){
    const res = await this.$ajax.Get(this.$ApiSetting.bannerUrl);
    console.log(res)
    this.middleAds = res;
    this.shoplist = await this.$ajax.Get(this.$ApiSetting.shoplistsUrl);
    console.log(this.shoplist)
  },
}
</script>
