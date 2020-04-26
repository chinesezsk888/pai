<template>
  <div class="personal__account__box">
    <div class="pab__set__meal">
      <p class="pab__block--top">选择套餐</p>
      <div class="psm__main--box">
        <div class="pmb__favourable">
          <div class="pf__box">
            <span class="span__one">限时优惠</span>
            <span class="span__two">限新用户验证支付</span>
            <p class="border__red--top" />
            <p class="triangle__icon">新</p>
          </div>
          <div class="pab__info--box">
            <div class="pmb__part">
              <Modifier
                :change-integral="favourableIntegral"
                :unit="favourableIntegralUnit"
                @addIntegral="addFavourableIntegral"
                @reduceIntegral="reduceFavourableIntegral"
              />
            </div>
            <div class="pmb__num"><span>1000</span><span>张</span></div>
            <div class="pmb__unit"><span>0.01</span><span>元<span>/</span>张</span></div>
            <div class="pmb__account"><span>10</span><span>元</span></div>
          </div>
        </div>
        <div class="pmb__bug">
          <div class="pb__integral--box">
            <p>购买积分</p>
            <div class="pab__info--box">
              <div class="pmb__part">
                <Modifier
                  :change-integral="bugIntegral"
                  :unit="bugIntegralUnit"
                  @addIntegral="addBugIntegral"
                  @reduceIntegral="reduceBugIntegral"
                />
              </div>
              <div class="pmb__unit"><span>1</span><span>元<span>/</span>张</span></div>
              <div class="pmb__account"><span>200</span><span>元</span></div>
            </div>
          </div>
          <div class="pb__month--box">
            <p>购买包时套餐</p>
            <div class="pab__info--box">
              <div class="pmb__part">
                <Modifier
                  :change-integral="bugMonth"
                  :unit="bugMonthUnit"
                  @addIntegral="addBugMonth"
                  @reduceIntegral="reduceBugMonth"
                />
              </div>
              <div class="pmb__num"><span>200</span><span>张</span></div>
              <div class="pmb__account"><span>200</span><span>元</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pad__pay__type">
      <p class="pab__block--top">支付方式</p>
      <div class="ppt__main--box">
        <div class="pay__type">
          <p :class="{selected:checkRed==='1'}" @click="selectType($event)">
            <span class="ctb__select" />
            <span />
            支付宝
          </p>
          <p :class="{selected:checkRed==='2'}" @click="selectType($event)">
            <span class="ctb__select" />
            <span />
            微信支付
          </p>
        </div>
        <div class="pay__btn" @click="toPay()">前往支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import Modifier from './AccountComponents/Modifier'
