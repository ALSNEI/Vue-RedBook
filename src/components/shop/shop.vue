<template>
    <div class="shopWrap">
        <my-header></my-header>
        <scrollTable :TabList="TabList" class="scrollTableWrap" @changeScrollTable="changeTable"></scrollTable>

        <div class="shopCardList" v-if="recommendshow">
            <shopCard v-for="(item,index) in cardList" :key="index" :Item="item"></shopCard>
        </div>
        <div class="shopCircleList" v-if="recommendshow">
            <shopCircle v-for="(item,index) in circleList" :key="index" :Item="item"></shopCircle>
        </div>

        <div class="listWrap">
            <shopItem v-for="(item,index) in shoplist" :key="index" :Item="item"></shopItem>
        </div>
    </div>
</template>

<script>
import scrollTable from "@/components/common/scrollTable";
import shopItem from '@/components/common/shopItem';
import shopCard from '@/components/common/shopCard';
import shopCircle from '@/components/common/shopCircle';

export default {
    data(){
        return{
            shoplist:[],
            TabList: [
        { id: 0, name: "推荐" },
        { id: 1, name: "护肤" },
        { id: 2, name: "个人护理" },
        { id: 3, name: "彩妆" },
        { id: 4, name: "家居" },
        { id: 5, name: "更多" }
      ],
      cardList:[],
      circleList:[],
      recommendshow:true,
        }
    },
    components: {
        scrollTable,
        shopItem,
        shopCard,
        shopCircle
    },
    async created() {
        this.shoplist = await this.$ajax.Get(this.$ApiSetting.shoplistsUrl);
        console.log(this.shoplist);
        this.cardList = this.shoplist.slice(0,3);
        this.circleList = this.shoplist.slice(0,4);
    },
    methods:{
        changeTable(val){
            if(val){
                this.recommendshow = false;
            }else{
                this.recommendshow = true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.shopWrap{
    padding: 2.346667rem 0rem 1.2rem;
    .scrollTableWrap{
        width: 100%;
        position: fixed;
        top: 1.346667rem;
        left: 0px;
    }
    .shopCardList{
        padding: 0px 10px;/*px*/
        display: flex;
        justify-content: space-between;
    }
    .shopCircleList{
        margin: 10px 0px 0px;/*px*/
        padding: 10px;/*px*/
        display: flex;
        background: white;
        justify-content: space-between;
    }
    .listWrap{
        padding: 0px 10px;/*px*/
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>
