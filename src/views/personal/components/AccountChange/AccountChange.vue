<template>
  <el-dialog
    title="账户变更"
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="ele_dialog-center account__change__info"
  >
    <div class="dialog__center--box">
      <p class="cui__user">用户名XXXXX</p>
      <div class="account__type--box">
        <p class="pay__type"><span />支付方式</p>
        <div class="cash__type__box">
          <p :class="{selected:checkRed==='1'}" @click="selectType($event)"><span class="ctb__select" />支付宝</p>
          <p :class="{selected:checkRed==='2'}" @click="selectType($event)"><span class="ctb__select" />微信</p>
          <p :class="{selected:checkRed==='3'}" @click="selectType($event)">
            <span class="ctb__select" />
            <span>银行</span>
          </p>
          <el-dropdown
            trigger="click"
            size="small"
            @command="changeBack"
          >
            <span class="el-dropdown-link">
              {{ backSelect }} <i class="el-icon-arrow-down el-icon-caret-bottom" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="item in backList"
                :key="item.id"
                :command="item.name"
              >
                {{ item.name }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <el-form ref="accountChangeFrom" :model="accountChangeFrom" :rules="rules" class="account__change--form ele_form_dialog">
        <el-form-item
          label="更新账号"
          prop="account"
          class="acf__account"
        >
          <el-input v-model="accountChangeFrom.account" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item
          label="账户密码"
          prop="account"
          class="acf__password"
        >
          <el-input v-model="accountChangeFrom.password" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="code"
          class="acf__code"
        >
          <div class="code__box">
            <el-input v-model="accountChangeFrom.code" autocomplete="off" placeholder="" />
            <div class="get__code" @click="getCode()">发送验证码</div>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <div class="primaryBtn" @click="sendFrom('accountChangeFrom')">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'AccountChange',
  props: {
    count: Boolean
  },
  data () {
    return {
      checkRed: '3',
      backList: [
        { name: '中国工商银行', id: '1' },
        { name: '中国建设银行', id: '2' },
        { name: '中国招商银行', id: '3' }
      ],
      backSelect: '中国工商银行',
      accountChangeFrom: {
        account: '',
        password: '',
        code: ''
      },
      rules: {
        account: [
          { required: true, trigger: 'blur', message: '必填' }
        ],
        password: [
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
    },
    selectType (event) {
      const val = event.currentTarget.innerText
      if (val === '支付宝') {
        this.checkRed = '1'
      } else if (val === '微信') {
        this.checkRed = '2'
      } else {
        this.checkRed = '3'
      }
    },
    changeBack (data) {
      this.backSelect = data
      console.log(this.backSelect)
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
      this.accountChangeFrom.account = ''
      this.accountChangeFrom.password = ''
      this.accountChangeFrom.code = ''
    },
    formData () {
      const formObj = {}
      if (this.checkRed === '3') {
        formObj.backSelect = this.backSelect
      } else {
        formObj.backSelect = ''
      }
      formObj.checkRed = this.checkRed
      formObj.password = this.accountChangeFrom.password
      formObj.account = this.accountChangeFrom.account
      formObj.code = this.accountChangeFrom.code
      return formObj
    }
  }
}
</script>
<style lang="scss" scoped>
.account__change__info {
  .dialog__center--box {
    padding: 30px 0 60px;
  }
  .cui__user {
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:22px;
    margin-bottom: 20px;
  }
  .account__type--box {
    margin-bottom: 18px;
      .pay__type {
        font-size:14px;
        font-weight:600;
        color:rgba(51,51,51,1);
        line-height:20px;
        position: relative;
        padding-left: 16px;
        span {
          margin-right: 4px;
          position: absolute;
          top: 8px;
          left: 5px;
          width:4px;
          height:4px;
          background-color:#E20613;
          border-radius: 50%;
        }
      }
    .cash__type__box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        font-size:14px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:20px;
        & .ctb__select {
          width:12px;
          height:12px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(216,216,216,1);
          box-sizing: border-box;
        }
        span {
          margin-right: 4px;
        }
      }
      & p:nth-child(3) {
        margin-right: 0;
      }
      ::v-deep .el-dropdown {
        width:118px;
        height: 28px;
        border-radius:2px;
        border:1px solid rgba(216,216,216,1);
        text-align: center;
        line-height: 26px;
        box-sizing: border-box;
        font-size:13px;
        font-weight:400;
        color:rgba(51,51,51,1);
        span {
          margin-right: 0;
        }
      }
    }
    .selected {
      .ctb__select {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          background-color: red;
        }
      }
    }
  }
  .account__change--form {
    .acf__account,.acf__password {
      margin-bottom: 20px;
    }
    .acf__code {
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
