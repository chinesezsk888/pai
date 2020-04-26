<template>
  <el-dialog
    title="请扫码支付"
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="ele_dialog-center QRcode__dialog"
  >
    <img src="https://testimagecloud.thepaper.cn/testthepaper/image/4/106/836.jpg" alt="">
  </el-dialog>
</template>

<script>
import store from '@/store'
export default {
  name: 'QRCode',
  props: {
    count: Boolean
  },
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  methods: {
    changeShow () {
      store.dispatch({
        type: 'setHeaderPaddingRight',
        value: '0'
      })
      this.count = !this.count
      this.$destroy()
    }
  }
}
</script>
<style lang="scss" scoped>
.QRcode__dialog {
  img {
    display: block;
    width:183px;
    height:183px;
    margin: 71px auto 45px;
  }
}
</style>
