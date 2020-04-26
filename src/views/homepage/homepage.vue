<template>
  <div>
    <group-material
      v-if="videoGroup.length>0"
      :list="videoGroup"
      type="0"
    />
    <list-video ref="listVideo" :init-item-list="videoArray" unload />
    <div class="btn_showmore" @click="goHomeVideo">加载更多</div>
    <group-material
      v-if="imageGroup.length>0"
      :list="imageGroup"
      type="1"
    />
    <list-image ref="listImage" :init-item-list="imageArray" unload />
    <div class="btn_showmore" @click="goHomeImage">加载更多</div>
    <div class="audio_panel">
      <div class="audio_panel_contain clearfix">
        <material-audio
          v-for="audioItem in audioArray"
          :key="audioItem.id"
          :item="audioItem"
        />
      </div>
    </div>
    <div class="btn_showmore" @click="goHomeAudio">加载更多</div>
  </div>
</template>
<script>
import { getVideoList, getImageList, getAudioList } from '@/api/homepage.js'
import GroupMaterial from '@/components/material_list/GroupMaterial.vue'
import ListImage from '@/components/material_list/ListImage.vue'
import ListVideo from '@/components/material_list/ListVideo.vue'
import MaterialAudio from './components/MaterialAudio.vue'
export default {
  name: 'HomePage',
  components: {
    GroupMaterial,
    ListImage,
    ListVideo,
    MaterialAudio
  },
  data () {
    return {
      imageGroup: [],
      imageArray: [],
      videoArray: [],
      videoGroup: [],
      audioArray: []
    }
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    goImageDetail () {
      this.$router.push({ name: 'Detail', params: { type: '1' } })
    },
    goHomeAudio () {
      this.$router.push({ name: 'HomeAudio', params: { type: '2' } })
    },
    goHomeVideo () {
      this.$router.push({ name: 'HomeVideo', params: { type: '0' } })
    },
    goHomeImage () {
      this.$router.push({ name: 'HomeImage', params: { type: '1' } })
    },
    getData () {
      getVideoList((res) => {
        this.videoGroup = res.groupData
        this.videoArray = res.listData
        this.$refs.listVideo.loading = false
      })
      getImageList((res) => {
        this.imageGroup = res.groupData
        this.imageArray = res.listData
        this.$refs.listImage.loading = false
      })
      getAudioList((res) => {
        this.audioArray = res.groupData
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .btn_showmore{
    cursor: pointer;
    width:160px;
    height:36px;
    border-radius:2px;
    border:1px solid rgba(102,102,102,1);
    font-size:14px;
    color:#000;
    line-height: 34px;
    text-align: center;
    margin:0 auto;
    margin-top:40px;
    margin-bottom:120px;
  }
</style>
