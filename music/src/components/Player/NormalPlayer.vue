<template>
    <transition
       :css="false"
       @enter="enter"
       @leave="leave">
        <!--<div class="normal-player" v-show="this.$store.getters.isFullScreen">-->
        <div class="normal-player" v-show="this.isFullScreen">
            <div class="player-wrapper">
                <PlayerHeader></PlayerHeader>
                <PlayerMiddle></PlayerMiddle>
                <PlayerBottom></PlayerBottom>
            </div>
            <div class="player-bg">
                <img :src="currentSong.picUrl" alt="">
            </div>
        </div>
    </transition>
</template>

<script>
import PlayerHeader from './PlayerHeader'
import PlayerMiddle from './PlayerMiddle'
import PlayerBottom from './PlayerBottom'
// 导入mapGetters辅助函数，将store中的getter映射到局部计算属性
import { mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'NormalPlayer',
  components: {
    PlayerHeader,
    PlayerMiddle,
    PlayerBottom
  },
  computed: {
    ...mapGetters([
      'isFullScreen',
      'currentSong'
    ])
  },
  methods: {
    enter (el, done) {
      Velocity(el, 'transition.shrinkIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.shrinkOut', { duration: 500 }, function () {
        done()
      })
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";
    @import "../../assets/css/variable";
    .normal-player{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @include bg_sub_color();
        background: #ccc;
        .player-wrapper{
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 999;
        }
        .player-bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            img{
                height: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                filter: blur(20px);
            }
        }
    }
</style>
