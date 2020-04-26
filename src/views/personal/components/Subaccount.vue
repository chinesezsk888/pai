<template>
  <div class="personal__subaccount__box">
    <div class="psb__top">
      <div class="applyButton" @click="showChangeDialog()">申请新开子账号</div>
      <div class="pt__search">
        <el-input v-model="ptsInput" placeholder="" @change="changeValue()" />
        <div class="ps__search__box" @click="sendAxios()" />
      </div>
    </div>
    <div class="psb__main">
      <div class="pm__table--box">
        <div class="ptb__header">
          <p class="subaccount__name--cell">子账号名</p>
          <p class="updata__time--cell">下载到期时间</p>
          <p>上传</p>
          <p>售出</p>
          <p>财富</p>
        </div>
        <div class="ptb__body">
          <div v-for="(item , index) in tableData" :key="index" class="pb__item--box">
            <p class="item__subaccount--name">{{ item.subaccountName }}</p>
            <p class="item__updata--time">{{ item.updataTime }}</p>
            <p>{{ item.upload }}</p>
            <p>{{ item.mediaSell }}次</p>
            <p>{{ item.wealth }}</p>
            <div class="delButton" @click="delItem(index,item.id)">删除</div>
            <div class="stopButton">停用</div>
            <div class="investButton">充值</div>
          </div>
        </div>
      </div>
      <pagination-page />
    </div>
  </div>
</template>

<script>
import PaginationPage from './Pagination'
import Dialog from './ChangeInfoDialog'
import store from '@/store'
export default {
  name: 'Subaccount',
  components: {
    PaginationPage: PaginationPage
  },
  props: {},
  data () {
    return {
      ptsInput: '',
      tableData: [{
        id: 0,
        subaccountName: '一二三四五六七八六七六七九十一二',
        updataTime: '2019-12-12',
        upload: '1234',
        mediaSell: 120,
        wealth: '1234'
      },
      {
        id: 1,
        subaccountName: '一二三四五六七八六七六七九十一二',
        updataTime: '2019-12-12',
        upload: '1234',
        mediaSell: 120,
        wealth: '1234'
      },
      {
        id: 2,
        subaccountName: '一二三四五六七八六七六七九十一二',
        updataTime: '2019-12-12',
        upload: '1234',
        mediaSell: 120,
        wealth: '1234'
      }
      ],
      searchInfo: {}
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    delItem (index, id) {
      this.tableData.splice(index, 1)
    },
    showChangeDialog () {
      Dialog(true)
    },
    changeValue () {
      if (this.ptsInput.trim() !== '') {
        this.searchInfo.iptValue = this.ptsInput
      } else {
        delete this.searchInfo.iptValue
      }
    },
    sendAxios () {
      // if (JSON.stringify(this.searchInfo) === '{}') {
      //   return false
      // } else {
      //   this.getPersonalSearchInfo(this.searchInfo)
      // }
      store.dispatch('sendPersonalSearchAxios', this.searchInfo)
    }
    // getPersonalSearchInfo (obj) {
    //   store.dispatch({
    //     type: 'sendPersonalSearchInfo',
    //     infoObj: obj
    //   })
    //   console.log(store.state.personalSearchInfo)
    // }
  }
}
</script>
<style lang="scss" scoped>
.psb__top{
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 33px;
  margin-bottom: 2px;
  .applyButton {
    width:128px;
    height:28px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
    border-radius:2px;
    text-align: center;
    line-height: 28px;
    font-size:14px;
    font-weight:400;
    color:rgba(51,51,51,1);
    cursor: pointer;
  }
  .pt__search {
    width: 140px;
    height: 24px;
    display: flex;
    align-items: center;
    .ps__search__box {
      width:29px;
      height:24px;
      border:1px solid rgba(216,216,216,1);
      background: url("../../../assets/icon_search_press@2x.png") center no-repeat;
      background-size: 80% 80%;
      background-color: #D8D8D8;
    }
  }
}
.psb__main {
  min-height: 750px;
  padding: 40px 30px 60px;
  background-color: #fff;
  position: relative;
  .pm__table--box {
    .ptb__header {
      height: 32px;
      width: 100%;
      background:rgba(243,243,244,1);
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      padding: 0 20px;
      p {
        width: 82px;
        text-align: center;
        font-size:14px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:32px;
      }
      .subaccount__name--cell {
        width: 182px;
      }
      .updata__time--cell {
        width: 138px;
      }
    }
    .ptb__body {
      .pb__item--box {
        width: 100%;
        height: 60px;
        margin-bottom: 1px;
        background-color: #fff;
        display: flex;
        align-items: center;
        border:1px solid rgba(216,216,216,1);
        padding: 0 20px;
        p {
          font-size:14px;
          font-weight:400;
          color:rgba(51,51,51,1);
          width: 82px;
          text-align: center;
          line-height:20px;
          &.item__subaccount--name {
          width: 182px;
          }
          &.item__updata--time {
            width: 138px;
          }
        }
        div {
          width: 64px;
          height: 24px;
          text-align: center;
          font-size:14px;
          font-weight:400;
          color:rgba(0,0,0,1);
          line-height:24px;
          cursor: pointer;
          &.delButton {
            margin-right: 40px;
          }
          &.stopButton {
            margin-right: 30px;
          }
          &:hover {
            background:rgba(249,249,249,1);
            border-radius:2px;
          }
        }
      }
    }
  }
}
</style>
