<template>
  <div class="item" :class="type==0 ? 'item_video' : 'item_image'">
    <div class="item_bg">
      <div class="label">
        {{ item.label }}
      </div>
      <div class="count">
        {{ item.subNum }}个{{ type==0 ? '视频':'图片' }}
      </div>
    </div>
    <img class="cover" :src="item.cover">
  </div>
</template>
<script>
export default {
  name: 'GroupMaterialVideo',
  props: {
    item: {
      default () {
        return {}
      },
      type: Object
    },
    type: { // 0 视频组 1图片组
      default: '0',
      type: String
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .item{
    width:246px;
    height:138px;
    position: relative;
    color:#fff;
    text-align: center;
    font-size:20px;
    .cover{
      width:100%;
      height:100%;
    }
    .label{
      font-weight: 600;
    }
    .count{
      margin-top:4px;
      font-weight: 400;
    }
    &.item_image{
      height:184px;
    }
    &:hover{
      .item_bg{
        display: none;
      }
    }
    &:active{
      border:2px solid rgba(173,0,0,1);
    }
  }
  .item_bg{
    width:100%;
    height:100%;
    background:linear-gradient(360deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%);
    position: absolute;
    padding:0 23px;
    top:0;
    left:0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
