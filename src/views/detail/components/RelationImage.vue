<template>
  <div class="image_panel">
    <p>相关素材</p>
    <div class="image_panel_contain">
      <div
        v-masonry
        transition-duration="0s"
        item-selector=".image_item"
        gutter="20"
      >
        <div
          v-for="item in list"
          :key="item.id"
          v-masonry-tile
          class="image_item"
        >
          <base-image :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseImage from '@/components/material/BaseImage.vue'
export default {
  name: 'RelationImage',
  components: {
    BaseImage
  },
  props: {
    list: {
      default () {
        return []
      },
      type: Array
    }
  },
  methods: {
    playHandle () { // todo 目前模拟打开新的详情页
      window.scroll(0, 0)
      this.$router.go(0)
    }
  }
}
</script>
<style lang="scss" scoped>
.image_panel{
  width:1780px;
  max-width: 100%;
  min-height: 100px;
  margin:0 auto;
  margin-top:40px;
  margin-bottom: 50px;
  overflow: hidden;
  .item{
    width:280px;
    margin-bottom:20px;
  }
  p{
    font-size:24px;
    margin-bottom:20px;
  }
}
.image_panel_contain{
  width:1800px;
}
// 1780px //1180 //880px //580

@media all and (max-width: 1780px) {
  .image_panel{width:1180px;}
  .image_panel_contain{width:1200px;}
}
@media all and (max-width: 1180px) {
  .image_panel{width:880px;}
  .image_panel_contain{width:900px;}
}
@media all and (max-width: 880px) {
  .image_panel{width:580px;}
  .image_panel_contain{width:600px;}
}
</style>
