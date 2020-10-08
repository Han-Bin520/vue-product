<template>
    <div class="player-bottom">
        <div class="bottom-progress">
            <span>00:00</span>
            <div class="progress-bar">
                <div class="progress-line">
                    <div class="progress-dot"></div>
                </div>
            </div>
            <span>00:00</span>
        </div>
        <div class="bottom-controll">
            <div class="mode"></div>
            <div class="prev"></div>
            <div class="play" @click="play" ref="play"></div>
            <div class="next"></div>
            <div class="favorite"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PlayerBottom',
  methods: {
    ...mapActions([
      'setIsPlaying'
    ]),
    play () {
      this.setIsPlaying(!this.isPlaying)
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying'
    ])
  },
  watch: {
    isPlaying (newVaule, oldValue) {
      if (newVaule) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";
    @import "../../assets/css/variable";
.player-bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
    .bottom-progress{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .progress-bar{
            width: 100%;
            margin: 0 10px;
            height: 10px;
            background: #fff;
            position: relative;
            .progress-line{
                width: 50%;
                height: 100%;
                background: #525252;
                .progress-dot{
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #fff;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        span{
            @include font_size($font_samll);
            @include font_color();
        }
    }
    .bottom-controll{
        width: 80%;
        margin: 0 auto;
        padding: 50px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
            width: 84px;
            height: 84px;
        }
        .mode{
            @include bg_img('../../assets/images/loop');
        }
        .prev{
            @include bg_img('../../assets/images/prev');
        }
        .play{
            @include bg_img('../../assets/images/pause');
            &.active{
                @include bg_img('../../assets/images/play');
            }
        }
        .next{
            @include bg_img('../../assets/images/next');
        }
        .favorite{
            @include bg_img('../../assets/images/favorite');
        }
    }
</style>
