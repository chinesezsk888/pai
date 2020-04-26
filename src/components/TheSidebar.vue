<template>
  <div class="side_bar">
    <el-popover
      placement="right"
      :width="downloadWidth"
      trigger="click"
    >
      <div class="download_panel" :class="{download_audio_panel:downtype == 3}">
        <div class="download_list">
          <template v-if="downtype == 1">
            <div v-for="(item,index) in downlist" :key="index" class="video_item">
              <img class="thumbnail" :src="item.cover">
              <div class="title">{{ item.label }}</div>
              <div class="btn_delete" @click="removeDownload(item.id)">删除</div>
            </div>
          </template>
          <template v-if="downtype == 2">
            <div v-for="(item,index) in downlist" :key="index" class="image_item">
              <img class="thumbnail" :src="item.url">
              <div @click="removeDownload(item.id)">删除</div>
            </div>
          </template>
          <template v-if="downtype == 3">
            <div v-for="(item,index) in downlist" :key="index" class="audio_item">
              <div class="audio_play" />
              <div class="title">{{ item.title }}</div>
              <div @click="removeDownload(item.id)">删除</div>
            </div>
          </template>
        </div>
        <div class="download_panel_btn">批量下载</div>
      </div>
      <div slot="reference" class="icon icon_download" />
    </el-popover>
    <div class="icon icon_collect" @click="goPageCollect" />
    <div class="icon icon_ask" />
    <div class="icon icon_back_top" @click="backToTop" />
  </div>
</template>
<script>

export default {
  name: 'TheSidebar',
  computed: {
    downloadWidth () {
      let result = '257'
      if (this.downlist[0] && this.downlist[0].author) {
        result = '217'
      }
      return result
    },
    downlist () {
      return this.$store.state.sidebarDownlist
    },
    downtype () { // 临时判断 item属于哪种 1视频2图片3音频
      let result = 2
      if (this.downlist[0] && this.downlist[0].author) {
        result = 3
      }
      if (this.downlist[0] && this.downlist[0].resolution) {
        result = 1
      }
      return result
    }
  },
  methods: {
    backToTop () {
      window.scroll(0, 0)
    },
    goPageCollect () {
      this.$router.push('/personal/collection')
    },
    removeDownload (id) {
      this.$store.dispatch({
        type: 'removeSidebarDownList',
        id: id
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .download_list{
    margin:20px 0;
  }
  .download_audio_panel{
    .download_panel_btn{
      width:193px;
    }
  }
  .download_panel_btn{
    cursor: pointer;
    font-size:12px;
    color:#000;
    width:233px;
    text-align: center;
    height:28px;
    line-height: 28px;
    border-radius:2px;
    border:1px solid rgba(216,216,216,1);
  }
  .audio_item{
    display:flex;
    margin-bottom:16px;
    .audio_play{
      width:30px;
      height:30px;
      background-image: url(~@/assets/icon_play_music_normal@2x.png);
      background-size:100%;
    }
    .title{
      width:126px;
      height:34px;
      font-size:12px;
    }
  }
  .image_item{
    display:flex;
    margin-bottom:12px;
    .thumbnail{
      width:78px;
      height:44px;
      margin-right:8px;
    }
    .title{
      width:126px;
      height:34px;
      font-size:12px;
    }
  }
  .video_item{
    display:flex;
    margin-bottom:12px;
    .thumbnail{
      width:78px;
      height:44px;
      margin-right:8px;
    }
    .title{
      width:126px;
      height:34px;
      font-size:12px;
    }
  }
  .side_bar{
    position: fixed;
    left:50%;
    bottom:0;
    margin-left:840px;
    z-index: 1000;
    .icon {
      background-size:100%;
      background-repeat:no-repeat;
      width:40px;
      height:40px;
      margin-bottom:20px;
      cursor: pointer;
    }
    .icon_download{
      background-image:url("~@/assets/icon_download_side_normal 2@2x.png") ;
    }
    .icon_back_top{
      background-image:url("~@/assets/icon_top_side_norma@2x.png") ;
    }
    .icon_ask{
      background-image:url("~@/assets/icon_ask_side_normal@2x.png") ;
    }
    .icon_collect{
      background-image:url("~@/assets/icon_collect_side_normal@2x.png") ;
    }
  }
</style>
