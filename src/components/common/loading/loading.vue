<template>
    <transition name="loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="loading-mask"
      :class="[defaultOption.customClass, { 'is-fullscreen': defaultOption.fullscreen }]">
      <div class="loading-spinner">
        <i class="spinner iconfont icon-load"></i>
        <p v-if="defaultOption.text" class="loading-text">{{ defaultOption.text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name:'loading',
  data() {
    return {
      visible: false,
      defaultOption:{
        text: '玩命加载中。。。',
        fullscreen: true,
        customClass: ""
      },
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    resetdefault(opt){
        for (let prop in this.defaultOption) {
          if (opt.hasOwnProperty(prop)) {
            let value = opt[prop];
            if (value !== undefined) {
              this.defaultOption[prop] = value;
            }
          }
        }
    },
    handleAfterLeave() {
      console.log('loading结束了')
    }
  }
};
</script>

<style lang="scss" scoped>
.loading-fade-enter,
.loading-fade-leave-active {
  opacity: 0;
}
.loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.loading-mask.is-fullscreen {
  position: fixed;
}
.loading-mask.is-fullscreen .loading-spinner .spinner {
  font-size: 40px;/*px*/
}
.loading-spinner .loading-text {
  color: #409eff;
  margin: 10px 0;/*px*/
  font-size: 16px;/*px*/
}
.loading-spinner .spinner {
  -webkit-animation: loading-rotate 1.5s infinite;
  animation: loading-rotate 1.5s infinite;
}
.loading-spinner{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
}
.loading-spinner .spinner{
  color: #409eff;
}
@-webkit-keyframes loading-rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading-rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>

