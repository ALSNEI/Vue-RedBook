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
    height: 1.2rem;
    z-index: 10;
  }
}
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
      <swiper :options="swiperOption" ref="mySwiper">
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
        setWrapperSize: true,
        pagination: {
          el: ".swiper-pagination"
        },
        paginationClickable: false,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        on:{
          // swiper中this指向问题
          slideChange: ()=>{
            let swiper = this.$refs.mySwiper.swiper;
            // console.log("change Home swiper:"+swiper.realIndex);
            this.$store.commit("SET_HOMETITLE_FLAG",swiper.realIndex);
          },
        },
      },
      shoplist: [],
    };
  },
  components: {
    swiper,
    swiperSlide,
    search,
    focus,
    find,
    nearby
  },
  async created() {
    const res = await this.$ajax.Get(this.$ApiSetting.bannerUrl);
    // console.log(res);
    this.middleAds = res;
    this.shoplist = await this.$ajax.Get(this.$ApiSetting.shoplistsUrl);
    // console.log(this.shoplist);
  },
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    homeTitle(){
      return this.$store.state.homeTitle_flag
    }
  },
  watch:{
    homeTitle:function(val){
      this.swiper.slideTo(val, 500, false)
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(1, 1000, false)
  },
  methods: {}
};
</script>
