<template>
  <el-dialog
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :show-close="showClose"
    custom-class="wait__dialog ele_dialog-center"
    :close-on-click-modal="unClickModal"
  >
    <div class="pay__status">
      <p>
        <span>支付中….</span>
        <span>请勿重复操作</span>
      </p>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'WaitStatus',
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
