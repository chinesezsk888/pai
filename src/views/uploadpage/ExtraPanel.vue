<template>
  <div class="extra_panel">
    <div v-if="type==1||type==3" class="group_title">组系列名</div>
    <div v-else class="infor">
      <div>
        类型：视频<span class="block" />
        格式：MOV<span class="block" />
        尺寸：4K<span class="block" />
        大小：24.45M<span class="block" />
        时长：1:30:40
      </div>
      <div>
        其他信息》
      </div>
    </div>
    <template v-if="type==0">
      <div class="content content-siglevideo">
        <img class="poster" src="../../assets/demo/demo26.jpg">
        <img class="poster" src="../../assets/demo/demo26.jpg">
        <img class="poster" src="../../assets/demo/demo26.jpg">
        <img class="poster" src="../../assets/demo/demo26.jpg">
        <img class="poster" src="../../assets/demo/demo26.jpg">
        <img class="poster" src="../../assets/demo/demo26.jpg">
      </div>
      <div class="extra_btn">
        <div>选择封面</div>
        <div>设为封面</div>
      </div>
    </template>
    <template v-if="type==1">
      <div class="content content-multiplevideo">
        <swiper
          ref="mySwiper"
          :options="swiperOption"
        >
          <swiper-slide>
            <img class="poster" src="../../assets/demo/demo26.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="poster" src="../../assets/demo/demo26.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="poster" src="../../assets/demo/demo26.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="poster" src="../../assets/demo/demo26.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="poster" src="../../assets/demo/demo26.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="poster" src="../../assets/demo/demo26.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="poster" src="../../assets/demo/demo26.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="poster" src="../../assets/demo/demo26.jpg">
          </swiper-slide>
          <div slot="button-prev" class="swiper-button-prev">
            <i class="icon_swiper icon_swiper-prev" />
          </div>
          <div slot="button-next" class="swiper-button-next">
            <i class="icon_swiper icon_swiper-next" />
          </div>
        </swiper>
      </div>
      <div v-if="type==1" class="extra_btn">
        <div>选择封面</div>
        <div>设为系列封面</div>
      </div>
    </template>
    <div v-if="type==3">
      <base-audio :list="audioList" class="audio_array" />
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BaseAudio from '@/components/material/BaseAudio'
export default {
  name: 'ExtraPanel',
  components: {
    swiper,
    swiperSlide,
    BaseAudio
  },
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    },
    type: {
      type: Number,
      default: 1// 0视频单素材  1视频多素材 2音频单素材 3音频多素材
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 12,
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
          click: () => {

          }
        }
      },
      audioList: [
        {
          'id': 1004,
          'url': 'http://thepaper-mam-out.oss-cn-hangzhou.aliyuncs.com/audio/f6cb9b6de8c44405bb5b9f092e075b10/mp364/20190507145238e8e64389e6b04d158976e56c4ae5ca84ceb163daf5a0a67036bbe4338ea975b1.mp3',
          'duration': 165,
          'title': '美丽中国音频',
          'author': '王伟'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .extra_panel{
    width:1060px;
    height:235px;
    background:rgba(255,255,255,1);
    margin-top:20px;
    padding:32px 20px 20px;
  }
  .title{
    font-size:20px;
    margin-bottom:20px;
  }
  .content{
    height:90px;
    margin-bottom:20px;
  }
  .content-siglevideo{
    display: flex;
    justify-content: space-between;
  }
  .poster{
    width:160px;
    height:90px;
    &.on{
      border:1px solid rgba(226,6,19,1);
    }
  }
  .extra_btn{
    font-size:12px;
    color:#000;
    display: flex;
    width: 200px;
    margin: 0 auto;
    justify-content: space-around;
    &>div{
      cursor: pointer;
      padding:3px 12px;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
    }
  }
  .group_title{
    margin-bottom:20px;
  }
  .infor{
    display:flex;
    justify-content: space-between;
    font-size:14px;
    border-bottom: 1px solid rgba(216,216,216,1);
    padding-bottom:20px;
    margin-bottom:20px;
    .block{
      padding: 0 10px;
    }
    & div:first-child{
      color:#333;
    }
    & div:last-child{
      color:#666;
      cursor: pointer;
    }
  }

  .swiper-button-prev{
    width:80px;
    height:91px;
    background:linear-gradient(-90deg,rgba(243,243,244,0) 0%,rgba(243,243,244,1) 100%);
    left: 0;
    top: 0;
    margin-top: 0;
  }
  .swiper-button-next{
    width:80px;
    height:91px;
    background:linear-gradient(90deg,rgba(255,252,252,0) 0%,rgba(255,255,255,1) 100%);
    right: 0;
    top: 0;
    margin-top: 0;
  }
  .icon_swiper{
    display: block;
    width:24px;
    height:24px;
    background-size:24px;
    position: absolute;
    top: 32px;
    left:40px;
  }
  .icon_swiper-prev{
    background-image: url(~@/assets/icon_next_side_normal@2x.png);
    transform: rotate(180deg);
    left: 20px;
  }
  .icon_swiper-next{
    background-image: url(~@/assets/icon_next_side_normal@2x.png);
    right:20px;
  }
</style>
