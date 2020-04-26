<template>
  <div class="detail__page">
    <the-header />
    <div v-if="medioMsg" class="dp__top__box">
      <div class="dtb__center__box">
        <div class="dtb__msg">
          <medio-type :medio-info="medioMsg" :media-type="mediaType" />
          <medio-info :medio-info="medioMsg" :media-type="mediaType" />
        </div>
        <video-preview :medio-info="medioMsg" :media-type="mediaType" />
      </div>
    </div>
    <div v-if="mediaType === '0'">
      <relation-video :list="relationList" />
    </div>
    <div v-else-if="mediaType === '1'">
      <relation-image :list="relationList" />
    </div>
    <div v-else>
      <relation-audio :list="relationList" />
    </div>
    <the-page-footer />
  </div>
</template>

<script>
import { getdateilInfo } from '@/api/detail.js'
import MedioInfo from './components/MedioInfo'
import MedioType from './components/MedioType'
import VideoPreview from './components/VideoPreview'
import TheHeader from '../../components/TheHeader'
import RelationAudio from './components/RelationAudio'
import RelationImage from './components/RelationImage'
import RelationVideo from './components/RelationVideo'
import ThePageFooter from '@/components/ThePageFooter'
export default {
  name: 'Detail',
  components: {
    MedioInfo,
    MedioType,
    VideoPreview,
    TheHeader,
    RelationVideo,
    RelationAudio,
    RelationImage,
    ThePageFooter
  },
  props: {},
  data () {
    return {
      medioMsg: {},
      mediaType: '',
      relationList: []
    }
  },
  computed: {
  },
  watch: {},
  created () {
    this.getType()
    this.getdateilInfo(this.mediaType)
  },
  mounted () {
  },
  methods: {
    playHandle () { // todo 目前模拟打开新的详情页
      window.scroll(0, 0)
      window.location.reload()
    },
    getdateilInfo (type) {
      getdateilInfo(type, (res) => {
        this.medioMsg = res.data.data
        this.relationList = res.data.relationList
      })
    },
    getType () {
      this.mediaType = this.$route.params.type
    }
  }
}
</script>
<style lang="scss" scoped>
.detail__page{
  background-color: #F3F3F4;
  width: 100%;
  height: 100%;
  padding-top:100px;
  ::v-deep .header {
    margin-bottom: 0px;
    .nav_bar {
      font-size: 16px;
      height: 38px;
      .nav_bar_btn {
        .current::after {
          bottom:-8px;
          left:-8px;
        }
      }
    }
  }
  .dp__top__box {
     background-color: #fff;
     padding-bottom: 60px;
     display: flex;
     justify-content: center;
     .dtb__center__box {
      .dtb__msg {
        background-color: #fff;
        width: 100%;
        display: flex;
        justify-content: center;
      }
     }
  }
}
</style>
