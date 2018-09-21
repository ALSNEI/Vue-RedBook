<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home_wrap {
  padding: 2.546667rem 0rem 1.2rem;
  box-sizing: border-box;
  .search_wrapper {
    position: fixed;
    top: 1.346667rem;
    left: 0%;
    width: 100%;
    z-index: 10;
  }
}
</style>
<style>
  .swiper-slide{
        overflow: hidden;
    }
.swiper-slide-active{
        overflow: auto !important;
    }
</style>


<template>
  <div class="home_wrap">
    <my-header></my-header>
    <search class="search_wrapper"></search>
    <div class="content">
      <swiper :options="swiperOption">
        <swiper-slide>
          <focus :focusdata="shoplist"></focus>
        </swiper-slide>
        <swiper-slide>
          <find :finddata="shoplist"></find>
        </swiper-slide>
        <swiper-slide>
          <nearby :nearbydata="shoplist"></nearby>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import search from "@/components/common/search";
import scrollTable from "@/components/common/scrollTable";
import focus from "@/components/focus/focus";
import find from "@/components/find/find";
import nearby from "@/components/nearby/nearby";

export default {
  name: "home",
  data() {
    return {
      // vue-awesome-swiper需要根据新API进行写配置，否则分页器或者其他无法显示。
      swiperOption: {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        pagination: {
          el: ".swiper-pagination"
        },
        paginationClickable: false,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      },
      iconData: [
        { icon: "icon-meishi", p: "美食", color: "#fd9d21" },
        { icon: "icon-maoyan", p: "猫眼电影", color: "#ff6767" },
        { icon: "icon-jiudian", p: "酒店", color: "#8a90fa" },
        { icon: "icon-xiuxianyule", p: "休闲娱乐", color: "#fed030" },
        { icon: "icon-waimai", p: "外卖", color: "#fd9d21" },
        { icon: "icon-ktv", p: "KTV", color: "#fed030" },
        { icon: "icon-zhoubianyou", p: "周边游", color: "#4dc6ee" },
        { icon: "icon-liren", p: "丽人", color: "#ff80c2" },
        { icon: "icon-xiaochi", p: "小吃快餐", color: "#fd9d21" },
        { icon: "icon-huochepiaoicon01", p: "机票/火车票", color: "#599eec" },
        { icon: "icon-jinrixindan", p: "今日新单", color: "#00d3be" },
        { icon: "icon-shenghuofuwu", p: "生活服务", color: "#A8DD99" },
        { icon: "icon-zuliao", p: "足疗/按摩", color: "#fed030" },
        { icon: "icon-tiandianyinpin", p: "甜点饮品", color: "#fd9d21" },
        { icon: "icon-muyingqinzi", p: "母婴亲子", color: "#ff80c2" },
        { icon: "icon-xuexi", p: "学习培训", color: "#84d23d" },
        { icon: "icon-jiehun", p: "结婚", color: "#ff80c2" },
        { icon: "icon-jiazhuang", p: "家装", color: "#84d23d" },
        { icon: "icon-daijinquan", p: "代金券", color: "#fd9d21" },
        { icon: "icon-sandian", p: "全部分类", color: "#00d3be" }
      ],
      shoplist: [],
      TabList: [
        { id: 0, name: "推荐" },
        { id: 1, name: "视频" },
        { id: 2, name: "男士穿搭" },
        { id: 3, name: "旅行" },
        { id: 4, name: "美食" },
        { id: 5, name: "健身" },
        { id: 6, name: "影视" },
        { id: 7, name: "读书" }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide,
    search,
    scrollTable,
    focus,
    find,
    nearby
  },
  async created() {
    const res = await this.$ajax.Get(this.$ApiSetting.bannerUrl);
    console.log(res);
    this.middleAds = res;
    this.shoplist = await this.$ajax.Get(this.$ApiSetting.shoplistsUrl);
    console.log(this.shoplist);
  },
  methods: {}
};
</script>
