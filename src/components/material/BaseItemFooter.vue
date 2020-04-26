<template>
  <div class="footer">
    <div class="toolbar">
      <div class="add" @click.stop="showLimit" />
      <div class="download" @click.stop="addDownList" />
      <div class="collect" @click.stop="showLimit" />
    </div>
  </div>
</template>
<script>
import { sidebarDownload } from '@/utils/index'
import showLimit from '@/components/checkdialog'
export default {
  name: 'BaseItemFooter',
  props: {
    item: {
      default () {
        return {}
      },
      type: Object
    }
  },
  methods: {
    showLimit () {
      showLimit(true)
    },
    addDownList () {
      sidebarDownload(this.item)
    }
  }
}
</script>
<style lang="scss" scoped>
  .footer{
    display: none;
    width: 100%;
    height:60px;
    background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    z-index: 100;
  }
  .toolbar{
    position: absolute;
    bottom:8px;
    right:7px;
    display: flex;
    width:76px;
    justify-content: space-between;
    z-index: 5;
    div{
      cursor: pointer;
      width:20px;
      height:20px;
      background-size:100%;
    }
    .add{
      background-image: url(~@/assets/icon_add_black_press@2x.png)
    }
    .download{
      background-image: url(~@/assets/icon_download_black_normal@2x.png)
    }
    .collect{
      background-image: url(~@/assets/icon_collect_black_normal@2x.png)
    }
  }

</style>
