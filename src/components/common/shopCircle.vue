<template>
    <div class="shopCircleWrap">
        <img v-lazy="Item.avatar" alt="">
        <div class="center">ssss</div>
    </div>
</template>

<script>
export default {
    name:'shopCircle',
    props:['Item'],
}
</script>

<style lang="scss" scoped>
.shopCircleWrap{
    width: 24%;
    height: 100%;
    position: relative;
    img{
        width: 100%;
        border-radius: 100%;
    }
    .center{
        position: absolute;
        top: 0%;
        left: 0%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
}
</style>
