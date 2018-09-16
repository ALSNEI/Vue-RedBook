<style lang="scss" scoped>
.side{
    position: fixed;
    top: 0px;
    left: 0;
    width: 75%;
    background-color: white;
    height: 100%;
    padding: 0px 30px;/*px*/
    box-sizing: border-box;
    z-index: 200;
    transition: all .3s linear;
    h1{
        height: 2.2rem;
        line-height: 2.2rem;
        margin:0px;
        font-size: 30px;/*px*/
        font-weight: 500;
    }
    .content{
        height: 100%;
        position: absolute;
        top:0px;
        margin-top:2.2rem;
        overflow: scroll;
        ul{
            height: 200px;
            list-style: none;
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
        <div class="side" v-show="$store.state.navSide_flag">
            <h1>更多</h1>
            <div class="content">
                <ul class="more_my">
                    <li v-for="(item,index) in moreMy" :key="index">
                        <img :src="item.icon" alt="">
                        {{item.word}}
                    </li>
                </ul>
                <ul class="more_shop">
                    <li v-for="(item,index) in moreShop" :key="index">
                        <img :src="item.icon" alt="">
                        {{item.word}}
                    </li>
                </ul>
                <ul class="more_list">
                    <li v-for="(item,index) in moreList" :key="index">
                        <img :src="item.icon" alt="">
                        {{item.word}}
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
            moreMy:[
                {
                    icon:"",
                    word:"我的关注"
                },
                {
                    icon:"",
                    word:"我的收藏"
                },
                {
                    icon:"",
                    word:"我的草稿"
                }
            ],
            moreShop:[
                {
                    icon:"",
                    word:"购物车"
                },
                {
                    icon:"",
                    word:"订单"
                },
                {
                    icon:"",
                    word:"薯卷"
                },
                {
                    icon:"",
                    word:"心愿单"
                },
                {
                    icon:"",
                    word:"小红卡会员"
                }
            ],
            moreList:[
                {
                    icon:"",
                    word:"客服中心"
                },
                {
                    icon:"",
                    word:"设置"
                }
            ],
        }
    },
}
</script>

