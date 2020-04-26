<template>
  <div class="audio_controll">
    <audio
      ref="audio"
      :src="item.url"
      controls="controls"
      loop="loop"
    />
    <div class="icon_prev icon" @click="showLimit" />
    <div class="icon btn_play" :class="{'icon_play':!status,'icon_stop':status}" @click="playAudio" />
    <div class="icon_next icon" @click="showLimit" />
    <div class="title">{{ item.title }}</div>
    <div
      ref="audioBar"
      class="process"
      @click="barClick"
      @touchstart.prevent="barTouchStart"
      @touchmove.prevent="barTouchMove"
      @touchend="barTouchEnd"
    >
      <div class="audio_bar">
        <div ref="barLoaded" class="bar_loaded" :style="{width:percent*100+'%'}" />
        <div
          ref="barBtn"
          class="bar_btn"
          :style="{left:barInfor.width*percent+'px'}"
        />
      </div>
    </div>
    <div class="duratioin">{{ formatDuraton(currentTime) }}/{{ formatDuraton(item.duration) }}</div>
    <div class="icon btn_close icon_stop" @click="pauseAudio" />
    <div class="icon_collect icon" @click="showLimit" />
    <div class="icon_download icon" @click="addDownList" />
  </div>
</template>
<script>
import showLimit from '@/components/checkdialog'
import { formatDuraton, sidebarDownload } from '@/utils/index'
export default {
  name: 'MyAudioController',
  props: {
    item: {
      default () {
        return {
          title: '',
          url: '',
          duration: 0
        }
      },
      type: Object
    }
  },
  data () {
    return {
      status: false, // 音频播放状态
      currentTime: 0, // 当前时间
      truthDuration: 0, // 音频真实长度 总多少秒
      barInfor: {
        moveFlag: false, // 移动中标识，处在移动中则 进度条不随着音乐播放而改变
        width: 0, // 进度条总长度,
        moveX: 0, // 一次拖动的变化长度
        movedX: 0 // 已经移动的长度
      }
    }
  },
  computed: {
    percent () {
      return Math.min(1, this.barInfor.movedX / this.barInfor.width)
    }
  },
  updated () {
    this.truthDuration = parseFloat(this.duration)
  },
  mounted: function () {
    let audio = this.$refs.audio
    var _self = this
    _self.truthDuration = parseFloat(this.duration)
    audio.ontimeupdate = () => {
      _self.currentTime = audio.currentTime
      if (!_self.barInfor.moveFlag) {
        _self.barInfor.movedX = (_self.currentTime / _self.truthDuration) * _self.barInfor.width
      }
    }
    this.barInfor.width = this.$refs.audioBar.clientWidth
  },
  methods: {
    addDownList () {
      sidebarDownload(this.item)
    },
    showLimit () {
      showLimit(true)
    },
    reset () {
      let audio = this.$refs.audio
      audio.pause()
      this.status = false// 音频播放状态
      this.currentTime = 0 // 当前时间
      this.truthDuration = 0// 音频真实长度 总多少秒
      this.barInfor = {
        moveFlag: false, // 移动中标识，处在移动中则 进度条不随着音乐播放而改变
        width: 0, // 进度条总长度,
        moveX: 0, // 一次拖动的变化长度
        movedX: 0 // 已经移动的长度
      }
    },
    formatDuraton (duration) {
      return formatDuraton(duration)
    },
    playAudio () {
      let audio = this.$refs.audio
      if (this.status) {
        audio.pause()
      } else {
        audio.play()
      }
      this.status = !this.status
    },
    pauseAudio () {
      let audio = this.$refs.audio
      audio.pause()
      this.status = false
    },
    barTouchStart (e) {
      this.barInfor.moveFlag = true
      this.barInfor.startX = e.touches[0].pageX
    },
    barTouchMove (e) {
      this.barInfor.moveX = e.touches[0].pageX - this.barInfor.startX // touch移动距离
      this.barInfor.movedX = this.barInfor.movedX + this.barInfor.moveX// 累计移动距离
      this.barInfor.startX = e.touches[0].pageX// 起点重新赋值
    },
    barTouchEnd () {
      this.barInfor.moveFlag = false
      this.barInfor.moveX = 0
      this.currentTime = (this.barInfor.movedX / this.barInfor.width) * this.truthDuration
      this.$refs.audio.currentTime = this.currentTime
    },
    barClick (e) {
      this.currentTime = (e.offsetX / this.barInfor.width) * this.truthDuration
      this.$refs.audio.currentTime = this.currentTime
      this.barInfor.movedX = e.offsetX
    }
  }
}
</script>
<style lang="scss" scoped>
  audio{
    display: none;
  }
  .audio_controll{
    position: fixed;
    width:100%;
    height:60px;
    background:linear-gradient(90deg,rgba(247,247,247,1) 0%,rgba(255,255,255,1) 50%,rgba(247,247,247,1) 100%);
    box-shadow:0px -4px 4px 0px rgba(216,216,216,1);
    bottom:0;
    left:0;
  }
  .icon{
    cursor: pointer;
    position: absolute;
    top:14px;
    width:32px;
    height:32px;
    background-size:100%;
    left:50%;
    box-shadow:  0px 0px 3px 0px #b9b9b9;
    border-radius: 50%;
  }
  .icon_prev{
    background-image: url(~@/assets/icon_play_music_prev@2x.png);
    transform:  translate(-546px);
    border-radius: 0;
    box-shadow: none;
  }
  .icon_play{
    background-image: url(~@/assets/icon_play_music_normal@2x.png);
  }
  .btn_play{
    transform:  translate(-486px);
  }
  .icon_next{
    background-image: url(~@/assets/icon_play_music_next@2x.png);
    transform:  translate(-422px);
    border-radius: 0;
    box-shadow: none;
  }
  .title{
    position: absolute;
    width:200px;
    left:50%;
    top:16px;
    height:28px;
    font-size:20px;
    line-height: 28px;
    transform:  translate(-340px);
    user-select:none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .process{
    position: absolute;
    left:50%;
    top: 23px;
    width:380px;
    height:10px;
    transform:  translate(-100px);
  }
  .audio_bar{
    width:100%;
    height:2px;
    background:rgba(216,216,216,1);
    border-radius: 2px;
    margin-top: 4px;
    position: relative;
  }
  .bar_loaded{
      position: absolute;
      height:0.04rem;
      top:0;
      left:0;
      background: #434343;
  }
  .bar_btn{
    width:6px;
    height:6px;
    background:linear-gradient(135deg,rgba(213,0,0,1) 0%,rgba(173,0,0,1) 100%);
    position: absolute;
    border-radius: 50%;
    top: -2.5px;
  }
  .duratioin{
    position: absolute;
    top:22px;
    font-size:11px;
    line-height: 16px;
    height:16px;
    color:#000;
    left:50%;
    transform:  translate(298px);
  }
  .icon_stop{
    background-image: url(~@/assets/icon_pause_music_normal@2x.png);
  }
  .btn_close{
    transform:  translate(392px);
  }
  .icon_collect{
    background-image: url(~@/assets/icon_collect_music_normal@2x.png);
    transform:  translate(462px);
  }
  .icon_download{
    background-image: url(~@/assets/icon_download_music_normal@2x.png);
    transform:  translate(532px);
  }
</style>
