<style lang="scss" scoped>
.footer_wrapper{
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    width: 100%;
    height: 1.2rem;
    background-color: white;
    &.addborder{
        box-shadow: 0rem 0rem 0.4rem lightgrey;
    }
    div{
        flex: 1;
        height: 100%;
        line-height: 1.2rem;
        text-align: center;
        color:lightgrey;
        font-size: 18px;/*px*/
        &.active{
            color:black;
            font-size: 20px;/*px*/
            font-weight: bold;
        }
    }
}
</style>

<template>
    <footer class="footer_wrapper" @click="jump" :class="{'addborder':nothome}">
        <div class="home" :class="{'active':actived==0}" :data-index="0">首页</div>
        <div class="shop" :class="{'active':actived==1}" :data-index="1">商城</div>
        <div class="add" :class="{'active':actived==2}" :data-index="2"> + </div>
        <div class="note" :class="{'active':actived==3}" :data-index="3">消息</div>
        <div class="my" :class="{'active':actived==4}" :data-index="4">我</div>
    </footer>
</template>
<script>
export default {
    name:'myfooter',
    data(){
        return {
            actived:0,
            nothome:false,
        }
    },
    methods:{
        jump(e){
            this.actived = e.target.getAttribute("data-index");
            if(this.actived == 0){
                this.nothome = false;
            }else{
                this.nothome = true;
            }
        }
    }
}
</script>

