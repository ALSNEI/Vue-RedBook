<template>
  <div class="home_wrap">
    <my-header centerInfo="sssS" leftInfo="广州">
      <slot name="location"></slot>
    </my-header>
    <div class="content">
      <router-link tag="a" to="/myOwn">go myOwn</router-link>
      <div>{{msg}}</div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to home'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content{
    position: absolute;
    top:44px;/*px*/
  }
</style>

