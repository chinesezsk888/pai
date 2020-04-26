<template>
  <el-dialog
    title="支付"
    :visible.sync="count"
    width="456px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="payLoad ele_dialog-center"
  >
    <div class="dialog__center--box">
      <div class="pl__des">将支付<span class="pl__money">233</span>积分，购买<span>24</span>个新素材</div>
      <div class="pl__type__box">
        <div
          class="pt__team"
          @click="selectType($event)"
        >
          我的团长我的团支付
          <p>
            <span>23</span>
            <span>/</span>
            <span>100</span>
            <span>分</span>
            <span>余额不足</span>
          </p>
        </div>
        <div
          class="pt__current__account"
          @click="selectType($event)"
        >
          本账号余额支付
          <p>
            <span>360</span>
            <span>分</span>
            <span class="pa__invest" @click.stop="showInvest($event)">充值</span>
          </p>
        </div>
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
      <div class="primaryBtn" @click="primary()">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
// import WaitStatus from '../PayStatusDialog/WaitStatus'
import SuccessStatus from '../PayStatusDialog/SuccessStatus'
// import FailStatus from '../PayStatusDialog/FailStatus'
import QRCodeDialog from '../QRCodeDialog'
import InvestMoneyDialog from '../InvestMoneyDialog'
export default {
  name: 'PaymentDialog',
  components: {
  },
  props: {
    count: Boolean
  },
  data () {
    return {
      payTypeNum: 3
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
    primary () {
      // 发送购买请求
      this.changeShow()
      if (this.payTypeNum === 3 || this.payTypeNum === 4) {
        QRCodeDialog(true)
      } else {
        // WaitStatus(true)
        SuccessStatus(true)
        // FailStatus(true)
      }
    },
    selectType (e) {
      const val = e.currentTarget.innerText
      const borderDoms = e.currentTarget.parentNode.children
      borderDoms.forEach(item => {
        item.style.border = '1px solid rgba(216,216,216,1)'
      })
      e.currentTarget.style.border = '1px solid rgba(0,0,0,1)'
      if (val.indexOf('本账号余额') != -1) {
        this.payTypeNum = 1
      } else if (val.indexOf('我的团长我的团') != -1) {
        this.payTypeNum = 2
      } else if (val.indexOf('支付宝') != -1) {
        this.payTypeNum = 3
      } else if (val.indexOf('微信') != -1) {
        this.payTypeNum = 4
      }
    },
    showInvest (e) {
      console.log(e.currentTarget)
      // 充值弹框显示
      this.changeShow()
      InvestMoneyDialog(true)
    }
  }
}
</script>
<style lang="scss" scoped>
.payLoad {
  .dialog__center--box {
    padding: 30px 0 60px;
  }
  .pl__des {
    font-size:16px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:22px;
    margin-bottom: 40px;
    .pl__money {
      font-size:18px;
      font-weight:400;
      color:rgba(173,0,0,1);
      line-height:21px;
      margin: 0 5px;
      vertical-align: middle;
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
      > span {
        font-size:14px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:20px;
      }
      > p {
        font-size:14px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:20px;
        margin-top: 7px;
        > span {
          font-size:20px;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:24px;
        }
        & span:nth-last-child(2) {
          font-size:14px;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:20px;
          margin-left: 4px;
        }
        & span:nth-last-child(1) {
          font-size:12px;
          font-weight:400;
          color:rgba(153,153,153,1);
          vertical-align: baseline;
          margin-left: 3px;
        }
        & span.pa__invest {
          display: inline-block;
          font-size:12px;
          font-weight:500;
          color:rgba(0,0,0,1);
          line-height:18px;
          margin-left: 13px;
          border-bottom: 1px solid rgba(0,0,0,1);
          padding: 0 1px;
          cursor: pointer;
        }
      }
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
