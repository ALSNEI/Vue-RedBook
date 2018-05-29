<template>
    <div class="myOwn_wrap">
        <my-header centerInfo="sssS">
            <slot name="back"></slot>
        </my-header>
        <h1>sssss</h1>
        <router-link tag="a" to="/">back to home</router-link>
        <div>{{msg}}</div>
    </div>
</template>
<style lang="scss" scoped>
.myOwn_wrap{
    h1{
        color:red;
    }
}
</style>
<script>
export default {
  name: 'myOwn',
  data () {
    return {
      msg: 'Welcome to MyOwn'
    }
  }
}
</script>