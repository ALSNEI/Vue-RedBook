<style lang="scss" scoped>
.find_wrap{
    width:100%;
    .cardList {
        padding: 0px 10px 10px; /*px*/
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>

<template>
    <div class="find_wrap">
        <div class="cardList">
            <card :Item="item" v-for="(item,index) in finddata" :key="index"></card>
        </div>
    </div>
</template>

<script>
import card from "@/components/common/card";
   export default{
       name:'find',
       props:['finddata'],
       components: {
           card,
       }
   } 
</script>