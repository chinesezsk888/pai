<template>
  <el-dialog
    title="用户登录"
    :visible.sync="visiable"
    width="440px"
    center
    append-to-body
    :before-close="closeHandle"
    custom-class="ele_dialog-center"
  >
    <div class="login_dialog">
      <el-tabs v-model="activeName">
        <el-tab-pane label="手机验证登录" name="first">
          <el-form
            ref="loginFormPhone"
            :model="loginFormPhone"
            :rules="rules"
            class="ele_form_dialog"
          >
            <el-form-item
              label="手机号"
              prop="phone"
            >
              <el-input v-model="loginFormPhone.phone" autocomplete="off" />
            </el-form-item>
            <el-form-item
              label="验证码"
              prop="phoneCode"
            >
              <el-input v-model="loginFormPhone.phoneCode" autocomplete="off" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="用户名登录" name="second">
          <el-form
            ref="loginFormUsername"
            :model="loginFormUsername"
            :rules="rules"
            class="ele_form_dialog"
          >
            <el-form-item
              label="用户名"
              prop="username"
            >
              <el-input v-model="loginFormUsername.username" autocomplete="off" />
            </el-form-item>
            <el-form-item
              label="密码"
              prop="password"
            >
              <el-input v-model="loginFormUsername.password" autocomplete="off" />
            </el-form-item>
            <el-form-item
              label="验证码"
              prop="checkCode"
            >
              <el-input v-model="loginFormUsername.checkCode" autocomplete="off" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <div class="login_links">
        <el-checkbox label="下次自动登录" name="type" />
        <a>忘记密码?</a>
      </div>
    </div>
    <div slot="footer" class="btns">
      <div class="btn_close" @click="showRegister()">注册</div>
      <div class="btn_submit" @click="sendFrom('loginForm')">登录</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
import { showRegister } from '@/components/dialog'
export default {
  name: 'LoginDialog',
  components: {
  },
  props: {
    visiable: Boolean
  },
  data () {
    return {
      activeName: 'second',
      loginFormPhone: {
        phone: '',
        phoneCode: ''
      },
      loginFormUsername: {
        checkCode: '',
        username: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        phoneCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 20, message: '长度应小于 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
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
    showRegister () {
      showRegister()
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
.login_links{
  display:flex;
  margin-top:8px;
  justify-content: space-between;
}
.login_dialog{
  padding-top:10px;
  ::v-deep .el-tabs__item{
    font-size: 16px;
    padding: 0 16px;
  }
  ::v-deep .ele_form_dialog .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before{
    background-color: #fff;
  }
}
.btns{
  margin-top:60px;
}
.btn_close,.btn_submit{
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
