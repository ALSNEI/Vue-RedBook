<style lang="scss" scoped>
.footer_wrapper {
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  width: 100%;
  height: 1.2rem;
  background-color: white;
  z-index: 80;
  &.addborder {
    box-shadow: 0rem 0rem 0.4rem lightgrey;
  }
  div {
    flex: 1;
    height: 100%;
    line-height: 1.2rem;
    text-align: center;
    color: lightgrey;
    font-size: 18px; /*px*/
    &.active {
      color: black;
      font-size: 20px; /*px*/
      font-weight: bold;
    }
  }
}
</style>

<template>
    <footer class="footer_wrapper addborder">
        <div v-for="(item,index) in footerList" :key="index" :class="{active:actived==index}" @click="jump(item,index)">{{item.p}}</div>
    </footer>
</template>
<script>
export default {
  name: "myfooter",
  data() {
    return {
      actived: 0,
      footerList: [
        { p: "首页",path:'index' },
        { p: "商城",path:'shop' },
        { p: "+" ,path:'public'},
        { p: "消息" ,path:'notice'},
        { p: "我" ,path:'myOwn'}
      ]
    };
  },
  methods: {
    jump(Ob,index) {
      if(this.actived == index){
        return;
      }else{
        this.actived = index;
        this.$store.commit("SET_BOTTOMTAB_FLAG",index);
        console.log(this.$store.state.bottomTab_flag)
        this.$router.push({name: Ob.path});
      }
    }
  }
};
</script>

