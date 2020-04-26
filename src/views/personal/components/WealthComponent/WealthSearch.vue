<template>
  <div class="wealth__search">
    <div class="ws__dropdown--box">
      <el-dropdown v-show="showDropdownFirst" trigger="click" size="small" @command="changeCopyRight">
        <span class="el-dropdown-link">
          {{ copyRightType }} <i class="el-icon-arrow-down el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,index) in copyRightTypeList"
            :key="index"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown v-show="showDropdownFirst" trigger="click" size="small" @command="changeStyle">
        <span class="el-dropdown-link">
          {{ style }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,index) in styleList"
            :key="index"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown v-show="showDropdownFirst" trigger="click" size="small" @command="changeDefinition">
        <span class="el-dropdown-link">
          {{ definition }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,index) in definitionList"
            :key="index"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown v-show="showDropdownFirst" trigger="click" size="small" @command="changeArea">
        <span class="el-dropdown-link">
          {{ area }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,index) in areaList"
            :key="index"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown v-show="showDropdownSecond" trigger="click" size="small" @command="changeOperation">
        <span class="el-dropdown-link">
          {{ operation }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,index) in operationList"
            :key="index"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown v-show="showDropdownSecond" trigger="click" size="small" @command="changeType">
        <span class="el-dropdown-link">
          {{ type }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,index) in typeList"
            :key="index"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown v-show="showDropdownSecond" trigger="click" size="small" @command="changeDataTime">
        <span class="el-dropdown-link">
          {{ dataTime }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,index) in dataTimeList"
            :key="index"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown v-show="showDropdownSecond" trigger="click" size="small" @command="changeMoney">
        <span class="el-dropdown-link">
          {{ money }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,index) in moneyList"
            :key="index"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <p v-show="showDropdownSecond" @click="showFeedBack()">查询</p>
      <p v-show="showDropdownThird" @click="showApplyRefund()">申请退款</p>
    </div>
    <div class="ws__search">
      <el-input v-model="wsInput" placeholder="" @change="changeIptValue()" />
      <div class="ws__search__btn" @click="sendAxios()" />
    </div>
  </div>
</template>

<script>
import store from '@/store'
import ApplyRefund from '../ApplyRefund'
import FeedBack from '../FeedBack'
export default {
  name: 'WealthSearch',
  components: {
  },
  props: {
    tabsNum: {
      default () {
        return {}
      },
      type: Number
    }
  },
  data () {
    return {
      wsInput: '',
      // showDropdownFirst: Boolean,
      // showDropdownSecond: Boolean,
      // showDropdownThird: Boolean,
      copyRightType: '版权类型',
      style: '风格',
      definition: '清晰度',
      area: '地点',
      operation: '操作',
      type: '类型',
      dataTime: '2020/02/02-2020/03/02',
      money: '100-300元',
      copyRightTypeList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      styleList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      definitionList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      areaList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      operationList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      typeList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      dataTimeList: [ '2020/02/02-2020/03/02', '2020/03/02-2020/03/06', '2020/03/08-2020/03/12' ],
      moneyList: [ '100-300元', '100-200元', '10-30元' ],
      searchInfo: {} // 传递搜索的信息
    }
  },
  computed: {
    showDropdownFirst () {
      if (this.tabsNum === 1 || this.tabsNum === 2 || this.tabsNum === 3 || this.tabsNum === 4) {
        return true
      } else {
        return false
      }
    },
    showDropdownSecond () {
      if (this.tabsNum === 5 || this.tabsNum === 6) {
        return true
      } else {
        return false
      }
    },
    showDropdownThird () {
      if (this.tabsNum === 5) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    changeCopyRight (data) {
      this.copyRightType = data
      this.searchInfo.copyRightType = data
    },
    changeStyle (data) {
      this.style = data
      this.searchInfo.style = data
    },
    changeDefinition (data) {
      this.definition = data
      this.searchInfo.definition = data
    },
    changeArea (data) {
      this.area = data
      this.searchInfo.area = data
    },
    changeOperation (data) {
      this.operation = data
      this.searchInfo.operation = data
    },
    changeType (data) {
      this.type = data
      this.searchInfo.type = data
    },
    changeDataTime (data) {
      this.dataTime = data
      this.searchInfo.dataTime = data
    },
    changeMoney (data) {
      this.money = data
      this.searchInfo.money = data
    },
    changeIptValue () {
      if (this.wsInput.trim() !== '') {
        this.searchInfo.iptValue = this.wsInput
      } else {
        delete this.searchInfo.iptValue
      }
    },
    sendAxios () {
      store.dispatch('sendPersonalSearchAxios', this.searchInfo)
      console.log(store.state.personalSearchInfo)
    },
    showApplyRefund () {
      ApplyRefund(true)
    },
    showFeedBack () {
      FeedBack(true)
    }
  }
}
</script>
<style lang="scss" scoped>
.wealth__search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  .ws__dropdown--box {
    display: flex;
    align-items: center;
    margin-right: 7px;
    .el-dropdown {
      margin-right: 34px;
      cursor: pointer;
      font-size: 12px;
    }
    p {
      width:72px;
      height:24px;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
      font-size:12px;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:24px;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
      margin-left: 32px;
    }
    & p:nth-child(1) {
      margin-left: 40px;
      height: 32px;
    }
  }
  .ws__search {
    width: 140px;
    height: 24px;
    display: flex;
    align-items: center;
    .ws__search__btn {
      width:29px;
      height:24px;
      border:1px solid rgba(216,216,216,1);
      background: url(~@/assets/icon_search_press@2x.png) center no-repeat;
      background-size: 80% 80%;
      background-color: #D8D8D8;
    }
    ::v-deep .el-input__inner {
      height: 24px;
      border-radius:inherit;
    }
  }
}
</style>
