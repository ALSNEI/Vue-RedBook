<style lang="scss" scoped>
.scrollTabWrap{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    overflow: hidden;
    background:#DDD8CE;
    z-index: 50;
    .tab_content{
      height: 100%;
      min-width: 100%;
      white-space: nowrap;
      .tab_item{
        display: inline-block;
        height: 100%;
        padding: 0px 20px;/*px*/
        box-sizing: border-box;
        font-size: 14px;/*px*/
        color: gray;
        &.active{
            color: black;
        }
      }
    }
  }
</style>

<template>
    <div class="scrollTabWrap" ref="tabsWrapper">
        <div class="tab_content" ref="tab">
            <div class="tab_item" :class="{active:index==activeIndex}" v-for="(item,index) in TabList" :key="index" ref="tabItem" @click="changetab(index)">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:['TabList'],
    data(){
        return{
            activeIndex:0
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.InitTabScroll()
        })
    },
    methods:{
        InitTabScroll(){
        // console.log(this.$refs.tabItem[0].clientWidth);
        let allWidth = 0;
        for (let index = 0; index < this.$refs.tabItem.length; index++) {
            allWidth += this.$refs.tabItem[index].clientWidth
        }
        this.$refs.tab.style.width = `${allWidth}px`
        this.$nextTick(() => {
            if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.tabsWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
            })
            } else {
            this.scroll.refresh()
            }
        })

        },
        changetab(index){
            this.activeIndex = index;
            this.$emit('changeScrollTable',index)
        }
    }
};
</script>