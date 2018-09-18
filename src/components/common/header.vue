<template>
    <header class="title_wrap">
        <!-- 更多模块 -->
        <div class="left">
            <span class="left_side" @click="handleLeftSide">
                <img src="../../assets/three_line.png" >
            </span>
        </div>
        
        <div class="center">
            <!-- <div class="center_title" v-show="centerInfo">
                {{centerInfo}}
            </div>
            <slot v-if="!centerInfo">
                <router-link tag="div" to="/search" class="home_search">
                    <i class="iconfont icon-sousuo"></i>
                    <span>{{search_placeholder}}</span>
                </router-link>
            </slot> -->
              <ul class="homeWrapper" >
                <li v-for="(item,index) in homeTitleList" :key="index" :class="{active:index==homeTopActive}" @click="changeHomeTop(index)">{{item.p}}</li>
              </ul>
        </div>
        <div class="right" v-show="rightInfo" @click="rightclick">
            
        </div>
    </header>
</template>
<script>
export default {
  name: "myHeader",
  props: ["centerInfo", "rightInfo"],
  /*
        简单项目中：
        data:{
            msg:''
        }
        大型组件化项目中：
        data(){
            return:{
                msg:''
            }
        }

        差别：
            1.不使用return包裹的数据在项目中全局可见，会造成变量污染；
            2.使用return包裹的数据变量只在当前数组中生效，不会影响其他组件
    */

  data() {
    return {
      search_placeholder: "输入商家/品类/商圈",
      navDisplay: false,
      homeTitleList:[{p:"关注"},{p:"发现"},{p:"附近"}],
      homeTopActive:1,
      searchshow:false,
    };
  },
  methods: {
    rightclick() {
      console.log(this.rightInfo);
    },
    handleLeftSide() {
      this.$store.commit("SET_NAVSIDE_FLAG", !this.$store.state.navSide_flag);
      this.$store.commit("SET_MASK_FLAG", !this.$store.state.mask_flag);
    },
    changeHomeTop(index){
      this.homeTopActive = index;
    }
  },
  // watch监听state变量需要computed配合，
  computed: {
    getNavDisplay() {
      return this.$store.state.navSide_flag;
    }
  },
  watch: {
    //   处理滚动穿透问题
    getNavDisplay(val) {
      this.navDisplay = val;
      if (val == true) {
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        document.getElementsByTagName("html")[0].style.height = "100%";
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100%";
      } else {
        let cssStr = "overflow-y: auto; height: auto;";
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
        document.getElementsByTagName("html")[0].style.height = "auto";
        document.body.style.overflowY = "auto";
        document.body.style.height = "auto";
      }
      // 下面需要这两行代码，兼容不同浏览器
      document.body.scrollTop = this.pageScrollYoffset;
      window.scroll(0, this.pageScrollYoffset);
    }
  }
}
</script>

<style lang="scss" scoped>
// scoped 表示样式只用于该组件，不会影响到其他组件或者页面
/*
    1.直接写px，编译后会直接转化成rem —- 除开下面两种情况，其他长度用这个
    2.在px后面添加/no/，不会转化px，会原样输出。 — 一般border需用这个
    3.在px后面添加/\*px*\/,会根据dpr的不同，生成三套代码。—- 一般字体需用这个
*/
.title_wrap {
  height: 1.346667rem;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: white;
  display: flex;
  align-items: center;
  z-index: 80;
  .left {
    width: 1.346667rem;
    height: inherit;
    z-index: 20;
    display: table;
    text-align: center;
    .left_side {
      display: table-cell;
      vertical-align: middle;
    }
    .left_side img {
      width: 40%;
    }
  }
  .center {
    width: 100%;
    height: 100%;
    color: lightgrey;
    font-size: 18px; /*px*/
    flex: 1;
    .center_title {
      text-align: center;
    }
    .homeWrapper {
      width: 80%;
      height: 100%;
      list-style: none;
      padding: 0%;
      margin: 0 auto;
      display: flex;
      li {
        flex: 1;
        position: relative;
        height: 100%;
        font-size: 20px; /*px*/
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .active {
        color: black;
        font-weight: bold;
        &::after {
          content: " ";
          display: block;
          position: absolute;
          bottom: 0px;
          width: 34px; /*px*/
          height: 2px; /*px*/
          background: red;
        }
      }
    }
  }
  .right {
    width: 1.346667rem;
    height: inherit;
    z-index: 20;
    display: table;
    text-align: center;
    div {
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #fff;
      .iconfont {
        font-size: 20px; /*px*/
        margin-bottom: 1px; /*px*/
      }
    }
  }
}
</style>


