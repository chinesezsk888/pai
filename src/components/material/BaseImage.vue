<template>
  <div class="item" :class="{'show':isShow}">
    <img :src="item.url" @click="goImageDetail">
    <base-item-footer :item="item" />
  </div>
</template>
<script>
import BaseItemFooter from './BaseItemFooter'
export default {
  name: 'BaseImage',
  components: {
    BaseItemFooter
  },
  props: {
    item: {
      default () {
        return {}
      },
      type: Object
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.isShow = true
    }, 200)
  },
  methods: {
    goImageDetail () {
      this.$router.push({ name: 'Detail', params: { type: '1' } })
    }
  }
}
</script>
<style lang="scss" scoped>
  img{
    width:100%;
    display: block;
  }
  .item{
    position: relative;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s linear;
    &:active{
      border:2px solid rgba(173,0,0,1);
    }
    &:hover{
      .footer{
        display:block
      }
    }
    &.show{
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
