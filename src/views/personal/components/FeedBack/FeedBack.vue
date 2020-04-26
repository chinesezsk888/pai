<template>
  <el-dialog
    title="反馈意见"
    :visible.sync="count"
    width="440px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="ele_dialog-center feed__back--dialog"
  >
    <div class="dialog__center--box">
      <div class="fb__numbers--box">
        <p>反馈分类</p>
        <el-dropdown
          trigger="click"
          size="small"
          @command="changeOddId"
        >
          <span class="el-dropdown-link">
            {{ OddIdSelect }} <i class="el-icon-arrow-down el-icon-caret-bottom" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in OddIdList"
              :key="item.id"
              :command="item.name"
            >
              {{ item.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="fb__type--box">
        <p>设计素材</p>
        <div class="cash__type__box">
          <p :class="{selected:checkRed==='1'}" @click="selectType($event)"><span class="ctb__select" />不涉及</p>
          <p :class="{selected:checkRed==='2'}" @click="selectType($event)">
            <span class="ctb__select" />
            <span>素材ID</span>
          </p>
          <el-input v-model="materialNum" placeholder="输入数量" />
        </div>
      </div>
      <div class="fb__report--box">
        <p>填写说明</p>
        <textarea
          v-model="feedBackReport"
          class="fb__report--textarea"
          placeholder="请填写说明"
        />
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <div class="primaryBtn" @click="sendFrom()">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'FeedBack',
  props: {
    count: Boolean
  },
  data () {
    return {
      checkRed: '1',
      OddIdSelect: '1234567890',
      OddIdList: [
        { name: '1234567890', id: '1' },
        { name: '1269567898', id: '2' },
        { name: '1234567458', id: '3' }
      ],
      materialNum: '',
      feedBackReport: ''
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
    changeOddId (data) {
      this.OddIdSelect = data
    },
    selectType (event) {
      const val = event.currentTarget.innerText
      if (val === '不涉及') {
        this.checkRed = '1'
      } else {
        this.checkRed = '2'
      }
    },
    sendFrom () {
      const sendInfo = {}
      sendInfo.checkRed = this.checkRed
      sendInfo.OddIdSelect = this.OddIdSelect
      sendInfo.materialNum = this.materialNum
      sendInfo.feedBackReport = this.feedBackReport
      console.log(sendInfo)
    }
  }
}
</script>
<style lang="scss" scoped>
.feed__back--dialog {
  .dialog__center--box {
    padding: 30px 0 60px;
  }
  .fb__numbers--box {
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
  .fb__type--box {
    margin-bottom: 20px;
    & > p:nth-child(1) {
      font-size:14px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:20px;
      margin-bottom: 4px;
    }
    .cash__type__box {
      display: flex;
      flex-wrap: wrap;
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
        span {
          margin-right: 4px;
        }
      }
      & p:nth-child(2) {
        margin-right: 4px;
      }
      ::v-deep .el-input__inner {
        height: 24px;
      }
      .el-input {
        width: 106px;
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
  .fb__report--box {
    & p:nth-child(1) {
      font-size:14px;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:20px;
      margin-bottom: 9px;
    }
    .fb__report--textarea {
      padding: 7px 12px;
      width: 100%;
      height: 80px;
      resize: none;
    }
  }
  .dialog-footer {
    .primaryBtn {
      width: 100%;
    }
  }
}
</style>
