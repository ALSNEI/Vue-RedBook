<style lang="scss" scoped>
.side{
    position: fixed;
    top: 0px;
    left: 0;
    width: 75%;
    background-color: white;
    height: 100%;
    z-index: 200;
    transition: all .3s linear;
    h1{
        width: 100%;
        height: 2.2rem;
        line-height: 2.2rem;
        margin:0px 0px 0px .8rem;
        font-size: 30px;/*px*/
        font-weight: 500;
        position: absolute;
        top: 0px;
        z-index: 1000000000;
    }
    .wrapper{
        height: calc(100% - 2.2rem);
        width: 100%;
        position: relative;
        top:2.2rem;
        left: 0%;
        overflow: hidden;
        .content{
            width: 100%;
            height: auto;
            padding: 0 .8rem;
            box-sizing: border-box;
            overflow: scroll;
            ul{
                width: 100%;
                height: auto;
                list-style: none;
                padding: 0%;
                margin: 0%;
                border-bottom: 1px solid lightgray;/*px*/
                li {
                    font-size: 14px;/*px*/
                    margin: .6rem 0rem;
                    .iconfont{
                        margin-right: .133333rem;
                    }
                }
            }
            ul:last-child{
                border: none;
            }
        }
    }
    &.leftSlid-enter-active{
        transform:translateX(0%);
    }
    &.leftSlid-enter,&.leftSlid-leave-active{
        transform:translateX(-100%); 
    }
}
</style>

<template>
    <transition name="leftSlid">
        <div class="side" v-show="$store.state.navSide_flag" >
            <h1>更多</h1>
            <div class="wrapper" ref="slide_content">
                <div class="content">
                    <ul class="more_my">
                        <li v-for="(item,index) in moreMy" :key="index">
                            <i class="iconfont" v-bind:class="item.icon"></i>
                            {{item.word}}
                        </li>
                    </ul>
                    <ul class="more_shop">
                        <li v-for="(item,index) in moreShop" :key="index">
                            <i class="iconfont" v-bind:class="item.icon"></i>
                            {{item.word}}
                        </li>
                    </ul>
                    <ul class="more_list">
                        <li v-for="(item,index) in moreList" :key="index">
                            <i class="iconfont" v-bind:class="item.icon"></i>
                            {{item.word}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            moreMy:[
                {
                    icon:"icon-faxian",
                    word:"我的关注"
                },
                {
                    icon:"icon-faxian",
                    word:"我的收藏"
                },
                {
                    icon:"icon-faxian",
                    word:"我的草稿"
                }
            ],
            moreShop:[
                {
                    icon:"icon-faxian",
                    word:"购物车"
                },
                {
                    icon:"icon-faxian",
                    word:"订单"
                },
                {
                    icon:"icon-faxian",
                    word:"薯卷"
                },
                {
                    icon:"icon-faxian",
                    word:"心愿单"
                },
                {
                    icon:"icon-faxian",
                    word:"小红卡会员"
                }
            ],
            moreList:[
                {
                    icon:"icon-faxian",
                    word:"客服中心"
                },
                {
                    icon:"icon-faxian",
                    word:"设置"
                }
            ],
        }
    },
    methods:{
        initScroll(){
            this.slideScroll = new BScroll(this.$refs.slide_content, {//options
                probeType:3,
                click:true,
                momentum:true, //当快速滑动时是否开启滑动惯性
                bounce:true, //是否启用回弹动画效果
                HWCompositing:true, //是否启用硬件加速
                useTransition:true,  // 防止iphone微信滑动卡顿
            }),
            this.slideScroll.on('scroll',(pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initScroll();	
        })
    },
}
</script>

