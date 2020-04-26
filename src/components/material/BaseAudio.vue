/* eslint-disable vue/no-v-html */
<template>
  <div class="audio_list">
    <div v-for="item in list" :key="item.id" class="item clearfix">
      <div v-if="isShow" class="tr1 tr">
        <div class="icon_checkbox" />
      </div>
      <div v-if="item.key == 'undefined'" class="tr2 tr">
        {{ item.title }}
      </div>
      <div v-else class="tr2 tr" v-html="setTitle(item.title, item.key)" />
      <div class="tr3 tr">
        {{ item.author }}
      </div>
      <div class="tr4 tr">
        {{ formatDuraton(item.duration) }}
      </div>
      <div class="tr6 tr">RM</div>
      <div class="tr5 tr">
        <img :src="demoImage">
      </div>
      <div class="tr_icon tr">
        <span class="icon_start icon" @click="playHandle(item)" />
        <span class="icon_collect icon" />
        <span class="icon_download icon" @click="addDownList(item)" />
      </div>
    </div>
  </div>
</template>
<script>
import { formatDuraton, sidebarDownload } from '@/utils/index'
import demoImage from '@/assets/demo/audio_bo.jpg'
export default {
  name: 'BaseAudio',
  props: {
    list: {
      default () {
        return {}
      },
      type: Array
    }
  },
  data () {
    return {
      demoImage: demoImage,
      isShow: true
    }
  },
  created () {
    this.showCheckBox()
  },
  methods: {
    setTitle (title, key) {
      return title.replace(key, '<span>' + key + '</span>')
    },
    addDownList (item) {
      sidebarDownload(item)
    },
    formatDuraton (duration) {
      return formatDuraton(duration)
    },
    playHandle (item) {
      this.$emit('play', item)
    },
    showCheckBox () {
      var path = this.$route.path
      if (path.indexOf('personal') !== -1) {
        this.isShow = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .audio_list{
    width:1180px;
  }
  .item{
    height:78px;
    border-bottom:1px solid #D8D8D8;
    &:hover{
      background:linear-gradient(90deg,rgba(247,247,247,1) 0%,rgba(255,255,255,1) 50%,rgba(247,247,247,1) 100%);
    }
  }
  .tr{
    line-height:78px;
    display: block;
    float:left;
    text-align: left;
    margin-right:24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tr1,.th1{
    width:78px;
    text-align: center;
  }
  .tr2,.th2{
    width:240px;
  }
  .tr3,.th3{
    width:192px;
  }
  .tr4,.th4{
    width: 80px;
    text-align: center;
  }
  .th5 {
    width: 296px;
  }
  .tr2{
    font-size:20px;
    ::v-deep span{
      color:#AD0000;
    }
  }
  .tr3{
    font-size:16px;
  }
  .tr4{
    font-size:14px;
  }
  .tr5{
    width: 296px;
    line-height: 0;
    img{
      margin-top:23px;
    }
  }
  .tr_icon{
    float:right;
    width: 125px;
    margin-right: 0px;
  }
  .icon{
    display: inline-block;
    width:28px;
    height:28px;
    background-size:100%;
    vertical-align: middle;
    cursor: pointer;
  }
  .icon_stop{
    background-image: url(~@/assets/icon_pause_music_normal@2x.png);
  }
  .icon_start{
    background-image: url(~@/assets/icon_play_music_normal@2x.png);
  }
  .icon_collect{
    background-image: url(~@/assets/icon_collect_music_normal@2x.png);
    margin:0 16px;
  }
  .icon_download{
    background-image: url(~@/assets/icon_download_music_normal@2x.png);
  }
  .icon_checkbox{
    cursor: pointer;
    vertical-align: middle;
    display: inline-block;
    width:16px;
    height:16px;
    background-size:100%;
    background-image: url(~@/assets/icon_choose_music_normal@2x.png);
  }
  .icon_checkbox.on{
    background-image: url(~@/assets/icon_choose_music_select@2x.png);
  }
  @media all and (max-width: 1180px) {
    .audio_list{
      .th5{
        display: none;
      }
      .tr5{
        display: none;
      }
      .tr_icon {
        margin-right: 15px;
      }
    }
  }
</style>
