<template>
  <el-dialog
    title="购买下载"
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="buyLoad ele_dialog-center"
  >
    <p>还没有下载权利一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五二三四五六七八九十一二</p>
    <div slot="footer" class="dialog-footer">
      <div class="closeBtn" @click="changeShow()">取 消</div>
      <div class="primaryBtn" @click="primary()">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'BuyLoadDialog',
  props: {
    count: Boolean
  },
  data () {
    return {}
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
    primary () {
      // 发送购买请求
      this.count = !this.count
      this.$destroy()
    }
  }
}
</script>
<style lang="scss" scoped>
.buyLoad {
  p {
    font-size:14px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:20px;
    padding: 30px 0 60px;
  }
}
</style>
