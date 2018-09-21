<template>
    <div class="focusItem_wrap">
        <div class="top">
            <div class="user">
                <img v-lazy="item.imgurl" alt="">
                <span>{{item.name}}</span>
            </div>
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
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="allPage">
                <span class="current">1</span>
                /
                <span class="totalpage">8</span>
            </div>
            <div class="content">
                <div class="contentWrap">
                    <div class="p">{{item.content}}
                        </div></div>
                <div class="operation">
                    <div class="operation_left">
                        <div class="like">
                             <img v-lazy="item.avatar" alt="">
                             <span class="likenumber">12</span>
                        </div>
                        <div class="judge">
                            <img v-lazy="item.avatar" alt="">
                             <span class="judgenumber">12</span>
                        </div>
                        <div class="transmit">
                            <img v-lazy="item.avatar" alt="">
                        </div>
                    </div>
                    <div class="operation_right">
                        <div class="star">
                            <img v-lazy="item.avatar" alt="">
                             <span class="starnumber">12</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="allOption">
                <div class="totalnum">共<span class="totaloptions">24</span>条评论</div>
                <div class="option1">
                    <span class="nick">nick</span>: asdfasdfasd
                </div>
                <div class="option2">
                    <span class="tom">tom</span>: asdfasdfasd
                </div>
            </div>
            <div class="myoption">
                <img v-lazy="item.imgurl" alt="" class="myAvator">
                <input type="text" placeholder="请发表你的评论" class="judgement">
            </div>
            <p class="time">{{item.time}}</p>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "focusItem",
  props: ["item"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
.focusItem_wrap {
  margin-bottom: 0.373333rem;
  position: relative;
  background: white;
  .top {
    padding: 0.4rem 0.266667rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .user {
      width: 100%;
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
        text-indent: 0.133333rem;
      }
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
    position: relative;
    .swiper-container {
      height: 9rem;
      .swiper-slide {
        text-align: center;
        img {
          height: 100%;
        }
      }
    }
    .allPage {
      position: absolute;
      background: #8c8c8c;
      top: 0.266667rem;
      right: 0.266667rem;
      padding: 5px; /*px*/
      text-align: center;
      border-radius: 0.266667rem;
      z-index: 50;
    }
    .contentWrap {
      padding: 0.266667rem;
      box-sizing: border-box;
      font-size: 16px; /*px*/
      line-height: 24px; /*px*/
      .p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    .operation {
      padding: 0.266667rem;
      box-sizing: border-box;
      overflow: hidden;
      .operation_left {
        float: left;
        display: flex;
        div {
          margin-right: 0.266667rem;
          img {
            width: 30px; /*px*/
            height: 30px; /*px*/
            vertical-align: top;
          }
        }
      }
      .operation_right {
        float: right;
        div {
          img {
            width: 30px; /*px*/
            height: 30px; /*px*/
            vertical-align: top;
          }
        }
      }
    }
  }
  .bottom {
    .allOption {
      margin: 0.266667rem;
      padding: 0.266667rem;
      box-sizing: border-box;
      background: gainsboro;
      border-radius: 10px; /*px*/
      .totalnum {
        color: #8c8c8c;
        font-size: 13px; /*px*/
        line-height: 18px; /*px*/
      }
      .option1 {
        font-size: 13px; /*px*/
        line-height: 18px; /*px*/
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        .nick {
          font-weight: bold;
        }
      }
      .option2 {
        font-size: 13px; /*px*/
        line-height: 18px; /*px*/
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        .tom {
          font-weight: bold;
        }
      }
    }
    .myoption {
      margin: 0.266667rem;
      display: flex;
      .myAvator{
          width: 20px;/*px*/
          height: 20px;/*px*/
          margin-right: .266667rem;
      }
      .judgement {
        width: 100%;
        padding: 0.133333rem;
        box-sizing: border-box;
        outline: none;
        border-radius: 10px;
      }
    }
    .time {
      padding: 0.266667rem;
      margin: 0px;
      font-size: 14px; /*px*/
    }
  }
}
</style>

