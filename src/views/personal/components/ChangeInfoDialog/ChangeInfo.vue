<template>
  <el-dialog
    title="修改信息"
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="ele_dialog-center check__user__info"
  >
    <el-form ref="changeInfoFrom" :model="changeInfoFrom" :rules="rules" class="change__info--form ele_form_dialog">
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input v-model="changeInfoFrom.username" autocomplete="off" placeholder="" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input v-model="changeInfoFrom.password" autocomplete="off" placeholder="" />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="confirmPassword"
      >
        <el-input v-model="changeInfoFrom.confirmPassword" autocomplete="off" placeholder="" />
      </el-form-item>
      <el-form-item
        label="邮箱"
        prop="email"
        class="sa__email--item"
      >
        <el-input v-model="changeInfoFrom.email" autocomplete="off" placeholder="" />
      </el-form-item>
      <el-form-item
        label="手机号"
        prop="telephone"
      >
        <el-input v-model="changeInfoFrom.telephone" autocomplete="off" placeholder="" />
      </el-form-item>
      <el-form-item
        label="验证码"
        prop="code"
        class="sa__code--item"
      >
        <div class="code__box">
          <el-input v-model="changeInfoFrom.code" autocomplete="off" placeholder="" />
          <div class="get__code" @click="getCode()">发送验证码</div>
        </div>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <div class="closeBtn" @click="changeShow()">取 消</div>
      <div class="primaryBtn" @click="sendFrom('changeInfoFrom')">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'CheckInfoDialog',
  props: {
    count: Boolean
  },
  data () {
    return {
      changeInfoFrom: {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        telephone: '',
        code: ''
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '必填' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '必填' }
        ],
        confirmPassword: [
          { required: true, trigger: 'blur', message: '必填' }
        ],
        telephone: [
          { required: true, trigger: 'blur', message: '必填' }
        ],
        code: [
          { required: true, trigger: 'blur', message: '必填' }
        ]
      }
    }
  },
  methods: {
    changeShow () {
      this.count = !this.count
      this.$destroy()
      console.log(this.changeInfoFrom)
    },
    sendFrom (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
          this.resetForm(formName)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getCode () {
      console.log('获取验证码')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.check__user__info {
  .change__info--form {
    padding: 32px 0 60px;
    .el-form-item {
      margin-bottom: 21px;
      ::v-deep .el-input__inner {
        border-radius:2px;
        border:1px solid rgba(216,216,216,1);
      }
      ::v-deep .el-form-item__error {
        padding-top: 0px;
      }
    }
    .el-form-item:nth-last-child(1) {
      margin-bottom: 0px;
    }
    ::v-deep .el-form-item__label {
      font-size:14px;
      color:rgba(51,51,51,1);
    }
    ::v-deep .sa__email--item {
      .el-form-item__label {
        margin-left: 0px;
      }
    }
    .sa__code--item {
      .code__box {
        position: relative;
        ::v-deep .el-input {
          width: 216px;
        }
        .get__code {
          width:100px;
          height:40px;
          text-align: center;
          font-size:14px;
          font-weight:400;
          color:rgba(0,0,0,1);
          border-radius:2px;
          border:1px solid rgba(102,102,102,1);
          line-height:38px;
          box-sizing: border-box;
          position: absolute;
          right: 0;
          top: 0;
          cursor: pointer;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
