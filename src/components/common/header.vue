<template>
    <header class="title_wrap">
        <!-- 更多模块 -->
        <div class="left">
            <span class="left_side" @click="handleLeftSide">
                <img src="../../assets/three_line.png" >
            </span>
        </div>
        
        <div class="center">
            <div class="center_title" v-show="centerInfo">
                {{centerInfo}}
            </div>
            <slot v-if="!centerInfo">
                <router-link tag="div" to="/search" class="home_search">
                    <i class="iconfont icon-sousuo"></i>
                    <span>{{search_placeholder}}</span>
                </router-link>
            </slot>
        </div>
        <div class="right" v-show="rightInfo" @click="rightclick">
            <div v-show="rightInfo=='my'">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
            </div>
            <router-link tag="div" to="/" v-show="rightInfo=='home'">
                <i class="iconfont icon-shouye"></i>
                <span>首页</span>
            </router-link>
            <div v-show="rightInfo=='nav'">
                <i class="iconfont icon-shoucang"></i>
                <span>导航</span>
                <ul class="nav_list">
                    <li>
                        <i class="iconfont icon-shouye"></i>
                        <span>首页</span>
                    </li>
                    <li>
                        <i class="iconfont icon-wode"></i>
                        <span>我的</span>
                    </li>
                    <li>
                        <i class="iconfont icon-sousuo"></i>
                        <span>搜索</span>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name:'myHeader',
    props:['centerInfo','rightInfo'],
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
    data(){
        return{
            search_placeholder:'输入商家/品类/商圈',
        }
    },
    methods:{
        rightclick(){
            console.log(this.rightInfo);
        },
        handleLeftSide(){
            this.$store.commit("SET_NAVSIDE_FLAG",!this.$store.state.navSide_flag);
            this.$store.commit("SET_MASK_FLAG",!this.$store.state.mask_flag);
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
.title_wrap{
    height: 1.346667rem;
    width: 100%;
    position: relative;
    background: white;
    display: flex;
    align-items: center;
    .left{
        width: 1.346667rem;
        height: inherit;
        z-index: 20;
        display: table;
        text-align: center;
        .left_side{
            display: table-cell;
            vertical-align: middle;
        }
        .left_side img{
            width: 40%;
        }
    }
    .center{
        color: #fff;
        font-size: 18px;/*px*/
        flex:1;
        .center_title{
            text-align: center;
        }
        .home_search{
            width: 100%;
            height: .853333rem;
            display: flex;
            align-items: center;
            background: rgba(0,0,0,.15);
            border-radius: 6px;/*px*/
            i{
                font-size: 16px;/*px*/
                padding:0px 8px;/*px*/
            }
            span{
                font-size: 13px;/*px*/
                color: #68dbce;
            }
        }
    }
    .right{
        height: inherit;
        z-index: 20;
        padding: 0px 10px;/*px*/
        div{
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color:#fff;
            .iconfont{
                font-size: 20px;/*px*/
                margin-bottom: 1px;/*px*/
            }
        }
    }
}
</style>


