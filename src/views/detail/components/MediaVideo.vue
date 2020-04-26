<template>
  <div class="video__box">
    <video-player
      ref="videoPlayer"
      class="video__player"
      :playsinline="true"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @ended="onPlayerEnded($event)"
    />
    <div v-if="isShowDuration" class="video__duration"> {{ playDuration }} </div>
  </div>
</template>
<script>
import { formatDuration } from '../../../utils/commen'
export default {
  name: 'MediaVideo',
  components: {},
  props: {
    // eslint-disable-next-line vue/require-default-prop
    sourcesSrc: String,
    // eslint-disable-next-line vue/require-default-prop
    poster: String,
    // eslint-disable-next-line vue/require-default-prop
    videoDuration: Number
  },
  data () {
    return {
      playerOptions: {
        bigPlayButton: false,
        height: '360',
        width: '640',
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9(可去掉两边黑边)"或"4:3"（不可去掉两边黑边））
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: '',
          src: this.sourcesSrc
        }],
        poster: this.poster,
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false // 全屏按钮
        }
      },
      isShowDuration: true,
      isBottomCtrlShow: false,
      playerCtrl: {
        currentTimeInt: '',
        durationInt: ''
      },
      mediaDuration: ''
    }
  },
  computed: {
    playDuration () {
      return formatDuration(this.videoDuration)
    }
  },
  methods: {
    onPlayerPlay () {
      this.isShowDuration = false
      this.isBottomCtrlShow = true
    },
    onPlayerEnded () {
      this.$refs.videoPlayer.player.src(this.sourcesSrc) // 重置进度条(恢复初始阶段)
      this.isShowDuration = true
    }
  }
}
</script>
<style lang="scss" scoped>
.video__box {
  position: relative;
  .video__player {
    width: 640px;
    @media screen and (max-width: 1180px) {
      width: 337px;
    }
  }
  .bottom__ctrl {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background:linear-gradient(135deg,rgba(213,0,0,1) 0%,rgba(173,0,0,1) 100%);
  }
  .video__duration {
    position: absolute;
    left: 13px;
    bottom: 13px;
    width:65px;
    height:27px;
    background:rgba(0,0,0,0.5);
    font-size:12px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:28px;
    text-align: center;
  }
}
</style>
