<template>
  <div>
    <group-material
      v-if="videoGroup.length>0"
      :list="videoGroup"
      type="0"
    />
    <list-video ref="listVideo" :init-item-list="videoArray" />
  </div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll'
import { getVideoList } from '@/api/homepage.js'
import GroupMaterial from '@/components/material_list/GroupMaterial.vue'
import ListVideo from '@/components/material_list/ListVideo.vue'
export default {
  name: 'HomeVideo',
  components: {
    GroupMaterial,
    ListVideo
  },
  directives: { infiniteScroll },
  data () {
    return {
      videoArray: [],
      videoGroup: []
    }
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    getData () {
      getVideoList((res) => {
        this.videoGroup = res.groupData
        this.videoArray = res.listData
        this.$refs.listVideo.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
