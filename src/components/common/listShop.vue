<template>
    <div class="listShop_wrap">
        <!-- <img v-lazy="item.imgurl" alt="">
        <div>
            <p class="top">{{item.p1}}</p>
            <p class="content">[{{item.location}}]{{item.p2}}</p>
            <p>
                <span class="vipprice"><span>{{item.vipPrice}}</span>元</span>
                <span>门市价:{{item.price}}元</span>
                <span class="pull-right">已售{{item.num}}</span>
            </p>
        </div> -->
        <div class="top">
            <img v-lazy="item.imgurl" alt="">
            <span>{{item.name}}</span>
            <ul class="pointList">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="center">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(Ob,index) in item.imgList" :key="index">
                    <img v-lazy="Ob.imgurl" alt="">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "listShop",
  props: ["item"],
  data(){
      return {
          swiperOption:{
              
          }
      }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
.listShop_wrap {
  padding: 0.373333rem 0rem;
  position: relative;
  .top {
    padding: 0.4rem 0.266667rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    img {
      width: 1.066667rem;
      height: 1.066667rem;
      border-radius: 100%;
    }
    span {
      width: 100%;
      height: 100%;
      font-size: 16px; /*px*/
      font-weight: bold;
      box-sizing: border-box;
      text-indent: .133333rem;
    }
    .pointList {
      width: 1.066667rem;
      display: inline-block;
      list-style: none;
      li {
        width: 4px; /*px*/
        height: 4px; /*px*/
        background: black;
        border-radius: 100%;
        float: right;
        margin-right: 2px; /*px*/
      }
    }
  }
  .center {
    width: 100%;
    height: auto;
    .swiper-container{
        height: 9rem;
    }
  }
  // img{
  //     width: 2.4rem;
  //     height: 2.186667rem;
  //     position: absolute;
  //     left: 0px;
  //     top: .373333rem;
  // }
  // div{
  //     margin-left:2.666667rem;
  //     height: 2.186667rem;
  //     p{
  //         margin: 0px;
  //         position: relative;
  //     }
  //     .top{
  //         padding-top: .133333rem;
  //         margin-bottom: .16rem;
  //         font-size: 15px;/*px*/
  //         font-weight: 400;
  //         color: #333;
  //     }
  //     .content{
  //         font-size: 12px;/*px*/
  //         height: .906667rem;
  //         color: #666;
  //         text-overflow: ellipsis;
  //         overflow: hidden;
  //         white-space:nowrap;
  //     }
  //     .vipprice{
  //         color: #06c1ae;
  //         font-size: 13px;/*px*/
  //         span{
  //             font-size: 19px;/*px*/
  //         }
  //     }
  //     .pull-right{
  //         position: absolute;
  //         bottom: 0px;
  //         right: 0px;
  //         font-size: 12px;/*px*/
  //         color: #666;
  //     }
  // }
}
</style>

