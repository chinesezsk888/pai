<template>
  <div class="personal__wealth--box">
    <div class="pwb__top--box">
      <div class="msg__card personal__card">
        <div class="ppmc__top">
          <p>个人信息</p>
          <div class="pt__button" @click="userMaggese()">修改信息</div>
        </div>
        <div class="ppmc__main">
          <div class="pm__left pm__card">
            <div>
              <p>积分</p>
              <p>1264</p>
            </div>
          </div>
          <div class="pm__right pm__card">
            <div>
              <p>下载权限到期</p>
              <p>2020-12-31</p>
            </div>
          </div>
        </div>
      </div>
      <div class="withdraw__card personal__card">
        <div class="ppmc__top">
          <p>财富</p>
          <div class="pt__button" @click="showApplyDialog()">申请提现</div>
        </div>
        <div class="ppmc__main">
          <div class="pm__left pm__card">
            <div>
              <p>可提现余额</p>
              <p>
                <span>1,234.00</span>
                <span>元</span>
                <span>不含手续费</span>
              </p>
            </div>
          </div>
          <div class="pm__right pm__card">
            <div>
              <p>收款账户</p>
              <p>6058 4048 1200 268<span @click="showAccountChange()">申请变更</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pwb__main--box">
      <wealth-tab />
      <!-- <pagination-page /> -->
    </div>
  </div>
</template>

<script>
// import PaginationPage from './Pagination'
import WealthTab from './WealthComponent/WealthTab'
// import ModifyUserInfo from './ModifyUserInfo'
import ModifyUserInfo from './ModifyUserInfo'
import ApplyDialog from './ApplyDialog'
import AccountChange from './AccountChange'
export default {
  name: 'Wealth',
  components: {
    WealthTab
  },
  data () {
    return {
    }
  },
  methods: {
    userMaggese () {
      ModifyUserInfo(true)
    },
    showApplyDialog () {
      ApplyDialog(true)
    },
    showAccountChange () {
      AccountChange(true)
    }
  }
}
</script>
<style lang="scss" scoped>
.pwb__top--box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
  .personal__card {
    height:156px;
    background:rgba(244,244,244,1);
    @media screen and (max-width: 1197px) {
      width: 410px;
    }
    .ppmc__top {
      width: 100%;
      height: 59px;
      background-color: #fff;
      padding: 0 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2px;
      p {
        font-size:20px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:28px;
      }
      .pt__button {
        padding: 4px 12px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
        border-radius:2px;
        font-size:12px;
        font-weight:400;
        color:rgba(51,51,51,1);
        text-align: center;
        cursor: pointer;
        line-height: 16px;
      }
    }
    .ppmc__main {
      width: 100%;
      height: 96px;
      background-color: #fff;
      display: flex;
      .pm__card {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          display: inline-block;
          text-align: left;
          & p:nth-child(1) {
            font-size:14px;
            font-weight:300;
            color:rgba(0,0,0,1);
            line-height:20px;
            margin-bottom: 8px;
          }
          & p:nth-last-child(1) {
            font-size:24px;
            font-weight:400;
            color:rgba(0,0,0,1);
            line-height:28px;
            font-family: RobotoCondensed-Regular;
            display: flex;
            align-items: center;
          }
        }
        &.pm__left {
          width: 128px;
          border-right: 2px solid rgba(243,243,244,1);
           div {
            & span:nth-child(2){
              font-size:14px;
              font-weight:400;
              color:rgba(0,0,0,1);
              line-height:20px;
            }
            & span:nth-last-child(1) {
              line-height:20px;
              color:rgba(187,187,187,1);
              font-size:14px;
              font-weight:400;
            }
            & span:nth-child(2),
            & span:nth-last-child(1)
             {
              margin-top: 10px;
              margin-left: 4px;
            }
          }
        }
        &.pm__right {
          flex: 1;
          div {
            & span:nth-last-child(1) {
              line-height:24px;
            }
          }
        }
      }
    }
    &.msg__card {
      width: 324px;
      margin-right: 8px;
    }
    &.withdraw__card {
      flex: 1;
    }
  }
  .withdraw__card {
    .ppmc__main {
      .pm__card {
        &.pm__left {
          width: 253px;
          border-right: 2px solid rgba(243,243,244,1);
          @media screen and (max-width: 1197px) {
            width: 206px;
          }
        }
        &.pm__right {
          flex: 1;
          div {
            span {
              margin-left: 38px;
              width:88px;
              height:24px;
              border-radius:2px;
              border:1px solid rgba(216,216,216,1);
              text-align: center;
              line-height: 24px;
              box-sizing: border-box;
              font-size:12px;
              font-weight:400;
              color:rgba(0,0,0,1);
              box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
              cursor: pointer;
              @media screen and (max-width: 1197px) {
                margin-left: 8px;
              }
            }
          }
        }
      }
    }
  }
}
.pwb__main--box {
  width: 100%;
  min-height: 673px;
  background-color: #fff;
  padding: 2px 0px 22px;
  position: relative;
}
</style>
