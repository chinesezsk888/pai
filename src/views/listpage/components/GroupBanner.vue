<template>
  <div ref="subBanner" class="sub_banner" :style="{ marginLeft: bannerStyle.marginLeft, marginTop: bannerStyle.marginTop, width:bannerStyle.width,height:bannerStyle.height }">
    <div v-if="type !=2 " class="sub_banner_infor">
      <div class="label">{{ item.label }}</div>
      <div class="count">{{ item.subNum }}个{{ type==0? '视频':'图片' }}</div>
    </div>
    <div v-else class="sub_banner_infor">
      <div class="timer">
        {{ item.label }}
      </div>
    </div>
    <img class="cover" :src="item.cover">
  </div>
</template>
<script>
export default {
  name: 'GroupBanner',
  props: {
    item: {
      default () {
        return {}
      },
      type: Object
    },
    type: {
      default: '0',
      type: String
    },
    point: {
      default () {
        return {
          x: 0,
          y: 0
        }
      },
      type: Object
    }
  },
  data () {
    let width = this.type == 0 ? '246px' : '246px'
    let height = this.type == 0 ? '184px' : '184px'
    let marginTop = '0px'
    let marginLeft = '550px'
    if (this.$store.state.animationPoint.y != -1) {
      marginTop = Math.max(this.$store.state.animationPoint.y - 255, 0) + 'px'
      marginLeft = this.$store.state.animationPoint.x + 'px'
    }
    return {
      bannerStyle: {
        marginLeft,
        marginTop,
        width,
        height
      }
    }
  },
  mounted () {
    this.bannerStyle = {
      marginLeft: 0,
      marginTop: 0,
      width: '100%',
      height: '300px'
    }
  }
}
</script>
<style lang="scss" scoped>
  .sub_banner{
    width:100%;
    height:300px;
    position: relative;
    color:#fff;
    margin-top: 120px;
    transition: all 0.6s ease-in-out;
    .cover{
      width:100%;
      height:100%;
    }
    .label{
      font-weight: 500;
      font-size:36px;
    }
    .count{
      font-weight: 400;
      font-size:30px;
    }
  }
  .sub_banner_infor{
    position: absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.2);
    top:0;
    left:0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .timer{
    width:162px;
    height:162px;
    position: absolute;
    z-index: 15;
    font-size:30px;
    font-weight:500;
    letter-spacing:3px;
    color:#fff;
    background: url(~@/assets/music_card@2x.png);
    background-size:100%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align: center;
    line-height: 162px;
  }
</style>
