<template>
  <div class="item" :class="{'show':isShow}">
    <div class="cover">
      <img :src="item.cover" :class="{show:listShow}">
      <div class="timer" :class="{'timeract': status}">
        {{ item.label }}
      </div>
      <progress-circle :bl="progressBl" class="progress_circle" />
      <audio
        ref="audio"
        :src="audioUrl"
        controls="controls"
        loop="loop"
      />
      <div class="extend" @click="switchList">
        <div class="point_gray" />
        <div class="line_gray" />
        <div class="line_white" />
      </div>
      <div class="list" :class="{show:listShow}">
        <div
          v-for="(childItem,index) in item.childs.slice(0, 7)"
          :key="childItem.id"
          class="music"
          :class="{'last':( index == 7 || index==item.childs.length-1 )}"
        >
          <span class="title" @click="goAudioDetail">
            {{ childItem.title }}
          </span>
          <span class="duration">
            {{ childItem.durationStr }}
          </span>
          <div class="toolbar">
            <div :class="{'icon_play':!childItem.status,'icon_stop':childItem.status}" @click="playAudio(childItem)" />
            <div class="icon_download" @click="addDownList(childItem)" />
            <div class="icon_collect" @click="showLimit" />
          </div>
          <div class="line" />
        </div>
        <div v-if="item.childs.length > 7" class="music_showmore" @click="goAudioList">
          查看该专辑所有音乐
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import showLimit from '@/components/checkdialog'
import ProgressCircle from '@/components/animation/ProgressCircle.vue'
import { formatDuraton, sidebarDownload } from '@/utils/index'
export default {
  name: 'MaterialAudio',
  components: {
    ProgressCircle
  },
  props: {
    item: {
      default () {
        return {}
      },
      type: Object
    }
  },
  data () {
    return {
      isShow: false,
      progressBl: 0,
      status: false,
      audioUrl: '',
      listShow: false,
      duration: 0,
      currentItem: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.isShow = true
    }, 200)
    let audio = this.$refs.audio
    var _self = this
    audio.ontimeupdate = () => {
      _self.currentTime = audio.currentTime
      this.progressBl = (_self.currentTime / parseFloat(this.duration)) * 100
      this.currentItem.durationStr = formatDuraton(audio.currentTime)
    }
    this.initData()
  },
  methods: {
    addDownList (item) {
      sidebarDownload(item)
    },
    showLimit () {
      showLimit(true)
    },
    goAudioDetail () {
      this.$router.push({ name: 'Detail', params: { type: '2' } })
    },
    initData () {
      this.item.childs.forEach(item => {
        item['status'] = false
        item['durationStr'] = formatDuraton(0)
      })
    },
    closeAudio () { // 其他组件关闭本组件播放
      this.$store.dispatch({
        type: 'setHomepageAudioPlay',
        audioObj: null
      })
      let audio = this.$refs.audio
      audio.pause()
      this.status = false
      this.audioUrl = ''
      this.initData()
    },
    playAudio (item) { //
      if (this.currentItem && this.currentItem != item) {
        // 清楚之前组件内的播放
        this.currentItem.durationStr = formatDuraton(0)
        this.currentItem.status = false
      }
      this.currentItem = item
      this.audioUrl = item.url
      this.duration = item.duration
      this.$nextTick(() => {
        let audio = this.$refs.audio
        if (this.currentItem.status) {
          audio.pause()
          this.status = false
          this.audioUrl = ''
          this.currentItem.durationStr = formatDuraton(0)
        } else {
          audio.play()
          this.status = true
          // 关闭其他组件
          let oldAudioObj = this.$store.state.homepageAudio.audioObj
          if (oldAudioObj && oldAudioObj != this) oldAudioObj.closeAudio()

          this.$store.dispatch({
            type: 'setHomepageAudioPlay',
            audioObj: this
          })
        }
        this.currentItem.status = !this.currentItem.status
      })
    },
    switchList () {
      this.listShow = !this.listShow
      if (this.listShow) { // 展开关闭其他展开
        let oldObj = this.$store.state.homepageAudio.unfoldObj
        if (oldObj) oldObj.switchList()
        this.$store.dispatch({
          type: 'setHomepageAudioFold',
          unfoldObj: this
        })
      } else { // 收起清空展开记录
        this.$store.dispatch({
          type: 'setHomepageAudioFold',
          unfoldObj: null
        })
      }
    },
    goAudioList () {
      this.$router.push('/groupaudio/3/1')
    }
  }
}
</script>
<style lang="scss" scoped>
  audio{
    display: none;
  }
  .item{
    width:370px;
    height:404px;
    &.show{
      .cover img{
        opacity: 1;
        transform: scale(1);
      }
      .extend{
        opacity: 1;
      }
      .cover .timer{
        opacity: 1;
        transform:translate(-50%,-50%)  scale(1);
      }
    }
  }
  .extend{
    opacity: 0;
    cursor: pointer;
  }
  .list{
    width:100%;
    position: absolute;
    z-index: 100;
    top: 370px;
    height: 0;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    &.show{
      height: 477px;
      margin-top: -6px;
    }
    .title{
      cursor: pointer;
      font-size:20px;
      width: 168px;
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .duration{
      font-size:16px;
      color:#333333;
      display: inline-block;
      vertical-align: text-bottom;
    }
    .music_showmore{
      background: #F7F7F7;
      font-size:16px;
      height:51px;
      line-height: 51px;
      text-align: center;
      border-radius: 0 0 10px 10px;
      cursor: pointer;
    }
    .music{
      width:100%;
      height:60px;
      padding:16px 24px 16px 20px;
      position: relative;
      line-height: 28px;
      &.last{
        border-radius: 0px 0px 10px 10px;
        overflow: hidden;
      }
      .line{
        width:100%;
        position: absolute;
        bottom:0;
        left:0;
        height:10px;
        background-size:100%;
      }
      &:nth-child(2n){
        background:rgba(247,247,247,1);
        .line{
          background-image: url(~@/assets/audio_line_white.png)
        }
      }
      &:nth-child(2n+1){
        background:rgba(236,238,238,1);
        .line{
          background-image: url(~@/assets/audio_line_gray.png)
        }
      }
    }
    .toolbar{
      position: absolute;
      top:18px;
      right:24px;
      display: flex;
      justify-content: space-between;
      width:96px;
      div{
        cursor: pointer;
        width:24px;
        height:24px;
        background-size:100%;
      }
      .icon_play{
        background-image: url(~@/assets/icon_play_music_normal@2x.png)
      }
      .icon_stop{
        background-image: url(~@/assets/icon_pause_music_normal@2x.png);
      }
      .icon_download{
        background-image: url(~@/assets/icon_download_music_normal@2x.png)
      }
      .icon_collect{
        background-image: url(~@/assets/icon_collect_music_normal@2x.png)
      }
    }
  }
  .cover{
    width:100%;
    height:370px;
    position: relative;
    .progress_circle{
      position: absolute;
      z-index: 1000;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img{
      width:100%;
      height:100%;
      position: absolute;
      top:0;
      left:0;
      z-index: 10;
      border-radius: 10px;
      transition: all 0.4s ease-in-out;
      opacity: 0;
      transform: scale(0.8);
      &.show{
        transform: translate(0, -6px);
      }
    }
    .timer{
      &.timeract{
        animation: timeract 0.04s infinite;
      }
      width:162px;
      height:162px;
      position: absolute;
      z-index: 15;
      font-size:30px;
      font-weight:500;
      letter-spacing:3px;
      color:#fff;
      background: url(~@/assets/music_card@2x.png);
      background-size:100%;
      top:50%;
      left:50%;
      opacity: 0;
      transform: scale(0.8) translate(-50%,-50%);
      transition: all 0.4s ease-in-out;
      text-align: center;
      line-height: 162px;
    }
    .line_gray{
      position: absolute;
      width:370px;
      height:52px;
      background:rgba(236,238,238,1);
      border-radius:10px;
      z-index: 5;
      bottom: -16px;
    }
    .line_white{
      position: absolute;
      width:350px;
      height:28px;
      background:rgba(247,247,247,1);
      bottom: -32px;
      left:10px;
      border-radius:10px;
    }
    .point_gray{
      position: absolute;
      width:72px;
      height:36px;
      z-index: 15;
      background:rgba(236,238,238,1);
      border-radius: 36px 36px 0 0;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
  }
  @keyframes timeract
  {
  0% {transform:translate(-50%,-50%) rotate(0deg);}
  100% {transform:translate(-50%,-50%) rotate(360deg);}
  }
</style>
