<template>
  <el-dialog
    title="用户注册"
    :visible.sync="visiable"
    width="440px"
    center
    append-to-body
    :before-close="closeHandle"
    custom-class="ele_dialog-center"
  >
    <div class="register_dialog">
      <el-form
        ref="registerForm"
        :model="registerForm"
        :rules="rules"
        class="ele_form_dialog"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="registerForm.username" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="registerForm.password" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="email"
        >
          <el-input v-model="registerForm.email" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item
          label="手机号"
          prop="phone"
        >
          <el-input v-model="registerForm.phone" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="checkCode"
        >
          <div class="send_code">
            <el-input v-model="registerForm.checkCode" autocomplete="off" placeholder="" />
            <div class="send_code_btn">发送验证码</div>
          </div>
        </el-form-item>
        <el-form-item size="large" style="margin-top:60px">
          <div class="btn_submit" @click="sendFrom('registerForm')">确 定</div>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'RegisterDialog',
  props: {
    visiable: Boolean
  },
  data () {
    return {
      registerForm: {
        checkCode: '',
        username: '',
        password: '',
        email: '',
        phone: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 20, message: '长度应小于 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        checkCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
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
<style lang="scss" scoped>
.send_code{
  display:flex;
  justify-content: space-between;
  ::v-deep .el-input,
  ::v-deep .el-input__inner{
    width:216px;
  }
}
.send_code_btn{
  cursor: pointer;
  width:100px;
  height:40px;
  line-height: 40px;
  text-align: center;
  font-size:14px;
  color:#000;
  border-radius:2px;
  border:1px solid rgba(102,102,102,1);
}
.register_dialog{
  padding-top:40px;
}
.btn_submit
{
  width:100%;
  height:40px;
  font-size:14px;
  font-weight:400;
  border-radius:2px;
  text-align: center;
  border:1px solid #ccc;
  box-sizing: border-box;
  line-height: 38px;
  cursor: pointer;
  background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
  color:rgba(255,255,255,1);
}
</style>
