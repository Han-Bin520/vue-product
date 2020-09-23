<template>
    <div class="header" @click="changTheme">
        <div class="header-left"></div>
        <p class="header-title">酷我音乐</p>
        <div class="header-right"></div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    changTheme () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../assets/css/variable";
    @import "../assets/css/mixin";
    .header{
        width: 100%;
        height: 100px;
        @include bg_color();
        display: flex;
        justify-content: space-between;
        /*position: relative;*/
        /*z-index: 999;*/
        .header-left{
            width: 50px;
            height: 50px;
            margin-left: 20px;
            margin-top:20px;
            @include bg_img('../assets/images/logo');
        }
        .header-right{
            margin-right: 20px;
            width: 40px;
            height: 40px;
            margin-top: 30px;
            @include bg_img('../assets/images/me');
        }
        .header-title{
            text-align: center;
            line-height: 100px;
            color: #fff;
            font-weight: bold;
            @include font_size($font_medium);
        }
    }
</style>
