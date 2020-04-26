<template>
  <div>
    <div class="audio_panel">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="scroll_busy"
        infinite-scroll-distance="100"
        class="audio_panel_contain clearfix"
      >
        <div
          v-masonry
          transition-duration="0s"
          item-selector=".audio_item"
        >
          <div v-for="audioItem in audioArray" :key="audioItem.id" v-masonry-tile class="audio_item">
            <material-audio :item="audioItem" />
          </div>
        </div>
        <the-loading v-show="loading" />
      </div>
    </div>
  </div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll'
import { getAudioList } from '@/api/homepage.js'
import MaterialAudio from './components/MaterialAudio.vue'
import TheLoading from '@/components/TheLoading.vue'
export default {
  name: 'HomeAudio',
  components: {
    MaterialAudio,
    TheLoading
  },
  directives: { infiniteScroll },
  data () {
    return {
      scroll_busy: false,
      loading: true,
      audioArray: [],
      nextUrl: ''
    }
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    getData () {
      getAudioList((res) => {
        this.audioArray = res.groupData
        this.loading = false
      })
    },
    // 下一页
    loadMore () {
      if (this.nextUrl === '') {
        return
      }
      this.scroll_busy = true
      this.loading = true
      getAudioList((res) => {
        this.audioArray = this.audioArray.concat(res.groupData)
        this.scroll_busy = false
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
