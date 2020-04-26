<template>
  <el-dialog
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="ele_dialog-center define__apply__num"
    :show-close="showClose"
    :close-on-click-modal="unClickModal"
  >
    <p> 确认提现<span>1234</span>元？</p>
    <div slot="footer" class="dialog-footer">
      <div class="closeBtn" @click="changeShow()">取 消</div>
      <div class="primaryBtn" @click="sendFrom('changeInfoFrom')">确 定</div>
    </div>
  </el-dialog>
</template>

<script>
import store from '@/store'
export default {
  name: 'DefineApplyNum',
  components: {},
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
    },
    sendFrom () {
      this.changeShow()
    }
  }
}
</script>
<style lang="scss" scoped>
.define__apply__num {
  p {
    text-align: center;
    font-size:24px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:33px;
    padding: 65px 0 104px;
    span {
      font-size:36px;
      font-weight:bold;
      color:rgba(51,51,51,1);
      line-height:42px;
      margin: 0 10px;
    }
  }
}
</style>
