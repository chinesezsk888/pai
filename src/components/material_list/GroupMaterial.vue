<template>
  <swiper
    ref="mySwiper"
    :options="swiperOption"
    :class="type==0 ? 'swiper_video' : 'swiper_image'"
  >
    <swiper-slide
      v-for="item in list"
      :key="item.id"
    >
      <group-material-item :item="item" :type="type" />
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev">
      <i class="icon_swiper icon_swiper-prev" />
    </div>
    <div slot="button-next" class="swiper-button-next">
      <i class="icon_swiper icon_swiper-next" />
    </div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import GroupMaterialItem from '@/components/material/GroupMaterialItem.vue'
export default {
  name: 'GroupMaterial',
  components: {
    GroupMaterialItem,
    swiper,
    swiperSlide
  },
  props: {
    list: {
      default () {
        return []
      },
      type: Array
    },
    type: { // 0 视频组 1图片组
      default: '0',
      type: String
    },
    config: {
      default () {
        return {}
      },
      type: Object
    }
  },
  data () {
    let slidesPerView = this.config.slidesPerView || 7
    let spaceBetween = this.config.spaceBetween || 20
    let slidesOffsetBefore = this.config.slidesOffsetBefore || 214
    return {
      swiperOption: {
        slidesPerView: slidesPerView,
        spaceBetween: spaceBetween,
        slidesOffsetBefore: slidesOffsetBefore,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observer: true,
        observeParents: true,
        on: {
          slideChangeTransitionStart: () => {
            // let swiper = this.$refs.mySwiper.swiper
            // this.currentGroup = swiper.activeIndex + 1
          },
          click: (e) => {
            this.$store.dispatch({
              type: 'setAnimationPoint',
              point: {
                x: e.clientX,
                y: e.clientY
              }
            })
            if (this.type === '0') {
              this.$router.push({ name: 'GroupVideo', params: { id: '1', type: '0' } })
            } else {
              this.$router.push({ name: 'GroupImage', params: { id: '1', type: '1' } })
            }
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .swiper-button-prev{
    width:152px;
    height:138px;
    background:linear-gradient(-90deg,rgba(243,243,244,0) 0%,rgba(243,243,244,1) 100%);
    left: 0;
    top: 0;
    margin-top: 0;
  }
  .swiper-button-next{
    width:152px;
    height:138px;
    background:linear-gradient(90deg,rgba(243,243,244,0) 0%,rgba(243,243,244,1) 100%);
    right: 0;
    top: 0;
    margin-top: 0;
  }
  .icon_swiper{
    display: block;
    width:40px;
    height:40px;
    background-size:40px;
    position: absolute;
    top:49px;
    left:40px;
  }
  .swiper_image{
    .swiper-button-prev{
      height:184px;
    }
    .swiper-button-next{
      height:184px;
    }
    .icon_swiper{
      top:72px;
    }
  }
  .swiper-slide{
    width: 246px !important;
  }
  .icon_swiper-prev{
    background-image: url(~@/assets/icon_next_side_normal@2x.png);
    transform: rotate(180deg);
    left:40px;
  }
  .icon_swiper-next{
    background-image: url(~@/assets/icon_next_side_normal@2x.png);
    right:40px;
  }
</style>
