<template>
  <div>
    <group-banner :item="bannerInfo" type="1" />
    <list-image ref="listImage" :init-item-list="imageArray" />
  </div>
</template>
<script>
import GroupBanner from './components/GroupBanner.vue'
import { getGroupImageList } from '@/api/list.js'
import ListImage from '@/components/material_list/ListImage.vue'
export default {
  name: 'GroupImage',
  components: {
    ListImage,
    GroupBanner
  },
  data () {
    return {
      bannerInfo: {},
      imageArray: []
    }
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    getData () {
      getGroupImageList((res) => {
        this.bannerInfo = res.groupData
        this.imageArray = res.listData
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
