<template>
  <div
    class="item"
    :class="{'show':isShow}"
    @click="goDetail"
    @mouseenter="showVideo"
    @mouseleave="closeVideo"
  >
    <img
      class="cover"
      :src="item.cover"
    >
    <video-player
      v-if="loadVideo"
      ref="videoPlayer"
      class="video__player"
      width:="360"
      :playsinline="true"
      :options="playerOptions"
      @ended="onPlayerEnded($event)"
    />
    <div class="label4k">
      <div class="left">RF</div>
      <div class="right">
        {{ item.resolution }}
      </div>
    </div>
    <div class="label">
      {{ item.label }}
    </div>
    <div class="duration">
      {{ formatDuraton(item.duration) }}
    </div>
    <base-item-footer :item="item" />
  </div>
</template>
<script>
import { formatDuraton } from '@/utils/index'
import BaseItemFooter from './BaseItemFooter'
export default {
  name: 'MaterialVideo',
  components: {
    BaseItemFooter
  },
  props: {
    item: {
      default () {
        return {
        }
      },
      type: Object
    }
  },
  data () {
    return {
      isShow: false,
      loadVideo: false,
      playerOptions: {
        bigPlayButton: false,
        autoplay: true,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        sources: [{
          type: '',
          src: this.item.url
        }],
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false
        }
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.isShow = true
    }, 200)
  },
  methods: {
    closeVideo () {
      this.loadVideo = false
    },
    showVideo () {
      this.loadVideo = true
    },
    formatDuraton (duration) {
      return formatDuraton(duration)
    },
    goDetail () {
      this.$router.push({ name: 'Detail', params: { type: '0' } })
    },
    onPlayerEnded () {
      this.$refs.videoPlayer.player.src(this.item.url)
    }
  }
}
</script>
<style lang="scss" scoped>
  .item{
    width:380px;
    height:214px;
    position: relative;
    border:1px solid rgba(223,223,223,1);
    transition: all 0.3s linear;
    opacity: 0;
    transform: scale(0.8);
    &.show{
      opacity: 1;
      transform: scale(1);
    }
    .cover{
      width:100%;
      height:100%;
    }
    &:active{
      border:2px solid rgba(173,0,0,1);
    }
    &:hover{
      .footer {
        display:block;
      }
    }
  }
  .video__player{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    z-index: 10;
    &.show{
      display: block;
    }
  }
  .label{
    width: 100%;
    color:#FFF;
    font-size:16px;
    font-weight:500;
    text-shadow:0px 0px 4px rgba(0,0,0,0.5);
    top:107px;
    text-align: center;
    position: absolute;
  }
  .duration{
    width:38px;
    height:16px;
    color:#FFF;
    font-size:12px;
    text-align: center;
    background:rgba(0,0,0,0.5);
    line-height: 16px;
    position: absolute;
    left:8px;
    bottom:10px;
    z-index: 120;
  }
  .label4k{
    position: absolute;
    left:8px;
    top:8px;
    width:46px;
    height:16px;
    color:#fff;
    font-size: 12px;
    display: flex;
    line-height: 16px;
    text-align: center;
    .left{
      width:50%;
      background:rgba(0,0,0,0.5);
    }
    .right{
      width:50%;
      background:linear-gradient(135deg,rgba(213,0,0,1) 0%,rgba(173,0,0,1) 100%);
    }
  }
</style>
