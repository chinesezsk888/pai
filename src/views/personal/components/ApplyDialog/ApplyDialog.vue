<template>
  <el-dialog
    title="申请提现"
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="ele_dialog-center apply__dialog"
  >
    <div class="dialog__center--box">
      <div class="ad__num">
        <p>可提现金额</p>
        <p>
          <span class="an__money">1,234.00</span>
          <span>元</span>
          <span>不含手续费</span>
        </p>
      </div>
      <el-form ref="cashForm" :model="cashForm" :rules="rules" class="cash__form ele_form_dialog">
        <el-form-item
          label="提现金额"
          prop="cashMoney"
          class="cash__item"
        >
          <el-input v-model="cashForm.cashMoney" autocomplete="off" placeholder="当前账户名或资账户名" />
          <p>本次提现将减少对应积分XXX分，申请提交后积分将立刻扣除</p>
          <span>全部提现</span>
        </el-form-item>
      </el-form>
      <p class="pay__type"><span />支付方式</p>
      <div class="cash__type__box">
        <p :class="{selected:checkRed==='1'}" @click="selectType($event)"><span />支付宝</p>
        <p :class="{selected:checkRed==='2'}" @click="selectType($event)"><span />微信</p>
        <p :class="{selected:checkRed==='3'}" @click="selectType($event)">
          <span />
          <span>收款账户</span>
          <span>6058 4048 1200 268</span>
        </p>
      </div>
      <p class="pay__cycle">提现款预计将在30个工作日内到账</p>
    </div>
    <div slot="footer" class="dialog-footer">
      <div class="primaryBtn" @click="sendFrom('cashForm')">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
import DefineApplyNum from '../DefineApplyNum'
export default {
  name: 'ApplyDialog',
  props: {
    count: Boolean
  },
  data () {
    var validateCash = (rule, value, callback) => {
      var regex = /^[0-9]*$/
      if (value === '') {
        callback(new Error('请输入充值金额'))
      } else if (!regex.test(value.trim())) {
        callback(new Error('必须为数字'))
      } else {
        callback()
      }
    }
    return {
      cashForm: {
        cashMoney: ''
      },
      checkRed: '3',
      rules: {
        cashMoney: [{ required: true, validator: validateCash, trigger: 'blur' }]
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
    sendFrom (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var Obj = this.formData()
          console.log(Obj)
          this.resetForm(formName)
          this.changeShow()
          DefineApplyNum(true)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    formData () {
      const formObj = {}
      formObj.cashMoney = this.cashForm.cashMoney
      formObj.checkRed = this.checkRed
      return formObj
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.apply__dialog {
  ::v-deep &.el-dialog {
    padding: 40px 56px 40px 60px;
  }
  .dialog__center--box {
    padding: 30px 0 60px;
  }
  .ad__num {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    & p:nth-child(1) {
      font-size:16px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:22px;
    }
    & p:nth-child(2) {
      .an__money {
        font-size:20px;
        font-family: RobotoCondensed-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:24px;
      }
      & span:nth-child(2) {
        font-size:12px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:17px;
        margin: 0 5px;
      }
      & span:nth-last-child(1) {
        font-size:12px;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:20px;
      }
    }
  }
  .cash__form {
    margin-bottom: 20px;
    .cash__item {
      position: relative;
      padding-top: 20px;
      ::v-deep .el-input__inner {
        height: 28px;
        padding-left: 20px;
      }
      ::v-deep .el-form-item__label {
        line-height: 20px;
        position: absolute;
        top: 0px;
        left: 0px;
        &::before {
          left: -10px;
          top: 8px;
        }
      }
      p {
        font-size:12px;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:20px;
      }
      span {
        position: absolute;
        top: -20px;
        right: 0;
        font-size:12px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:20px;
        cursor: pointer;
      }
    }
    .el-form-item {
      position: relative;
      ::v-deep &.is-required:not(.is-no-asterisk) .el-form-item__label-wrap>.el-form-item__label:before,
      ::v-deep &.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
        content: '';
        display:block;
        width:4px;
        height:4px;
        left: -10px;
        top: 10px;
        position: absolute;
        border-radius: 50%;
        background-color:#E20613;
      }
    }
  }
  .pay__type {
    font-size:14px;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:20px;
    margin-bottom: 8px;
    position: relative;
    span {
      width:4px;
      height:4px;
      background-color:#E20613;
      position: absolute;
      left: -10px;
      top: 8px;
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
      margin-bottom: 7px;
      font-size:14px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:20px;
      & span:nth-child(1) {
        width:12px;
        height:12px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(216,216,216,1);
        box-sizing: border-box;
      }
      span {
        margin-right: 8px;
      }
    }
    & p:nth-last-child(1) {
      & span:nth-last-child(1) {
        font-size:16px;
        font-weight:600;
        color:rgba(51,51,51,1);
        line-height:19px;
        margin-top: 2px;
      }
    }
    .selected {
      span:nth-child(1) {
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
  .pay__cycle {
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:22px;
    margin-top: 30px;
  }
  .dialog-footer {
    .primaryBtn {
      width: 100%;
    }
  }
}
</style>
