<template>
  <div>
    <group-banner :item="bannerInfo" type="2" />
    <list-audio v-if="audioArray.length > 0" :list="audioArray" />
  </div>
</template>
<script>
import ListAudio from '@/components/material_list/ListAudio.vue'
import GroupBanner from './components/GroupBanner.vue'
import { getGroupAudioList } from '@/api/list.js'

export default {
  name: 'GroupAudio',
  components: {
    GroupBanner,
    ListAudio
  },
  data () {
    return {
      bannerInfo: [],
      audioArray: []
    }
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    getData () {
      getGroupAudioList((res) => {
        this.bannerInfo = res.groupData
        this.audioArray = res.groupData.childs
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
