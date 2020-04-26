<template>
  <el-dialog
    title="邀请码"
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="ele_dialog-center"
  >
    <el-form ref="checkForm" :model="checkForm" :rules="rules" class="check__form">
      <el-form-item
        label="邀请码"
        prop="checkCode"
      >
        <el-input v-model="checkForm.checkCode" autocomplete="off" placeholder="请输入邀请码" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <div class="closeBtn" @click="changeShow()">取 消</div>
      <div class="primaryBtn" @click="sendFrom('checkForm')">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'CheckDialog',
  props: {
    count: Boolean
  },
  data () {
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邀请码'))
      }
      if (value !== '***%%^^zs') {
        callback(new Error('请输入正确的邀请码'))
      }
    }
    return {
      checkForm: {
        checkCode: ''
      },
      rules: {
        checkCode: [
          { required: true, validator: validateCode, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    changeShow () {
      this.count = !this.count
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
<style>
.el-dialog .el-form .el-form-item:nth-last-child(1) {
  margin-bottom: 0px;
}
</style>
