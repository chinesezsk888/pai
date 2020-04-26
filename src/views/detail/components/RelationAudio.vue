<template>
  <div class="autio_panel">
    <p>相关素材</p>
    <div class="head">
      <span class="th1 th">选择</span>
      <span class="th2 th">音乐名称</span>
      <span class="th3 th">作者</span>
      <span class="th4 th">时长</span>
      <span class="th6 th" />
      <span class="th5 th">音轨</span>
    </div>
    <base-audio :list="list" class="audio_array" @play="playHandle" />
  </div>
</template>
<script>
import BaseAudio from '@/components/material/BaseAudio'
export default {
  name: 'RelationAudio',
  components: {
    BaseAudio
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
.autio_panel{
  padding: 1px;
  min-height: 100px;
  width:1180px;
  margin:0 auto;
  margin-top:40px;
  margin-bottom:40px;
  position: relative;
  p{
    font-size:24px;
    margin-bottom:20px;
  }
  .head{
    z-index: 100;
    font-size:16px;
    color:#fff;
    width:100%;
    height:36px;
    line-height: 36px;
    background:linear-gradient(263deg,rgba(38,38,38,1) 0%,rgba(78,78,78,1) 23%,rgba(38,38,38,1) 48%,rgba(78,78,78,1) 75%,rgba(38,38,38,1) 100%);
    .th{
      display: inline-block;
      text-align: left;
      margin-right:24px;
    }
    .th1{
      width:78px;
      text-align: center;
    }
    .th2{
      width:240px;
    }
    .th3{
      width:192px;
    }
    .th4{
      width: 80px;
      text-align: center;
    }
    .th6{
      width: 150px;
      text-align: center;
    }
  }
}
@media all and (max-width: 1180px) {
  .autio_panel{
    width:880px;
    .head{
      .th5{display: none;}
    }
  }
  .audio_array{width:900px;}
}
</style>
