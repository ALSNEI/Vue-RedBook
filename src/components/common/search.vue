<template>
    <div class="search">
        <div class="search_content">
            <input type="text" v-model="searchp" :class="{'getp':searchp}" @focus="changehotbol()">
            <span class="placehold" :class="{blur:!searching}">
                <i class="iconfont icon-sousuo"></i>
                <span v-if="!searchp">{{search_placeholder}}</span>
            </span>
        </div>
        <div class="cancel" @click="cancel" v-if="cancelBol">取消</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      search_placeholder: "大家都在搜什么？",
      searchp:"",
      searching:false,
      cancelBol:false,
    };
  },
  methods:{
      changehotbol(){
          if(!this.searchp){
              this.searching = !this.searching;
              this.cancelBol = true;
          }
      },
      cancel(){
          this.searchp = "";
          this.changehotbol();
          this.cancelBol = false;
      }
  }
};
</script>
<style lang="scss" scoped>
.search{
    width: 100%;
    height: 100%;
    background: white;
    padding: .266667rem .533333rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .search_content{
        width: 100%;
        height: 100%;
        position: relative;
        background: lightgray;
        border-radius: 20px;/*px*/
        input{
            border: none;
            line-height: 100%;
            background: transparent;
            width: 100%;
            height: 100%;
            text-align: left;
            position: relative;
            z-index: 10;
            outline: none;
            padding:0px 30px;/*px*/
            box-sizing: border-box;
        }
        .placehold{
            position: absolute;
            top: 0%;
            left: 0%;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            color: gray;
            padding: 0px 10px;/*px*/
            box-sizing: border-box;
            .icon-sousuo{
                margin-right: .133333rem;
            }
            &.blur{
                justify-content: center;
            }
        }
    }
    .cancel{
        width: 40px;/*px*/
        height: 100%;
        font-size: 16px;/*px*/
        padding: 0px 10px;/*px*/
        color: gray;
        line-height: normal;
    }
}
</style>

