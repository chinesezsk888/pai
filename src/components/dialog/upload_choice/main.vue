<template>
  <el-dialog
    title="上传素材"
    :visible.sync="visiable"
    width="440px"
    center
    append-to-body
    :before-close="closeHandle"
    custom-class="ele_dialog-center"
  >
    <div class="content">
      <div class="infor">请选择素材类型<br>上传一个文件未单素材，同时上传多个文件为组素材</div>
      <ul>
        <li :class="setClass(1)" @click="setOn(1)">上传视频</li>
        <li :class="setClass(2)" @click="setOn(2)">上传图片</li>
        <li :class="setClass(3)" @click="setOn(3)">上传音频</li>
      </ul>
    </div>
    <div class="btn_submit" @click="goUploadPage">确 定</div>
  </el-dialog>
</template>
<script>
import store from '@/store'
import router from '@/router'
export default {
  name: 'UploadChoiceDialog',
  props: {
    visiable: Boolean
  },
  data () {
    return {
      uploadStyle: 1 // 1视频 2图片 3音频
    }
  },
  methods: {
    setClass (style) {
      let result = ''
      if (this.uploadStyle == style) {
        result = 'on'
      }
      return result
    },
    setOn (style) {
      this.uploadStyle = style
    },
    closeHandle () {
      store.dispatch({
        type: 'setHeaderPaddingRight',
        value: '0'
      })
      this.visiable = !this.visiable
      this.$destroy()
    },
    goUploadPage () {
      router.push('/upload')
      this.closeHandle()
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
  padding-top:30px;
  ul{
    width:100%;
    border:0.5px solid #D8D8D8;
    border-radius: 2px;
    margin-bottom:60px;
  }
  li{
    cursor: pointer;
    border:0.5px solid #D8D8D8;
    height:48px;
    line-height: 48px;
    font-size:14px;
    color:#000;
    text-align: center;
  }
  .on{
    border:0.5px solid #000;
  }
}

.infor{
  font-size:14px;
  color:#000;
  margin-bottom:22px;
  text-align: center;
  width: 322px;
}
.btn_submit{
  width:100%;
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
