<style lang="scss" scoped>
.ListWrap {
  width: 49%;
  border-radius: 20px;/*px*/
  background: white;
  overflow: hidden;
  margin-top:10px;/*px*/
  .top {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .bottom {
    .introduce {
      font-size: 14px; /*px*/
      line-height: 18px; /*px*/
      font-weight: bold;
      padding: 0px 10px;/*px*/
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .mydetail {
        padding: 0px 10px 10px;/*px*/
        box-sizing: border-box;
        display: flex;
        .personal{
            width: 60%;
            display: flex;
            align-items: center;
            .avatar{
                width: 20px;/*px*/
                height: 20px;/*px*/
                border-radius: 100%;
                margin-right: .133333rem;
            }
        }
        .likeWrap{
            width: 40%;
            display: flex;
            align-items: center;
            img{
                width: 20px;/*px*/
                height: 20px;/*px*/
                margin-right: .133333rem;
            }
        }
    }
  }
}
</style>

<template>
    <div class="ListWrap">
        <div class="top">
            <img v-lazy="Item.avatar" alt="">
        </div>
        <div class="bottom">
            <p class="introduce">{{Item.content}}</p>
            <div class="mydetail">
                <div class="personal">
                    <img v-lazy="Item.imgurl" alt="" class="avatar">
                    <span class="nickName">sdfsd</span>
                </div>
                <div class="likeWrap">
                    <img v-lazy="Item.imgurl" alt="">
                    <span class="number">{{Item.like}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'shopItem',
  props: ["Item"],
};
</script>