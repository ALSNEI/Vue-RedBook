<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home_wrap {
}
</style>


<template>
  <div class="home_wrap">
    <nav-side></nav-side>
    <myMask></myMask>
    <router-view></router-view>
    <designFooter></designFooter>
  </div>
</template>

<script>
import designFooter from "@/components/common/myfooter";

export default {
  name: "home",
  data() {
    return {
    }
  },
  components: {
    designFooter
  },
  async created() {
    
  },
  methods: {}
};
</script>
