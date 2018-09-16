<template>
    <div class="title_wrap">
        <div class="left" v-show="leftInfo" @click="leftclick">
            <!-- 定位显示模块 -->
            <div v-show="leftInfo=='location'">
                {{position}}
                <i class="iconfont icon-jiantouyou"></i>
            </div>
            <!-- 返回模块 -->
            <div v-show="leftInfo=='back'">
                <i class="iconfont icon-fanhui"></i>
            </div>
        </div>
        <div class="center">
            {{centerInfo}}
        </div>
        <div class="right" v-show="rightInfo" @click="rightclick">
            <div v-show="rightInfo=='my'">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
            </div>
            <div v-show="rightInfo=='home'">
                <i class="iconfont icon-shouye"></i>
                <span>我的</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'myHeader',
    data(){
        return{
            position:'广州'
        }
    },
    props:['leftInfo','centerInfo','rightInfo'],
    methods:{
        leftclick:()=>{
            console.log(1111);
        },
        rightclick:()=>{
            console.log(2222);
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
    height: 44px;/*px*/
    width: 100%;
    position: fixed;
    top:0px;
    left: 0px;
    z-index: 100;
    background: #06c1ae;
    .left{
        min-width: 60px;/*px*/
        height: inherit;
        position: absolute;
        left: 0px;
        top: 0px;
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: .4rem;
            .iconfont{
                font-size: .6rem;
            }
        }
    }
    .center{
        color: #fff;
        font-size: 18px;/*px*/
        line-height: 44px;/*px*/
        text-align: center;
    }
    .right{
        width: 60px;/*px*/
        height: inherit;
        position: absolute;
        right: 0px;
        top: 0px;
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color:#fff;
            .iconfont{
                font-size: .6rem;
                margin-bottom: 1px;/*px*/
            }
        }
    }
}
</style>


