<template>
  <el-dialog
    title="下载素材"
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="dowmLoad ele_dialog-center"
  >
    <ul>
      <li
        v-for="(item,index) in downLoadInfo"
        :key="index"
        :class="{ borderBlod: borderBlod == index }"
        @click="medioDownLoad(item,index)"
      >
        <span>{{ item.definition }}</span><span>{{ item.size }}</span>
      </li>
    </ul>
    <div slot="footer" class="dialog-footer">
      <div class="closeBtn" @click="changeShow()">取 消</div>
      <div class="primaryBtn" @click="send()">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
import PaymentDialog from '../PaymentDialogTwo'
export default {
  name: 'DownLoadDialog',
  props: {
    count: Boolean
  },
  data () {
    return {
      downLoadInfo: [
        { definition: '360P', size: '5MB' },
        { definition: '720P', size: '15MB' },
        { definition: '1080P', size: '20MB' },
        { definition: '4K', size: '32MB' }
      ],
      borderBlod: '2',
      definedInfo: { definition: '1080P', size: '20MB' },
      sendInfo: {}
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
    medioDownLoad (itemobj, index) {
      this.borderBlod = index
      if (this.borderBlod === '2') {
        this.sendInfo = this.definedInfo
      } else {
        this.sendInfo = itemobj
      }
    },
    send () {
      if (this.borderBlod === '2') {
        this.sendInfo = this.definedInfo
      }
      console.log(this.sendInfo)
      this.changeShow()
      PaymentDialog(true)
    }
  }
}
</script>
<style lang="scss" scoped>
.dowmLoad {
  ul {
      width: 100%;
      height:192px;
      border-radius:2px;
      padding: 30px 0 60px;
      box-sizing: content-box;
      li {
        width: 100%;
        height: 48px;
        padding: 0 80px;
        font-size:16px;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:48px;
        border:1px solid rgba(216,216,216,1);
        overflow: hidden;
        cursor: pointer;
        & span:nth-last-child(1) {
          float: right
        }
        & span:nth-child(1) {
          float: left
        }
        &.borderBlod {
            border: 1px solid rgba(0,0,0,1);
        }
      }
  }
}
</style>
