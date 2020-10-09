<template>
    <transition
            :css="false"
            @enter="enter"
            @leave="leave">
        <div class="list-player" v-show="isListPlayer">
            <div class="player-wrapper">
                <div class="player-top">
                    <div class="top-left">
                        <div class="mode loop" @click="mode" ref="mode"></div>
                        <p v-if="this.modeType === 0">播放顺序</p>
                        <p v-else-if="this.modeType === 1">单曲播放</p>
                        <p v-else>随机播放</p>
                    </div>
                    <div class="top-right">
                        <div class="del"></div>
                    </div>
                </div>
                <div class="player-middle">
                    <ScrollView>
                        <ul>
                            <li class="item">
                                <div class="item-left">
                                    <div class="item-play" @click.stop="play" ref="play"></div>
                                    <p>yan yuan</p>
                                </div>
                                <div class="item-right">
                                    <div class="item-favorite"></div>
                                    <div class="item-del"></div>
                                </div>
                            </li>
                        </ul>
                    </ScrollView>
                </div>
                <div class="player-bottom">
                    <p @click.stop="hidden">关闭</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import ScrollView from '../ScrollView'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
import { mapActions, mapGetters } from 'vuex'
import modeType from '../../store/modeType'

export default {
  name: 'ListPlayer',
  components: {
    ScrollView
  },
  methods: {
    ...mapActions([
      'setIsPlaying',
      'setModeType',
      'setListPlayer'
    ]),
    hidden () {
      this.setListPlayer(false)
    },
    enter (el, done) {
      Velocity(el, 'transition.perspectiveUpIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.perspectiveDownOut', { duration: 500 }, function () {
        done()
      })
    },
    play () {
      this.setIsPlaying(!this.isPlaying)
    },
    mode () {
      if (this.modeType === modeType.loop) {
        this.setModeType(modeType.one)
      } else if (this.modeType === modeType.one) {
        this.setModeType(modeType.random)
      } else if (this.modeType === modeType.random) {
        this.setModeType(modeType.loop)
      }
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'modeType',
      'isListPlayer'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },
    modeType (newVaule, oldValue) {
      if (newVaule === modeType.loop) {
        this.$refs.mode.classList.remove('random')
        this.$refs.mode.classList.add('loop')
      } else if (newVaule === modeType.one) {
        this.$refs.mode.classList.remove('loop')
        this.$refs.mode.classList.add('one')
      } else if (newVaule === modeType.random) {
        this.$refs.mode.classList.remove('one')
        this.$refs.mode.classList.add('random')
      }
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../../assets/css/variable";
    @import "../../assets/css/mixin";
    .list-player{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        @include bg_sub_color();
        .player-wrapper{
           .player-top{
               width: 100%;
               display: flex;
               justify-content: space-between;
               align-items: center;
               .top-left{
                   display: flex;
                   align-items: center;
                   padding-left: 20px;
                   .mode{
                       width: 56px;
                       height: 56px;
                       margin-right: 20px;
                       &.loop{
                           @include bg_img('../../assets/images/small_loop')
                       }
                       &.one{
                           @include bg_img('../../assets/images/small_one')
                       }
                       &.random{
                           @include bg_img('../../assets/images/small_shuffle')
                       }
                   }
                   p{
                       @include font_size($font_medium_s);
                       @include font_color();
                   }
               }
               .top-right{
                   .del{
                       width: 56px;
                       height: 56px;
                       @include bg_img('../../assets/images/small_del');
                   }
               }
           }
           .player-middle{
               .item{
                   border-top: 1px solid #ccc;
                   height: 100px;
                   display: flex;
                   justify-content: space-between;
                   align-items: center;
                   padding: 0 20px;
                   box-sizing: border-box;
                   .item-left{
                       display: flex;
                       align-items: center;
                       .item-play{
                           width: 56px;
                           height: 56px;
                           margin-right: 20px;
                           @include bg_img('../../assets/images/small_pause');
                           &.active{
                               @include bg_img('../../assets/images/small_play');
                           }
                       }
                       p{
                           @include font_color();
                           @include font_size($font_medium_s);
                       }
                   }
                   .item-right{
                       display: flex;
                       align-content: center;
                       .item-favorite{
                           width: 56px;
                           height: 56px;
                           @include bg_img('../../assets/images/favorite')
                       }
                       .item-del{
                           width: 50px;
                           height: 50px;
                           margin-left: 20px;
                           @include bg_img('../../assets/images/small_close')
                       }
                   }
               }
            }
           .player-bottom{
               width: 100%;
               height: 100px;
               line-height: 100px;
               @include bg_color();
               p{
                   text-align: center;
                   @include font_size($font_medium);
                   color: #fafafa;
               }
           }
        }
    }
</style>
