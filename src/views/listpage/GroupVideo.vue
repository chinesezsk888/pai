<template>
  <div>
    <group-banner :item="bannerInfo" type="0" />
    <list-video ref="listVideo" :init-item-list="videoArray" />
  </div>
</template>
<script>
import GroupBanner from './components/GroupBanner.vue'
import ListVideo from '@/components/material_list/ListVideo.vue'
import { getGroupVideoList } from '@/api/list.js'
export default {
  name: 'GroupVideo',
  components: {
    GroupBanner,
    ListVideo
  },
  data () {
    return {
      videoArray: [],
      bannerInfo: {}
    }
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    getData () {
      getGroupVideoList((res) => {
        this.bannerInfo = res.groupData
        this.videoArray = res.listData
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .video_panel{
    width:1580px;
    max-width: 100%;
    margin:0 auto;
    margin-top:40px;
    margin-bottom: 50px;
    overflow: hidden;
  }
  .video_panel_contain{
    width:1600px;
    .item{
      margin-right:20px;
      margin-bottom:20px;
      float:left;
    }
  }
  @media all and (max-width: 1580px) {
    .video_panel{width:1182px;}
    .video_panel_contain{width:1202px;}
  }
  @media all and (max-width: 1182px) {
    .video_panel{width:780px;}
    .video_panel_contain{width:850px;}
  }
</style>
