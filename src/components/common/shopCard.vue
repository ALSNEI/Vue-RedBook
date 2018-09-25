<template>
    <div class="shopCardWrap">
        <div class="top">
            <img v-lazy="Item.avatar" alt="">
        </div>
        <div class="bottom">
            <p class="title">ssss</p>
            <p class="introduce">dddd</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'shopCard',
    props:['Item'],
}
</script>

<style lang="scss" scoped>
.shopCardWrap{
    width: 32%;
  border-radius: 10px;/*px*/
  background: white;
  overflow: hidden;
  margin-top:10px;/*px*/
  .top{
      img{
          width: 100%;
      }
  }
  .bottom{
      padding: 8px;/*px*/
      text-align: center;
      p{
          margin: 0px;
      }
      .title{
          font-size: 18px;/*px*/
          font-weight: bold;
          line-height: 18px;/*px*/
      }
      .introduce{
          font-size: 14px;/*px*/
          line-height: 14px;/*px*/
      }
  }
}
</style>
