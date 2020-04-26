<template>
  <el-dialog
    title="申请退款"
    :visible.sync="count"
    width="660px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="ele_dialog-center apply__refund"
  >
    <div class="dialog__center--box">
      <div class="odd__numbers--box">
        <p>交易单号</p>
        <el-dropdown
          trigger="click"
          size="small"
          @command="changeOddNum"
        >
          <span class="el-dropdown-link">
            {{ OddNumSelect }} <i class="el-icon-arrow-down el-icon-caret-bottom" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in OddNumList"
              :key="item.id"
              :command="item.name"
            >
              {{ item.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="omb__table">
        <p class="ot__media__type">音乐</p>
        <div class="ot__media__add">
          <p class="oma__num">13</p>
          <el-popover
            v-if="omaDec"
            placement="bottom-start"
            trigger="hover"
            :content="omaDec"
            width="332px"
          >
            <p
              slot="reference"
              class="oma__dec"
            >
              {{ omaDec | omaDecfilter }}
            </p>
          </el-popover>
        </div>
        <p class="omb__time">2019-12-12 12:21:21</p>
        <p class="omb__bug">购买</p>
        <div class="omb__moeny__box">
          <span>-</span>
          <span class="moeny__num">123</span>
          <span class="money__unit">元</span>
        </div>
      </div>
      <div class="refund__reason--box">
        <p>退款原因</p>
        <el-dropdown
          trigger="click"
          size="small"
          @command="changeRefundId"
        >
          <span class="el-dropdown-link">
            {{ RefundIdSelect }} <i class="el-icon-arrow-down el-icon-caret-bottom" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in RefundIdList"
              :key="item.id"
              :command="item.name"
            >
              {{ item.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <textarea
        v-model="refundReason"
        class="refund__reason--textarea"
        placeholder="请填写说明"
      />
      <el-form ref="applyRefundFrom" :model="applyRefundFrom" :rules="rules" class="apply__refund--form ele_form_dialog">
        <el-form-item
          label="手机号"
          prop="tel"
          class="arf__tel"
        >
          <el-input v-model="applyRefundFrom.tel" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="code"
          class="arf__code"
        >
          <div class="code__box">
            <el-input v-model="applyRefundFrom.code" autocomplete="off" placeholder="" />
            <div class="get__code" @click="getCode()">发送验证码</div>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <div class="primaryBtn" @click="sendFrom('applyRefundFrom')">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'ApplyRefund',
  filters: {
    omaDecfilter (val) {
      if (val.length > 13) {
        return val.slice(0, 12) + '...'
      } else {
        return val
      }
    }
  },
  props: {
    count: Boolean
  },
  data () {
    return {
      OddNumSelect: '1234567890',
      OddNumList: [
        { name: '1234567890', id: '1' },
        { name: '1269567898', id: '2' },
        { name: '1234567458', id: '3' }
      ],
      omaDec: '一二三四五七十一四五七十四五七十二',
      RefundIdSelect: '1234567890',
      RefundIdList: [
        { name: '1234567890', id: '1' },
        { name: '1269567898', id: '2' },
        { name: '1234567458', id: '3' }
      ],
      refundReason: '',
      applyRefundFrom: {
        tel: '',
        code: ''
      },
      rules: {
        tel: [
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
    changeOddNum (data) {
      this.OddNumSelect = data
    },
    changeRefundId (data) {
      this.RefundIdSelect = data
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
      this.applyRefundFrom.tel = ''
      this.applyRefundFrom.code = ''
      this.refundReason = ''
    },
    formData () {
      const formObj = {}
      formObj.tel = this.applyRefundFrom.tel
      formObj.code = this.applyRefundFrom.code
      formObj.refundReason = this.refundReason
      formObj.RefundIdSelect = this.RefundIdSelect
      return formObj
    }
  }
}
</script>
<style lang="scss" scoped>
.apply__refund {
  .dialog__center--box {
    padding: 30px 0 60px;
  }
  .odd__numbers--box,.refund__reason--box {
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    margin-bottom: 13px;
    p {
      font-size:16px;
      font-weight:600;
      color:rgba(0,0,0,1);
      line-height:22px;
      margin-right: 12px;
    }
    ::v-deep .el-dropdown {
      width:115px;
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
  .omb__table {
    width: 100%;
    height: 40px;
    border: 1px solid rgba(243,243,244,1);
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    .ot__media__type, .omb__time,.omb__bug,.omb__moeny__box {
      height: 100%;
      line-height: 38px;
      text-align: center;
      font-size:14px;
      font-weight:400;
      color:rgba(51,51,51,1);
      border-right: 1px solid rgba(243,243,244,1);
    }
    .ot__media__type,.omb__bug {
      width: 44px;
    }
    .omb__time {
      width: 146px;
    }
    .ot__media__add {
      width: 220px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid rgba(243,243,244,1);
      .oma__num {
        font-size:16px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:19px;
        font-family: RobotoCondensed-Regular;
        margin-right: 8px;
      }
      .oma__dec {
        font-size:14px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:20px;
      }
    }
    div.omb__moeny__box {
      width: 89px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: none;
      & span:nth-child(2) {
        font-size:22px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:25px;
        margin: 0 8px;
        font-family: RobotoCondensed-Regular;
      }
    }
  }
  .refund__reason--textarea {
    padding: 5px 12px;
    width: 100%;
    height: 80px;
    resize: none;
    margin-bottom: 36px;
  }
  .apply__refund--form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ::v-deep .el-input__inner {
      padding: 0 20px 0 65px;
    }
    ::v-deep .el-form-item {
      margin-bottom: 0px;
    }
    .arf__tel,.arf__code {
      width: 260px;
      height: 40px;
    }
    .arf__code {
      .code__box {
        position: relative;
        ::v-deep .el-input {
          width: 156px;
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
