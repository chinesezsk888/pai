<template>
  <el-dialog
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :show-close="showClose"
    :before-close="changeShow"
    custom-class="team__success__dialog ele_dialog-center"
    :close-on-click-modal="unClickModal"
  >
    <div class="team__bug--box">
      <div>
        <p><span class="ts__name">我的团长我的团</span>已购买此素材，</p>
        <p><span class="ps__time">{{ psTime }}</span>秒后将自动进入下载页</p>
        <p>希望自己支付，获得授权请点击<span class="team__auto__pay" @click="autoPaySet()">自行支付</span></p>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'TeamSuccess',
  components: {
  },
  props: {
    count: Boolean
  },
  data () {
    return {
      showClose: false,
      unClickModal: true,
      psTime: 5,
      isclearInt: false
    }
  },
  created () {
    this.goDownLoad()
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
    goDownLoad () {
      let timeId = setInterval(() => {
        if (this.isclearInt) {
          clearInterval(timeId)
        } else {
          this.psTime--
          if (this.psTime <= 0) {
            // 去下载页
            console.log('去下载页')
            clearInterval(timeId)
          }
        }
      }, 1000)
    },
    autoPaySet () {
      this.isclearInt = true
      // 自行支付
      this.changeShow()
    }
  }
}
</script>
<style scoped lang="scss">
.team__success__dialog {
  .team__bug--box {
    div {
      font-size:14px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:20px;
      margin:0;
      padding:0;
      display: inline-block;
      vertical-align: middle;
      text-align: left;
      .ts__name {
        color:#AD0000;
      }
      .team__auto__pay {
        display: inline-block;
        font-size:12px;
        font-weight:600;
        color:rgba(0,0,0,1);
        line-height:18px;
        border-bottom: 1px solid rgba(0,0,0,1);
        margin-left: 5px;
        cursor: pointer;
      }
      & p:nth-child(2) {
        margin-bottom: 24px;
      }
    }
  }
  .team__bug--box {
    text-align: center;
  }
}
</style>
