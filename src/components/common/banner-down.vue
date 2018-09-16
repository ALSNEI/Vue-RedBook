<template>
    <div class="banner-download">
        <img src="//ms0.meituan.net/touch/img/download_banner.png" class="img-box">
        <a href="{open_app_url}" class="call-app-btn" id="openApp" data-url="imeituan://www.meituan.com/home/"></a>
        <a class="download-btn" id="downloadApp"></a>
    </div>
</template>
<style lang="scss" scoped>
.banner-download{
    position: relative;
    border-bottom:1px solid #DDD8CE;
    font-size: 0px;
    img{
      width: 100%;
    }
    .call-app-btn{
      position: absolute;
      left: 17%;
      bottom: 13%;
      width: 31%;
      height: 34%;
      z-index: 1;
      border-radius: 40px;
    }
    .download-btn {
      position: absolute;
      right: 17%;
      bottom: 13%;
      width: 31%;
      height: 34%;
      z-index: 1;
      border-radius: 40px;
    }
  }
</style>
