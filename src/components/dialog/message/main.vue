<template>
  <el-dialog
    :title="title"
    :visible.sync="visiable"
    width="440px"
    center
    append-to-body
    :before-close="closeHandle"
    custom-class="ele_dialog-center"
  >
    <div class="content">{{ msg }}</div>
    <div class="btn_submit" @click="closeHandle">确 定</div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'MessageDialog',
  props: {
    visiable: Boolean,
    msg: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    }
  },
  methods: {
    closeHandle () {
      store.dispatch({
        type: 'setHeaderPaddingRight',
        value: '0'
      })
      this.visiable = !this.visiable
      this.$destroy()
    }
  }
}
</script>
<style scoped>
.content{
  width:300px;
  height:40px;
  font-size:14px;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:20px;
  margin:40px 0 50px;
}
.btn_submit
{
  width:150px;
  height:40px;
  font-size:14px;
  font-weight:400;
  border-radius:2px;
  text-align: center;
  border:1px solid #ccc;
  box-sizing: border-box;
  line-height: 38px;
  background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
  color:rgba(255,255,255,1);
  cursor: pointer;
  margin: 0 auto;
}
</style>
