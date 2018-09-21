<template>
    <div class="shopWrap">
        <my-header></my-header>
        <scrollTable :TabList="TabList"></scrollTable>
        <div class="ListWrap">
            <shopItem v-for="(item,index) in shoplist" :key="index" :Item="item"></shopItem>
        </div>
    </div>
</template>

<script>
import scrollTable from "@/components/common/scrollTable";
import shopItem from '@/components/common/shopItem';

export default {
    data(){
        return{
            shoplist:[],
            TabList: [
        { id: 0, name: "推荐" },
        { id: 1, name: "视频" },
        { id: 2, name: "男士穿搭" },
        { id: 3, name: "旅行" },
        { id: 4, name: "美食" },
        { id: 5, name: "健身" },
        { id: 6, name: "影视" },
        { id: 7, name: "读书" }
      ]
        }
    },
    components: {
        scrollTable,
        shopItem
    },
    async created() {
        this.shoplist = await this.$ajax.Get(this.$ApiSetting.shoplistsUrl);
        console.log(this.shoplist);
    },
}
</script>

<style lang="scss" scoped>
.shopWrap{
    padding: 1.346667rem 0rem 1.2rem;
}
</style>
