<template>
  <div class="wealth__tab">
    <div class="wt__top">
      <div class="top__nav">
        <div class="nav" :class="{checked: borderNum === 1}" @click="changeLi($event)">已购素材</div>
        <div class="nav" :class="{checked: borderNum === 2}" @click="changeLi($event)">已传素材</div>
        <div class="nav" :class="{checked: borderNum === 3}" @click="changeLi($event)">未传素材</div>
        <div class="nav" :class="{checked: borderNum === 4}" @click="changeLi($event)">暂未入库</div>
        <div class="nav" :class="{checked: borderNum === 5}" @click="changeLi($event)">交易订单</div>
        <div class="nav" :class="{checked: borderNum === 6}" @click="changeLi($event)">未完成交易</div>
        <div class="nav_line" :class="'nav_line'+borderNum" />
      </div>
    </div>
    <div class="wt__main">
      <wealth-search :tabs-num="borderNum" />
      <bugged-material v-if="borderNum===1" />
      <transferred-material v-else-if="borderNum===2" />
      <un-transferred-material v-else-if="borderNum===3" />
      <un-put-in-storage v-else-if="borderNum===4" />
      <trading-order v-else-if="borderNum===5" />
      <failed-trading v-else />
    </div>
  </div>
</template>
<script>
import WealthSearch from './WealthSearch'
import BuggedMaterial from './BuggedMaterial'
import TransferredMaterial from './TransferredMaterial'
import UnTransferredMaterial from './UnTransferredMaterial'
import UnPutInStorage from './UnPutInStorage'
import TradingOrder from './TradingOrder'
import FailedTrading from './FailedTrading'
export default {
  name: 'WealthTab',
  components: {
    WealthSearch,
    BuggedMaterial,
    TransferredMaterial,
    UnTransferredMaterial,
    UnPutInStorage,
    TradingOrder,
    FailedTrading
  },
  data () {
    return {
      activeName: 'second',
      borderNum: 1
    }
  },
  methods: {
    changeLi (e) {
      const html = e.currentTarget.innerHTML
      switch (html) {
        case '已购素材':
          this.borderNum = 1
          break
        case '已传素材':
          this.borderNum = 2
          break
        case '未传素材':
          this.borderNum = 3
          break
        case '暂未入库':
          this.borderNum = 4
          break
        case '交易订单':
          this.borderNum = 5
          break
        default:
          this.borderNum = 6
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.wealth__tab {
  .wt__top{
    height: 69px;
    border-bottom: 2px solid #F3F3F4;
    overflow: hidden;
    .top__nav {
      display: flex;
      margin-top: 29px;
      height: 37px;
      position: relative;
      .nav {
        width:104px;
        font-size:16px;
        color:#000;
        text-align: center;
        position: relative;
        cursor: pointer;
        &::after{
          position: absolute;
          width:1px;
          height:16px;
          background:#D8D8D8;
          content:"";
          display: block;
          top:0;
          right:0;
        }
        &.checked {
          font-weight: 600;
        }
      }
    }
    .nav_line{
      width:60px;
      height:2px;
      background:#000;
      position: absolute;
      bottom:-1px;
      left: 24px;
      transition: all 0.3s ease-in-out;
      &.nav_line1{
        left: 22px;
      }
      &.nav_line2{
        left: 126px;
      }
      &.nav_line3{
        left: 230px;
      }
      &.nav_line4{
        left: 335px;
      }
      &.nav_line5{
        left: 437px;
      }
      &.nav_line6{
        left: 543px;
      }
    }
  }
  .wt__main {
    padding: 28px 20px 0px;
  }
}
</style>
