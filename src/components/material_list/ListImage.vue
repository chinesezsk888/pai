<template>
  <div class="image_panel">
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="scroll_busy"
      infinite-scroll-distance="200"
      class="image_panel_contain"
    >
      <div
        v-masonry
        transition-duration="0s"
        item-selector=".image_item"
        :gutter="config.gutter"
      >
        <div
          v-for="item in itemList"
          :key="item.id"
          v-masonry-tile
          class="image_item"
        >
          <base-image :item="item" />
          <template v-if="itemType==1">
            <base-search />
          </template>
        </div>
      </div>
      <div v-if="unload" class="image_panel_footer" />
      <the-loading v-show="loading" />
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
import infiniteScroll from 'vue-infinite-scroll'
import BaseImage from '@/components/material/BaseImage.vue'
import BaseSearch from '@/components/material/BaseSearch.vue'
import TheLoading from '@/components/TheLoading.vue'
export default {
  name: 'ListImage',
  components: {
    BaseImage,
    BaseSearch,
    TheLoading
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
    config: {
      default () {
        return {
          gutter: 20
        }
      },
      type: Object
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
  .image_panel{
    width:1580px;
    max-width: 100%;
    margin:0 auto;
    margin-top:40px;
    margin-bottom: 50px;
    min-height: 750px;
    overflow: hidden;
    .image_item{
      margin-bottom:20px;
    }
    .item{
      width:380px;
    }
  }
  .image_panel_contain{
    width:1600px;
    position: relative;
    .image_panel_footer{
      position: absolute;
      bottom:0;
      left:0;
      width:100%;
      height:220px;
      background:linear-gradient(180deg,rgba(243,243,244,0) 0%,rgba(243,243,244,1) 100%);
    }
  }
  @media all and (max-width: 1580px) {
    .image_panel{width:1182px;}
    .image_panel_contain{width:1202px;}
  }
  @media all and (max-width: 1182px) {
    .image_panel{width:780px;}
    .image_panel_contain{width:850px;}
  }
</style>
