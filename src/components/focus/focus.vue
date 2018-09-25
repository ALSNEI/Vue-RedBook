<template>
    <div class="focus_wrap">
        <focusitem v-for="(item,index) in focusdata" :key="index" :item="item"></focusitem>
    </div>
</template>

<script>
import focusitem from '@/components/common/focusItem';
    export default{
       name:'focus',
       props:['focusdata'],
       components:{
           focusitem
       }
   } 
</script>