<template>
  <el-dialog
    title="充值"
    :visible.sync="count"
    width="456px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="investLoad ele_dialog-center"
  >
    <div class="dialog__center--box">
      <div class="pl__des">余额：<span class="pl__money">360</span>积分(1元换购1个积分)</div>
      <el-form ref="investForm" :model="investForm" :rules="rules" class="invest__form ele_form_dialog">
        <el-form-item
          label="充值金额"
          prop="investMoney"
          class="invest__item"
        >
          <el-input v-model="investForm.investMoney" autocomplete="off" placeholder="人民币金额" @change="changeInvest()" />
        </el-form-item>
      </el-form>
      <p class="pay__type"><span />支付方式</p>
      <div class="pl__type__box">
        <div
          class="pt__ali borderBlod"
          @click="selectType($event)"
        >
          <p />支付宝支付
        </div>
        <div
          class="pt__weixin"
          @click="selectType($event)"
        >
          <p />微信支付
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <div class="primaryBtn" @click="primary('investForm')">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
// import PersonalSuccess from '../BugStatusDialog/PersonalSuccess'
// import TeamSuccess from '../BugStatusDialog/TeamSuccess'
import QRCodeDialog from '../QRCodeDialog'

export default {
  name: 'InvestMoneyDialog',
  components: {
  },
  props: {
    count: Boolean
  },
  data () {
    var validateInvest = (rule, value, callback) => {
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
      investForm: {
        investMoney: ''
      },
      rules: {
        investMoney: [
          { required: true, validator: validateInvest, trigger: 'blur' }
        ]
      },
      sendInfo: {
        payType: '1',
        investMoney: ''
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
    changeInvest () {
      this.sendInfo.investMoney = this.investForm.investMoney
    },
    selectType (e) {
      const borderDoms = e.currentTarget.parentNode.children
      borderDoms.forEach(item => {
        item.style.border = '1px solid rgba(216,216,216,1)'
      })
      e.currentTarget.style.border = '1px solid rgba(0,0,0,1)'
      if (e.target.className === 'pt__ali') {
        this.sendInfo.payType = '1'
      } else {
        this.sendInfo.payType = '2'
      }
    },
    primary (formName) {
      // 发送购买请求
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$refs[formName].resetFields()
          this.changeShow()
          console.log(this.sendInfo)
          // PersonalSuccess(true)
          // TeamSuccess(true)
          QRCodeDialog(true)
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.investLoad {
  .dialog__center--box {
    padding: 30px 0 60px;
    box-sizing: content-box;
  }
  .pl__des {
    font-size:16px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:22px;
    margin-bottom: 18px;
    .pl__money {
      font-size:18px;
      font-weight:400;
      color:rgba(173,0,0,1);
      line-height:21px;
      margin: 0 5px;
      vertical-align: middle;
    }
  }
  .invest__form {
    margin-bottom: 18px;
    .el-form-item {
      position: relative;
      padding-top: 25px;
      ::v-deep .el-input__inner {
        height: 28px;
        line-height: 25px;
        padding: 0 12px;
      }
      ::v-deep .el-form-item__label,
      ::v-deep .el-form-item__content {
        line-height: 25px;
      }
      ::v-deep .el-form-item__label {
        line-height: 20px;
        position: absolute;
        top: 0px;
        left: 0px;
        &::before {
          left: -11px;
          top: 8px;
        }
      }
      ::v-deep &.is-required:not(.is-no-asterisk) .el-form-item__label-wrap>.el-form-item__label:before,
      ::v-deep &.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
        content: '';
        display:block;
        width:4px;
        height:4px;
        left: -10px;
        top: 8px;
        position: absolute;
        border-radius: 50%;
        background-color:#E20613;
      }
    }
  }
  .pay__type {
    font-size:14px;
    font-weight:700;
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
  .pl__type__box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > div {
      width:160px;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
      box-sizing: border-box;
      padding: 12px;
      margin-bottom: 16px;
      &.borderBlod {
        border: 1px solid rgba(0,0,0,1);
      }
    }
    .pt__ali, .pt__weixin {
      display: flex;
      align-items: center;
      font-size:14px;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:20px;
      padding: 11px 12px;
      margin-bottom: 0px;
      p {
        width:24px;
        height:24px;
        background:rgba(22,120,255,1);
        margin-right: 4px;
        margin-top: 0px;
      }
    }
  }
  .primaryBtn {
    width: 100%;
  }
}
</style>
