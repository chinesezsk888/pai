<template>
  <el-dialog
    title="支付"
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="payLoad ele_dialog-center"
  >
    <div class="dialog__center--box">
      <div class="pl__des">将支付<span class="pl__money">233</span>积分，购买<span>24</span>个新素材</div>
      <div class="pl__type__box">
        <div class="pt__team">
          <div class="ptt__top">
            <p
              :class="{selected:checkRed===1}"
              class="type__left"
              @click="selectType($event)"
            >
              <span class="ctb__select" />
              <span>我的团长我的团支付</span>
            </p>
            <p class="type__right">
              <span>23</span>
              <span>/</span>
              <span>100</span>
              <span class="type__unit">分</span>
            </p>
          </div>
          <p class="ptt__warn">
            <span />
            <span>余额不足</span>
          </p>
        </div>
        <div class="pt__other">
          <div class="pt__current__account ptt__top">
            <p
              :class="{selected:checkRed===2}"
              class="type__left"
              @click="selectType($event)"
            >
              <span class="ctb__select" />
              <span>本账号余额支付</span>
            </p>
            <p class="type__right">
              <span>360</span>
              <span class="type__unit">分</span>
              <span class="pa__invest" @click.stop="showInvest($event)">充值</span>
            </p>
          </div>
          <div class="pt__third--party">
            <div
              :class="{selected:checkRed===3}"
              class="pt__ali"
              @click="selectType($event)"
            >
              <span class="ctb__select" />
              <span class="ali__icon" />
              <span>支付宝支付</span>
            </div>
            <div
              :class="{selected:checkRed===4}"
              class="pt__weixin"
              @click="selectType($event)"
            >
              <span class="ctb__select" />
              <span class="weixin__icon" />
              <span>微信支付</span>
            </div>
          </div>
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
// import SuccessStatus from '../PayStatusDialog/SuccessStatus'
// import FailStatus from '../PayStatusDialog/FailStatus'
import QRCodeDialog from '../QRCodeDialog'
import InvestMoneyDialog from '../InvestMoneyDialog'
import TeamSuccess from '../BugStatusDialog/TeamSuccess'
import PersonalSuccess from '../BugStatusDialog/PersonalSuccess'
export default {
  name: 'PaymentDialog',
  components: {
  },
  props: {
    count: Boolean
  },
  data () {
    return {
      checkRed: '1'
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
      if (this.checkRed === 1) {
        TeamSuccess(true)
      } else if (this.checkRed === 3 || this.checkRed === 4) {
        QRCodeDialog(true)
      } else {
        // WaitStatus(true)
        // SuccessStatus(true)
        // FailStatus(true)
        PersonalSuccess(true)
      }
    },
    selectType (e) {
      const val = e.currentTarget.innerText
      if (val.indexOf('我的团长我的团') != -1) {
        this.checkRed = 1
      } else if (val.indexOf('本账号余额') != -1) {
        this.checkRed = 2
      } else if (val.indexOf('支付宝') != -1) {
        this.checkRed = 3
      } else if (val.indexOf('微信') != -1) {
        this.checkRed = 4
      }
    },
    showInvest (e) {
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
    font-size:14px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:22px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(216,216,216,1);
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
    .ptt__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .type__left {
        & span:nth-last-child(1) {
          font-size:14px;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:20px;
        }
      }
      .type__right {
        font-size:20px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:24px;
        .type__unit {
          font-size:14px;
          line-height:20px;
          margin-left: 4px;
        }
        .pa__invest {
          font-size:12px;
          font-weight:600;
          color:rgba(0,0,0,1);
          line-height:18px;
          border-bottom: 1px solid rgba(0,0,0,1);
          margin-left: 13px;
          cursor: pointer;
        }
      }
    }
    .pt__team {
      padding: 19px 0 20px;
      border-bottom: 1px solid rgba(216,216,216,1);;
      .ptt__warn {
        padding-left: 23px;
        & span:nth-child(1) {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: red;
          margin-right: 8px;
        }
        & span:nth-last-child(1) {
          font-size:14px;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:20px;
        }
      }
    }
    .pt__other {
      padding-top: 20px;
      padding-bottom: 21px;
      border-bottom: 1px solid rgba(216,216,216,1);
      .pt__current__account {
        margin-bottom: 20px;
      }
      .pt__third--party {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
    .ctb__select {
      display: inline-block;
      width:12px;
      height:12px;
      background:rgba(255,255,255,1);
      border:1px solid rgba(216,216,216,1);
      margin-right: 11px;
    }
    .pt__ali, .pt__weixin {
      display: flex;
      align-items: center;
      font-size:14px;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:20px;
      margin-bottom: 0px;
      & span:nth-child(2) {
        display: inline-block;
        width:24px;
        height:24px;
        margin-right: 4px;
        margin-top: 0px;
      }
      .ali__icon {
        background:rgba(22,120,255,1);
      }
      .weixin__icon {
        background:red;
      }
    }
  }
  .primaryBtn {
    width: 100%;
  }
}
</style>
