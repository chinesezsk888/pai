<template>
  <div>
    <the-header />
    <div class="contain">
      <search-nav />
      <group-panel v-if="audioArray.length == 0" :list="groupList" />
      <list-video v-if="videoArray.length>0" ref="listVideo" :init-item-list="videoArray" :item-type="1" />
      <list-image v-if="imageArray.length>0" ref="listImage" :init-item-list="imageArray" :item-type="1" />
      <list-audio v-if="audioArray.length>0" ref="listAudio" :list="audioArray" :item-type="1" />
    </div>
    <the-page-footer />
  </div>
</template>
<script>
import ThePageFooter from '@/components/ThePageFooter'
import TheHeader from '@/components/TheHeader.vue'
import GroupPanel from './components/GroupPanel'
import SearchNav from './components/SearchNav'
import ListVideo from '@/components/material_list/ListVideo.vue'
import ListImage from '@/components/material_list/ListImage.vue'
import ListAudio from '@/components/material_list/ListAudio.vue'
import { getGroupVideoList, getGroupImageList, getGroupAudioList } from '@/api/list.js'
export default {
  name: 'GroupVideo',
  components: {
    TheHeader,
    ThePageFooter,
    GroupPanel,
    SearchNav,
    ListVideo,
    ListImage,
    ListAudio
  },
  data () {
    return {
      groupList: [],
      videoArray: [],
      audioArray: [],
      imageArray: []
    }
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    getData () {
      this.groupList = [
        {
          title: '一二三四五六七八九十一二三四五六七八九十'
        },
        {
          title: '一二三四五六七八九十一二三四五六七八九十'
        }
      ]
      getGroupVideoList((res) => {
        // this.videoArray = res.listData
        this.$refs.listVideo.loading = false
      })
      getGroupImageList((res) => {
        // this.imageArray = res.listData
        this.$refs.listImage.loading = false
      })
      getGroupAudioList((res) => {
        this.audioArray = res.groupData.childs
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .contain{
    width: 1580px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 120px;
  }
</style>
