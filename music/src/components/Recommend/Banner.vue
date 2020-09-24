<template>
    <swiper :options="swiperOptions" class="banner" v-if="banners.length > 0">
        <swiper-slide v-for="value in banners" :key="value.bannerId" class="item">
            <a :href="value.url">
                <img :src="value.pic" alt="">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  name: 'Banner',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }
    }
  }
}
</script>

<style lang="scss">
    @import "../../assets/css/mixin";
    .banner{
        .item{
            img{
                width: 100%;
                height: 300px;
            }
        }
        .swiper-pagination-bullet{
            width: 16px;
            height: 16px;
            background: #fff;
            opacity: 1;
        }
        .swiper-pagination-bullet-active{
            @include bg_color();
        }
    }
</style>
