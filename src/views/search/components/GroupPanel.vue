<template>
  <div class="group_panel clearfix">
    <div v-for="item in list" :key="item.id" class="item">
      <div class="item_bg">
        <div class="title">
          {{ item.title }}
        </div>
      </div>
      <img class="cover" src="../../../assets/demo/demo26.jpg">
    </div>
  </div>
</template>
<script>
export default {
  name: 'GroupPanel',
  props: {
    list: {
      default () {
        return []
      },
      type: Array
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .group_panel{
    margin-bottom:42px;
  }
  .item {
    width:246px;
    height:138px;
    float: left;
    margin-right:20px;
    position: relative;
    &:hover{
      .item_bg {
        background:inherit;
      }
      .title{
        background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
      }
    }
  }
  .cover{
    width:100%;
    height:100%;
  }
  .item_bg{
    position: absolute;
    background:linear-gradient(360deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%);
    top:0;
    left:0;
    z-index: 10;
    width:100%;
    height:100%;
  }
  .title{
    position: absolute;
    bottom:0;
    color:rgba(255,255,255,1);
    line-height:20px;
    width:100%;
    font-size:14px;
    padding:14px 12px 6px;
  }
</style>
