<style lang="scss" scoped>
.neaby_wrap{
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
    <div class="neaby_wrap">
        <div class="cardList">
            <card :Item="item" v-for="(item,index) in nearbydata" :key="index"></card>
        </div>
    </div>
</template>

<script>
import card from "@/components/common/card";
   export default{
       name:'nearby',
       props:['nearbydata'],
       components: {
           card,
       }
   } 
</script>