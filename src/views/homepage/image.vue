<template>
  <div>
    <group-material
      v-if="imageGroup.length>0"
      :list="imageGroup"
      type="1"
    />
    <list-image ref="listImage" :init-item-list="imageArray" />
  </div>
</template>
<script>

import { getImageList } from '@/api/homepage.js'
import GroupMaterial from '@/components/material_list/GroupMaterial.vue'
import ListImage from '@/components/material_list/ListImage.vue'
export default {
  name: 'HomeVideo',
  components: {
    GroupMaterial,
    ListImage
  },
  data () {
    return {
      imageGroup: [],
      imageArray: []
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
    getData () {
      getImageList((res) => {
        this.imageGroup = res.groupData
        this.imageArray = res.listData
        this.$refs.listImage.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
