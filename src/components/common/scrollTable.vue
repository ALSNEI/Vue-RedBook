<style lang="scss" scoped>
.scrollTabWrap{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    overflow: hidden;
    .tab_content{
      height: 100%;
      white-space: nowrap;
      background:#DDD8CE;
      .tab_item{
        display: inline-block;
        height: 100%;
        padding: 0px 10px;/*px*/
        box-sizing: border-box;
        font-size: 14px;/*px*/
        color: gray;
      }
    }
  }
</style>

<template>
    <div class="scrollTabWrap" ref="tabsWrapper">
        <div class="tab_content" ref="tab">
            <div class="tab_item" v-for="(item,index) in TabList" :key="index" ref="tabItem">
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
        return {
            // TabList:[
            //     {id:0,name:'推荐'},
            //     {id:1,name:'视频'},
            //     {id:2,name:'男士穿搭'},
            //     {id:3,name:'旅行'},
            //     {id:4,name:'美食'},
            //     {id:5,name:'健身'},
            //     {id:6,name:'影视'},
            //     {id:7,name:'读书'}
            // ]
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

        }
    }
};
</script>