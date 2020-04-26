<template>
  <div>
    <group-banner :item="bannerInfo" type="2" />
    <div class="autio_panel">
      <div class="head">
        <span class="th1 th">选择</span>
        <span class="th2 th">音乐名称</span>
        <span class="th3 th">作者</span>
        <span class="th4 th">时长</span>
        <span class="th5 th">音轨</span>
      </div>
      <base-audio :list="audioArray" class="audio_array" @play="playHandle" />
    </div>
    <my-audio-controller
      v-if="currentAudio.url!=''"
      ref="myAudio"
      :title="currentAudio.title"
      :duration="currentAudio.duration"
      :url="currentAudio.url"
    />
  </div>
</template>
<script>
import BaseAudio from '@/components/material/BaseAudio.vue'
import GroupBanner from './components/GroupBanner.vue'
import MyAudioController from './components/MyAudioControllerbak.vue'
import { getGroupAudioList } from '@/api/list.js'

export default {
  name: 'GroupAudio',
  components: {
    GroupBanner,
    BaseAudio,
    MyAudioController
  },
  data () {
    return {
      currentAudio: {
        title: '',
        duration: 0,
        url: ''
      },
      audioArray: [],
      bannerInfo: {}
    }
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    resetCurrent () {
      this.currentAudio.title = ''
      this.currentAudio.duration = 0
      this.currentAudio.url = ''
    },
    playHandle (item) {
      this.resetCurrent()
      this.$nextTick(() => {
        this.currentAudio.title = item.title
        this.currentAudio.duration = item.duration
        this.currentAudio.url = item.url
      })
    },
    getData () {
      getGroupAudioList((res) => {
        this.bannerInfo = res.groupData
        this.audioArray = res.groupData.childs
        this.currentAudio.title = this.audioArray[0].title
        this.currentAudio.duration = this.audioArray[0].duration
        this.currentAudio.url = this.audioArray[0].url
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .audio_array{
    margin-top: 14px;
  }
  .autio_panel{
    padding: 1px;
    min-height: 500px;
    width:1180px;
    margin:0 auto;
    margin-bottom:70px;
    position: relative;
    .head{
      position:absolute;
      top: -21px;
      z-index: 100;
      font-size:16px;
      color:#fff;
      width:100%;
      height:36px;
      line-height: 36px;
      background:linear-gradient(263deg,rgba(38,38,38,1) 0%,rgba(78,78,78,1) 23%,rgba(38,38,38,1) 48%,rgba(78,78,78,1) 75%,rgba(38,38,38,1) 100%);
      .th{
        display: inline-block;
        text-align: left;
        margin-right:24px;
      }
      .th1{
        width:78px;
        text-align: center;
      }
      .th2{
        width:240px;
      }
      .th3{
        width:192px;
      }
      .th4{
        width: 80px;
        text-align: center;
      }
      .th5{
        width: 80px;
        text-align: center;
      }
    }
  }
  @media all and (max-width: 1180px) {
    .autio_panel{
      width:880px;
      .head{
        .th5{display: none;}
      }
    }
    .audio_array{width:900px;}
  }
</style>
