<style lang="scss" scoped>
.mask{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 90;
    background: rgba(0, 0, 0, 0.5);
    transition: all .2s ease-in-out;
    &.fade-enter-active{
        opacity: 1;
    }
    &.fade-enter,&.fade-leave-active{
        opacity: 0;
    }
}
</style>
<template>
    <transition name="fade">
        <div class="mask" v-show="$store.state.mask_flag" @click="dosomething" @touchmove.prevent></div>
    </transition>
</template>
<script>
export default {
    name:"mymask",
    data(){
        return{
            
        }
    },
    methods:{
        dosomething(){
            this.$store.commit("SET_MASK_FLAG",!this.$store.state.mask_flag);
            if(this.$store.state.navSide_flag){
                this.$store.commit("SET_NAVSIDE_FLAG",!this.$store.state.navSide_flag);
            }
        }
    }
}
</script>

