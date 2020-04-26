<template>
  <el-dialog
    title="创建新系列"
    :visible.sync="visiable"
    width="440px"
    center
    append-to-body
    :before-close="closeHandle"
    custom-class="ele_dialog-center"
  >
    <el-form
      ref="groupForm"
      :model="groupForm"
      :rules="rules"
      size="mini"
      class="login_dialog"
    >
      <el-form-item
        label="标题"
        prop="title"
      >
        <el-input v-model="groupForm.title" autocomplete="off" placeholder="输入内容" />
      </el-form-item>
      <el-form-item
        label="摘要："
        prop="desc"
      >
        <el-input v-model="groupForm.desc" type="textarea" autocomplete="off" placeholder="输入内容" />
      </el-form-item>
      <el-form-item size="large" style="margin-top:40px">
        <div class="btn_close" @click="closeHandle">取消</div>
        <div class="btn_submit" @click="sendFrom('loginForm')">确定</div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: 'CheckDialog',
  props: {
    visiable: Boolean
  },
  data () {
    return {
      groupForm: {
        title: '',
        desc: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { max: 20, message: '长度应小于 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    closeHandle () {
      this.visiable = !this.visiable
      this.$destroy()
    },
    sendFrom (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
.login_dialog{
  width: 320px;
  margin: 0 auto;
}
.btn_close,.btn_submit
{
  float:left;
  width:150px;
  height:40px;
  font-size:14px;
  font-weight:400;
  border-radius:2px;
  text-align: center;
  border:1px solid #ccc;
  box-sizing: border-box;
  line-height: 38px;
  color:rgba(0,0,0,1);
  cursor: pointer;
}
.btn_submit{
  background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
  margin-left: 0px;
  color:rgba(255,255,255,1);
  margin-left:20px;
}
</style>
<style>
.el-form-item--mini.el-form-item{
  margin-bottom:20px
}
</style>
