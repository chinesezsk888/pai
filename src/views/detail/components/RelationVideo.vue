<template>
  <div class="video_panel">
    <p>相关素材</p>
    <div class="video_panel_contain clearfix">
      <base-video
        v-for="videoItem in list"
        :key="videoItem.id"
        :item="videoItem"
      />
    </div>
  </div>
</template>
<script>
import BaseVideo from '@/components/material/BaseVideo'
export default {
  name: 'RelationVideo',
  components: {
    BaseVideo
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
  .video_panel{
    width:1780px;
    max-width: 100%;
    min-height: 100px;
    margin:0 auto;
    margin-top:40px;
    margin-bottom: 50px;
    overflow: hidden;
    p{
      font-size:24px;
      margin-bottom:20px;
    }
  }
  .video_panel_contain{
    width:1800px;
    .item{
      width: 280px;
      height: 157px;
      margin-right:20px;
      margin-bottom:20px;
      float:left;
      &:active{
        border:2px solid rgba(173,0,0,1);
      }
      .label{
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

@media all and (max-width: 1780px) {
  .video_panel{width:1180px;}
  .video_panel_contain{width:1200px;}
}
@media all and (max-width: 1180px) {
  .video_panel{width:880px;}
  .video_panel_contain{width:900px;}
}
@media all and (max-width: 880px) {
  .video_panel{width:580px;}
  .video_panel_contain{width:600px;}
}

</style>