import QRCodeDialog from './QRCodeDialog'
export default {
  name: 'Account',
  components: {
    Modifier
  },
  data () {
    return {
      favourableIntegral: '1000',
      favourableIntegralUnit: '分',
      bugIntegral: '13',
      bugIntegralUnit: '分',
      bugMonth: '1',
      bugMonthUnit: '月',
      checkRed: '1'
    }
  },
  methods: {
    selectType (event) {
      const val = event.currentTarget.innerText
      if (val === '支付宝') {
        this.checkRed = '1'
      } else {
        this.checkRed = '2'
      }
    },
    toPay () {
      QRCodeDialog(true)
    },
    addFavourableIntegral () {
      this.favourableIntegral = String(Number(this.favourableIntegral) + 1)
    },
    reduceFavourableIntegral () {
      if (Number(this.favourableIntegral) === 0) {
        return false
      }
      this.favourableIntegral = String(Number(this.favourableIntegral) - 1)
    },
    addBugIntegral () {
      this.bugIntegral = String(Number(this.bugIntegral) + 1)
    },
    reduceBugIntegral () {
      if (Number(this.bugIntegral) === 0) {
        return false
      }
      this.bugIntegral = String(Number(this.bugIntegral) - 1)
    },
    addBugMonth () {
      if (Number(this.bugMonth) >= 12) {
        this.bugMonth = '12'
        return false
      }
      this.bugMonth = String(Number(this.bugMonth) + 1)
    },
    reduceBugMonth () {
      if (Number(this.bugMonth) === 0) {
        return false
      }
      this.bugMonth = String(Number(this.bugMonth) - 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.personal__account__box {
  width: 100%;
  min-height: 700px;
  background-color: rgba(243,243,244,1);
  .pab__block--top {
    height: 60px;
    width: 100%;
    padding: 0 32px;
    line-height: 58px;
    border-bottom: 2px solid rgba(243,243,244,1);
    font-size:20px;
    font-weight:500;
    color:rgba(0,0,0,1);
  }
  .pab__set__meal {
    margin-bottom: 8px;
    background-color: rgba(255,255,255,1);
    .psm__main--box {
      padding: 40px;
      .pab__info--box {
        display: flex;
        align-items: center;
        > div {
          flex: 1;
          height: 114px;
          border-right: 2px solid rgba(243,243,244,1);
        }
        .pmb__num,.pmb__unit,.pmb__account {
          text-align: center;
          line-height: 130px;
          & >span:nth-child(1) {
            font-size:36px;
            font-weight:400;
            line-height:48px;
            margin-right: 4px;
            font-family: RobotoCondensed-Regular;
          }
          & >span:nth-last-child(1) {
            font-size:16px;
            font-weight:400;
            line-height:22px;
            & > span:nth-child(1) {
              margin: 0 2px;
            }
          }
        }
        .pmb__num,.pmb__unit {
          span {
            color:rgba(0,0,0,1);
          }
        }
        .pmb__account {
          span {
            color:rgba(180,0,0,1);
          }
        }
        .pmb__part {
          display: flex;
          justify-content: center;
          align-items: center;
          .modifier__box {
            width: 111px;
          }
        }
      }
      .pmb__favourable {
        width: 100%;
        height:182px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 10px 0px rgba(216,216,216,0.5);
        border-radius:4px;
        margin-bottom: 40px;
        .pf__box {
          height: 68px;
          border-bottom: 2px solid rgba(243,243,244,1);
          line-height: 70px;
          padding-left: 32px;
          position: relative;
          .span__one {
            font-size:20px;
            font-weight:500;
            color:rgba(173,0,0,1);
            line-height:28px;
            margin-right: 12px;
          }
          .span__two {
            font-size:12px;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:16px;
          }
          .border__red--top {
            width: 100%;
            height:4px;
            background:linear-gradient(135deg,rgba(213,0,0,1) 0%,rgba(173,0,0,1) 100%);
            border-radius:100px 0px 0px 0px;
            position: absolute;
            top: 0;
            left: 0;
          }
          .triangle__icon {
            position: absolute;
            top: 3px;
            right: 0;
            width: 35px;
            height: 35px;
            background:linear-gradient(to top right, #fff 0%, #fff 49.9%,rgba(213,0,0,1) 0%,rgba(173,0,0,1) 100%);
            font-size:12px;
            font-weight:normal;
            color:#FFFFFF;
            line-height:16px;
            text-shadow:1px 0px 3px rgba(130,0,0,0.3);
            padding-right: 4px;
            padding-top: 4px;
            text-align: right;
          }
        }
      }
      .pmb__bug {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
          width: 430px;
          height: 182px;
          background:rgba(255,255,255,1);
          box-shadow:0px 0px 10px 0px rgba(216,216,216,0.5);
          border-radius:4px;
          > p {
            width: 100%;
            height: 68px;
            padding-left: 32px;
            line-height: 66px;
            border-bottom: 2px solid rgba(243,243,244,1);
            box-sizing: border-box;
            font-size:20px;
            font-weight:400;
            color:rgba(0,0,0,1);
          }
          @media screen and (max-width: 1197px) {
            width: 360px;
          }
        }
        .pb__integral--box,.pb__month--box {
          .pmb__account {
            span {
              color:rgba(0,0,0,1);
            }
          }
        }
        .pb__month--box {
          .pab__info--box {
            .modifier__box {
              width: 77px;
            }
          }
        }
      }
    }
  }
  .pad__pay__type {
    background-color: rgba(255,255,255,1);
    .ppt__main--box {
      height: 315px;
      padding: 32px 64px 0 32px;
      position: relative;
      .pay__type {
        display: flex;
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
        }
        & p:nth-child(1) {
          margin-right: 120px;
          & span:nth-child(2) {
            width:60px;
            height:60px;
            background:rgba(22,120,255,1);
            margin: 0 12px 0 24px;
          }
        }
        & p:nth-child(2) {
           & span:nth-child(2) {
            width:60px;
            height:60px;
            background:rgba(2,175,80,1);
            margin: 0 12px 0 24px;
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
      .pay__btn {
        width:145px;
        height:36px;
        background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
        border-radius:2px;
        box-sizing: border-box;
        font-size:14px;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:36px;
        text-align: center;
        position: absolute;
        top: 44px;
        right: 64px;
        cursor: pointer;
      }
    }
  }
}
</style>
