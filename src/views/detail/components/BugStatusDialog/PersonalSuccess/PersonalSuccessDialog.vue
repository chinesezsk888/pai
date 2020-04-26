<template>
  <el-dialog
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :show-close="showClose"
    :before-close="changeShow"
    custom-class="success__dialog ele_dialog-center"
    :close-on-click-modal="unClickModal"
  >
    <div class="pay__status">
      <p>
        <span>您已购买此素材</span>
        <span><span class="ps__time">{{ psTime }}</span>秒后将自动进入下载页</span>
      </p>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'PersonalSuccess',
  components: {
  },
  props: {
    count: Boolean
  },
  data () {
    return {
      showClose: false,
      unClickModal: true,
      psTime: 3
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
        this.psTime--
        if (this.psTime <= 0) {
          // 去下载页
          console.log('去下载页')
          this.changeShow()
          clearInterval(timeId)
        }
      }, 1000)
    }
  }
}
</script>
<style scoped lang="scss">
.success__dialog {
  .ps__time {
    display: inline!important;
  }
  .pay__status {
   text-align: center;
 }
}
</style>
