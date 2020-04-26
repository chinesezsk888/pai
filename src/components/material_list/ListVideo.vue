<template>
  <div class="video_panel">
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="scroll_busy"
      infinite-scroll-distance="100"
      class="video_panel_contain clearfix"
    >
      <div
        v-masonry
        transition-duration="0s"
        item-selector=".video_item"
      >
        <div v-for="videoItem in itemList" :key="videoItem.id" v-masonry-tile class="video_item">
          <base-video :item="videoItem" />
          <template v-if="itemType==1">
            <base-search />
          </template>
        </div>
      </div>
      <the-loading v-show="loading" />
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
import infiniteScroll from 'vue-infinite-scroll'
import BaseVideo from '@/components/material/BaseVideo.vue'
import BaseSearch from '@/components/material/BaseSearch.vue'
import TheLoading from '@/components/TheLoading.vue'
export default {
  name: 'ListImage',
  components: {
    BaseVideo,
    TheLoading,
    BaseSearch
  },
  directives: { infiniteScroll },
  props: {
    initItemList: {
      default () {
        return []
      },
      type: Array
    },
    itemType: {
      type: Number,
      default: 0
    },
    unload: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      itemList: [],
      scroll_busy: false,
      loading: true,
      nextUrl: '' //
    }
  },
  watch: {
    initItemList () {
      this.itemList = this.initItemList
    }
  },
  methods: {
    loadMore () {
      if (this.unload) {
        return
      }
      if (this.nextUrl === '') {
        return
      }
      let that = this
      that.scroll_busy = true
      that.loading = true
      request({
        url: that.nextUrl,
        method: 'get'
      }).then((res) => {
        that.itemList = that.itemList.concat(res.data.listData)
        that.scroll_busy = false
        that.loading = false
      })
    }
  }
}
</script>
<style scoped lang="scss">
 .video_panel{
    width:1580px;
    max-width: 100%;
    margin:0 auto;
    margin-top:40px;
    margin-bottom: 50px;
    min-height: 750px;
    overflow: hidden;
    &.video_search_panel{
      height:286px;
    }
  }
  .video_panel_contain{
    width:1600px;
    .video_item{
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
