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
    <div class="dialog__center--box">
      <p>将支付<span>330</span>元</p>
      <img src="https://testimagecloud.thepaper.cn/testthepaper/image/4/106/836.jpg" alt="">
    </div>
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
  .dialog__center--box {
    padding: 30px 65px 40px;
  }
  p {
    font-size:16px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:22px;
    text-align: center;
    margin-bottom: 24px;
    span {
      font-size:18px;
      font-weight:400;
      color:rgba(173,0,0,1);
      line-height:21px;
      font-family: RobotoCondensed-Regular;
    }
  }
  img {
    width:190px;
    height:190px;
  }
}
</style>
