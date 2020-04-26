<template>
  <div
    class="detail__medio__type"
    :class="mediaType | mediaClass"
  >
    <div class="media__box">
      <media-video
        v-if="mediaType === '0' && medioInfo.url && medioInfo.cover"
        :sources-src="medioInfo.url"
        :poster="medioInfo.cover"
        :video-duration="medioInfo.duration"
      />
      <audio
        v-if="mediaType === '2'"
        id="mediaTypeTop23"
        autobuffer=""
        autoloop=""
        loop="loop"
        controls="controls"
        oncontextmenu="return false"
        controlslist="nodownload"
        :src="medioInfo.url"
      />
      <img
        v-if="mediaType === '1'"
        ref="detailImg"
        preview="1"
        :large="medioInfo.urlWaterMark"
      >
    </div>
    <div class="media__label__box">
      <ul>
        <li
          v-for="(item, index) in medioInfo.label"
          :key="'label'+index"
          class="normal__label__li label__li"
        >
          {{ item }}
        </li>
        <li
          v-for="(item, index) in medioInfo.groupLabel"
          :key="'groupLabel'+index"
          class="group__label__li label__li"
          @click="goGroupDetail"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MediaVideo from './MediaVideo'
export default {
  name: 'MedioType',
  components: {
    MediaVideo
  },
  filters: {
    mediaClass (type) {
      if (type === '0') {
        return 'media__video'
      } else if (type === '1') {
        return 'media__img'
      } else {
        return 'media__audio'
      }
    }
  },
  props: {
    medioInfo: {
      default () {
        return {}
      },
      type: Object
    },
    mediaType: {
      default () {
        return {}
      },
      type: String
    }
  },
  mounted () {
  },
  updated () {
    if (this.$refs.detailImg && this.medioInfo.url) {
      let bgurl = this.medioInfo.url
      this.$refs.detailImg.style.backgroundImage = 'url(' + bgurl + ')'
      this.$refs.detailImg.style.backgroundSize = 'cover'
    }
  },
  methods: {
    goGroupDetail () {
      this.$router.push('/groupvideo/0')
    }
  }
}
</script>
<style lang="scss" scoped>
.detail__medio__type{
  margin-top: 39px;
  &.media__img {
    width: 536px;
    margin-right: 132px;
    @media screen and (max-width: 1180px) {
      width: 329px;
    }
    .media__box {
      margin-bottom: 20px;
      height: 450px;
      width: 100%;
      @media screen and (max-width: 1180px) {
        height: 295px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .media__label__box {
      ul{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  &.media__video {
    width: 640px;
    margin-right: 60px;
    @media screen and (max-width: 1180px) {
      width: 337px;
    }
    .media__box {
      height: 360px;
      width: 100%;
      margin-bottom: 20px;
      @media screen and (max-width: 1180px) {
        height: 190px;
      }
      video {
        width: 100%;
        height: 100%;
      }
    }
  }
  &.media__audio {
    width: 640px;
    margin-right: 60px;
    @media screen and (max-width: 1180px) {
      width: 337px;
    }
    .media__box {
      width: 100%;
      height: 192px;
      margin-top: 41px;
      margin-bottom: 41px;
      background-color: #ccc;
      display: flex;
      flex-flow: column;
      justify-content: center;
      @media screen and (max-width: 1180px) {
        height: 190px;
      }
      audio {
        width: 100%;
      }
    }
  }
  .media__label__box {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .label__li {
        padding: 1px 7px;
        height:18px;
        border-radius:2px;
        border:1px solid rgba(102,102,102,1);
        text-align: center;
        margin-right: 12px;
        box-sizing: content-box;
        font-size:12px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height: 20px;
        margin-bottom: 10px;
      }
      .group__label__li {
        box-shadow: 2px 2px 2px #888888;
        cursor: pointer;
      }
    }
  }
}
</style>
