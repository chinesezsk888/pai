<template>
  <div class="loading">
    <img :src="src">
  </div>
</template>
<script>
import loading from '@/assets/loading.gif'
export default {
  name: 'TheLoading',
  data () {
    return {
      src: loading
    }
  }
}
</script>
<style lang="scss" scoped>
  .loading{
    width:100%;
    text-align: center;
    img{
      width:50px;
      height:50px;
    }
  }
</style>
