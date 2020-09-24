<template>
    <div class="detail">
        <SubHeader :title="playlist.name"></SubHeader>
        <DetailTop :path="playlist.coverImgUrl" ref="top"></DetailTop>
        <div class="bottom">
            <ScrollView ref="scrollview">
                <DetailBottom :playlist="playlist.tracks"></DetailBottom>
            </ScrollView>
        </div>
    </div>
</template>

<script>
import SubHeader from '../components/Detail/DetailHeader'
import DetailTop from '../components/Detail/DetailTop'
import DetailBottom from '../components/Detail/DetailBottom'
import { getPlayList, getAlbum } from '../api/index'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Detail',
  components: {
    SubHeader,
    DetailTop,
    DetailBottom,
    ScrollView
  },
  data: function () {
    return {
      playlist: {}
    }
  },
  created () {
    // 根据路由的类型，来判断用的哪个路由地址
    // console.log(this.$route.params.type)
    if (this.$route.params.type === 'personalized') {
      getPlayList({ id: this.$route.params.id })
        .then((data) => {
          this.playlist = data.playlist
        })
        .catch(function (err) {
          console.log(err)
        })
    } else if (this.$route.params.type === 'albums') {
      getAlbum({ id: this.$route.params.id })
        .then((data) => {
          this.playlist = {
            name: data.album.name,
            coverImgUrl: data.album.picUrl,
            tracks: data.songs
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  // 在创建期间获取滚动DOM的偏移位
  mounted () {
    // 获取组件内的元素高度
    const defaultHeight = this.$refs.top.$el.offsetHeight
    this.$refs.scrollview.scrolling((offsetY) => {
      if (offsetY < 0) {
        /* const scale = 20 * Math.abs(offsetY) / defaultHeight
        this.$refs.top.$el.style.filter = `blur(${scale}px)` */
        const scale = Math.abs(offsetY) / defaultHeight
        this.$refs.top.changeMask(scale)
      } else {
        const scale = 1 + offsetY / defaultHeight
        this.$refs.top.$el.style.transform = `scale(${scale})`
      }
    })
  }
}
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";
    .detail{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        @include bg_sub_color();
    }
    .bottom{
        position: fixed;
        top:500px;
        bottom: 0;
        right: 0;
        left: 0;
    }

</style>
