<template>
  <el-dialog
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :show-close="showClose"
    custom-class="success__dialog ele_dialog-center"
    :close-on-click-modal="unClickModal"
    :before-close="changeShow"
  >
    <div class="pay__status">
      <p>
        <span>支付成功！</span>
        <span>即将进入下载页</span>
      </p>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'SuccessStatus',
  components: {
  },
  props: {
    count: Boolean
  },
  data () {
    return {
      showClose: false,
      unClickModal: true
    }
  },
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
  .pay__status {
    text-align: center;
  }
</style>
