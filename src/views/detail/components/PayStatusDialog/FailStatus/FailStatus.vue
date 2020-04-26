<template>
  <el-dialog
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :show-close="showClose"
    custom-class="fail__dialog ele_dialog-center"
    :close-on-click-modal="unClickModal"
    :before-close="changeShow"
  >
    <div class="pay__status">
      <p>
        <span>支付未成功</span>
        <span>错误：XXXXXXX</span>
      </p>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'FailStatus',
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
