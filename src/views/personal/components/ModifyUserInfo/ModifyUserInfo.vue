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
    <div class="dialog__center--box">
      <p class="cui__user">用户名XXXXX</p>
      <el-form ref="changeInfoFrom" :model="changeInfoFrom" :rules="rules" class="change__info--form ele_form_dialog">
        <el-form-item
          label="密码"
          class="cif__password"
        >
          <el-input v-model="changeInfoFrom.password" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item
          label="邮箱"
          class="cif__email"
        >
          <el-input v-model="changeInfoFrom.email" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item
          label="手机号"
          prop="telephone"
          class="cif__telephone"
        >
          <el-input v-model="changeInfoFrom.telephone" autocomplete="off" placeholder="" />
          <!-- <p class="must__star">*</p> -->
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="code"
          class="cif__code"
        >
          <div class="code__box">
            <el-input v-model="changeInfoFrom.code" autocomplete="off" placeholder="" />
            <!-- <p class="must__star">*</p> -->
            <div class="get__code" @click="getCode()">发送验证码</div>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <div class="primaryBtn" @click="sendFrom('changeInfoFrom')">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'ModifyUserInfo',
  props: {
    count: Boolean
  },
  data () {
    return {
      changeInfoFrom: {
        password: '',
        email: '',
        telephone: '',
        code: ''
      },
      rules: {
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
      store.dispatch({
        type: 'setHeaderPaddingRight',
        value: '0'
      })
      this.count = !this.count
      this.$destroy()
      console.log(this.changeInfoFrom)
    },
    sendFrom (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var Obj = this.formData()
          console.log(Obj)
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
      this.changeInfoFrom.email = ''
      this.changeInfoFrom.telephone = ''
      this.changeInfoFrom.password = ''
      this.changeInfoFrom.code = ''
    },
    formData () {
      const formObj = {}
      formObj.password = this.changeInfoFrom.password
      formObj.email = this.changeInfoFrom.email
      formObj.telephone = this.changeInfoFrom.telephone
      formObj.code = this.changeInfoFrom.code
      return formObj
    }
  }
}
</script>
<style lang="scss" scoped>
.check__user__info {
  .dialog__center--box {
    padding: 32px 0 60px;
  }
  .cui__user {
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:22px;
    margin-bottom: 20px;
  }
  .change__info--form {
    .cif__code {
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
        }
      }
    }
  }
  .dialog-footer {
    .primaryBtn {
      width: 100%;
    }
  }
}
</style>
