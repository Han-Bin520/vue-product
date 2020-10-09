<template>
    <ul class="detail-bottom">
        <li class="bottom-top">
            <div class="bottom-icon"></div>
            <div class="bottom-title">播放全部</div>
        </li>
        <li v-for="value in playlist" :key="value.id" class="item" @click="selectMusic(value.id)">
            <h3>{{value.name}}</h3>
            <p>{{value.al.name}} - {{value.ar[0].name}}</p>
        </li>
    </ul>
</template>

<script>
// 导入mapActions辅助函数，将store中的actions映射到局部计算属性
import { mapActions } from 'vuex'
export default {
  name: 'DetailBottom',
  props: {
    playlist: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer',
      'setSongDetail'
    ]),
    selectMusic (id) {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
      this.setSongDetail([id])
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";
    @import "../../assets/css/variable";
    .detail-bottom{
        width: 100%;
        li{
            width: 100%;
            height: 110px;
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            @include bg_sub_color();
        }
        .bottom-top{
            display: flex;
            align-items: center;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            .bottom-icon{
                width: 60px;
                height: 60px;
                @include bg_img('../../assets/images/small_play');
            }
            .bottom-title{
                @include font_color();
                @include font_size($font_large);
                margin-left: 20px;
            }
        }
        .item{
            h3{
                @include font_color();
                @include font_size($font_medium);
                @include clamp(1);
            }
            p{
                @include font_color();
                @include font_size($font_samll);
                margin-top: 10px;
                @include clamp(1);
                opacity: 0.8;
            }
        }
    }
</style>
