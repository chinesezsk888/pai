<template>
  <div class="personal__cnsphoto__box">
    <div class="pcb__top">
      <div class="pt__left">
        <ul>
          <li :class="{hasBottomBorder: borderNum === 1}" @click="changeLiOne()">已入库</li>
          <li class="splitLine" />
          <li :class="{hasBottomBorder: borderNum === 2}" @click="changeLiTwo()">未入库</li>
          <li class="splitLine" />
          <li :class="{hasBottomBorder: borderNum === 3}" @click="changeLiThere()">上传失败</li>
        </ul>
      </div>
      <div class="pt__right">
        <div class="pt__dropdown--box">
          <el-dropdown
            trigger="click"
            size="small"
            @command="changeCopyRight"
          >
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
          <el-dropdown trigger="click" size="small" @command="changeStyle">
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
          <el-dropdown trigger="click" size="small" @command="changeClassify">
            <span class="el-dropdown-link">
              {{ classify }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item,index) in classifyList"
                :key="index"
                :command="item"
              >
                {{ item }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="click" size="small" @command="changeDefinition">
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
          <el-dropdown trigger="click" size="small" @command="changeArea">
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
          <el-dropdown trigger="click" size="small" @command="changeVideo">
            <span class="el-dropdown-link">
              {{ video }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item,index) in videoList"
                :key="index"
                :command="item"
              >
                {{ item }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="pt__search">
          <el-input v-model="ptsInput" placeholder="" @change="changeValue()" />
          <div class="ps__search__box" @click="sendAxios()" />
        </div>
      </div>
    </div>
    <div class="pcb__main">
      <el-table
        :data="tableData"
        header-cell-class-name="table__header"
        row-class-name="table__rows"
        style="width: 100%"
      >
        <el-table-column
          prop="mediaType"
          header-align="center"
          align="center"
          label="类型"
          width="51"
        />
        <el-table-column
          prop="mediaId"
          header-align="center"
          align="center"
          label="ID"
          width="51"
        />
        <el-table-column
          prop=""
          label=""
          header-align="center"
          align="center"
          width="80"
          class-name="img__column"
        >
          <template slot-scope="scope">
            <img :src="scope.row.imageUrl" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="mediaAdd"
          label="素材"
          header-align="center"
          align="center"
          width="204"
        />
        <el-table-column
          prop="copyRight"
          header-align="center"
          align="center"
          label="版权"
          width="71"
        />
        <el-table-column
          prop="mediaSize"
          header-align="center"
          align="center"
          label="尺寸"
          width="85"
        />
        <el-table-column
          prop="updataTime"
          header-align="center"
          align="center"
          label="上传时间"
          width="105"
        />
        <el-table-column
          prop="mediaSell"
          header-align="center"
          align="center"
          label="售出"
          width="71"
        />
        <el-table-column
          prop="mediaEdition"
          header-align="center"
          align="center"
          label="账号"
        />
      </el-table>
      <pagination-page />
    </div>
  </div>
</template>

<script>
import PaginationPage from './Pagination'
import store from '@/store'
export default {
  name: 'Cnsphoto',
  components: {
    PaginationPage: PaginationPage
  },
  props: {},
  data () {
    return {
      borderNum: 1,
      ptsInput: '',
      tableData: [{
        mediaType: '视频',
        mediaId: '111',
        mediaAdd: '一二三四五六七八九十一二',
        copyRight: '委托',
        mediaSize: '4K',
        updataTime: '2019-12-12',
        mediaSell: '120次',
        mediaEdition: '本账号用户名',
        imageUrl: 'http://139.196.248.235:8089/wap/image/4/169/729.jpg'
      },
      {
        mediaType: '视频',
        mediaId: '111',
        mediaAdd: '一二三四五六七八九十一二',
        copyRight: '委托',
        mediaSize: '4K',
        updataTime: '2019-12-12',
        mediaSell: '120次',
        mediaEdition: '本账号用户名',
        imageUrl: 'http://139.196.248.235:8089/wap/image/4/169/729.jpg'
      }
      ],
      copyRightType: '版权类型',
      style: '风格',
      classify: '分类',
      definition: '清晰度',
      area: '地点',
      video: '视频',
      // selectList: [ '版权类型', '风格', '分类', '清晰度', '地点', '视频' ],
      copyRightTypeList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      styleList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      classifyList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      definitionList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      areaList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      videoList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      searchInfo: {}
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    changeLiOne () {
      this.borderNum = 1
    },
    changeLiTwo () {
      this.borderNum = 2
    },
    changeLiThere () {
      this.borderNum = 3
    },
    changeCopyRight (data) {
      this.copyRightType = data
      this.searchInfo.copyRightType = data
    },
    changeStyle (data) {
      this.style = data
      this.searchInfo.style = data
    },
    changeClassify (data) {
      this.classify = data
      this.searchInfo.classify = data
    },
    changeDefinition (data) {
      this.definition = data
      this.searchInfo.definition = data
    },
    changeArea (data) {
      this.area = data
      this.searchInfo.area = data
    },
    changeVideo (data) {
      this.video = data
      this.searchInfo.video = data
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
.pcb__top {
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 33px;
  margin-bottom: 2px;
  .pt__left {
    ul {
      display: flex;
      align-items: center;
      height: 62px;
      li {
        font-size:16px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:22px;
        height: 62px;
        margin-right: 30px;
        @media screen and (max-width: 1180px) {
          margin-right: 10px;
        }
        cursor: pointer;
        line-height: 62px;
        &.hasBottomBorder {
          border-bottom: 2px solid rgba(0,0,0,1);
        }
      }
      .splitLine {
        width:1px;
        height:16px;
        background:rgba(216,216,216,1);
        border-bottom: none;
      }
    }
  }
  .pt__right {
    display: flex;
    align-items: center;
    .pt__dropdown--box {
      display: flex;
      align-items: center;
      margin-right: 7px;
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
}
.pcb__main {
  min-height: 750px;
  padding: 40px 30px 60px;
  background-color: #fff;
  position: relative;
   .img__column {
      img {
        width: 60px;
        height: 34px;
      }
   }
}
</style>
<style>
  .personal__cnsphoto__box .table__header {
    width: 100%;
    height: 32px;
    background:rgba(243,243,244,1);
    padding: 0px;
    box-sizing: border-box;
  }
  .table__header .cell {
    font-size:14px;
    color:rgba(0,0,0,1);
    line-height:20px;
    padding-right: 0px;
  }
  .table__rows td {
    padding: 10px 0;
    border-bottom: none;
  }
  .personal__cnsphoto__box .el-table__header-wrapper {
    margin-bottom: 4px;
  }
  .personal__cnsphoto__box .el-table::before {
    height: 0px;
  }
  .img__column .cell {
    padding: 0;
    display: flex;
    justify-items: center;
    margin-left: 10px;
  }
</style>
