<template>
  <div class="personal__collection__box">
    <div class="pcb__top">
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
        <el-dropdown trigger="click" size="small" @command="changeSort">
          <span class="el-dropdown-link">
            {{ sort }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item,index) in sortList"
              :key="index"
              :command="item"
            >
              {{ item }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" size="small" @command="changeMore">
          <span class="el-dropdown-link">
            {{ more }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item,index) in moreList"
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
    <div v-if="showPcbMediaMain" class="pcb__media__main">
      <!-- 视频 -->
      <div class="pcb__vide--box pcb__media--box">
        <div class="pb__box">
          <p class="media__type">视频</p>
          <div class="operator">
            <div class="selectAllBox publicBox">
              <p />全选
            </div>
            <div class="cancelCollection publicBox">
              <p />取消收藏
            </div>
            <div class="batchDownload publicBox">
              <p />批量下载
            </div>
          </div>
        </div>
        <div class="media__card">
          <base-video
            v-for="videoItem in videoArray"
            :key="videoItem.id"
            :item="videoItem"
          />
          <the-loading v-show="loading" />
        </div>
        <div class="media__more" @click="addMoreMedia('video')">加载更多</div>
      </div>
      <!-- 图片 -->
      <div class="pcb__picture--box pcb__media--box">
        <div class="pb__box">
          <p class="media__type">图片</p>
          <div class="operator">
            <div class="selectAllBox publicBox">
              <p />全选
            </div>
            <div class="cancelCollection publicBox">
              <p />取消收藏
            </div>
            <div class="batchDownload publicBox">
              <p />批量下载
            </div>
          </div>
        </div>
        <div class="media__card">
          <div
            v-for="itemImg in imgArray"
            :key="itemImg.id"
            class="image_item"
          >
            <base-image :item="itemImg" />
          </div>
          <the-loading v-show="loading" />
        </div>
        <div class="media__more" @click="addMoreMedia('img')">加载更多</div>
      </div>
      <!-- 音频 -->
      <div class="pcb__audio--box pcb__media--box">
        <div class="pb__box">
          <p class="media__type">音频</p>
          <div class="operator">
            <div class="selectAllBox publicBox">
              <p />全选
            </div>
            <div class="cancelCollection publicBox">
              <p />取消收藏
            </div>
            <div class="batchDownload publicBox">
              <p />批量下载
            </div>
          </div>
        </div>
        <div class="line" />
        <div class="audio__box">
          <base-audio :list="audioList" class="audio_array" />
          <the-loading v-show="loading" />
        </div>
        <div class="media__more" @click="addMoreMedia('audio')">加载更多</div>
      </div>
    </div>
    <collect-medio-list v-else :medio-list="medioList" :medio-type="medioType" />
  </div>
</template>

<script>
import { getdateilInfo } from '@/api/detail.js'
import BaseVideo from '@/components/material/BaseVideo.vue'
import BaseImage from '@/components/material/BaseImage.vue'
import { getMediaList } from '@/api/collection.js'
import BaseAudio from '@/components/material/BaseAudio'
import TheLoading from '@/components/TheLoading.vue'
import store from '@/store'
import CollectMedioList from './CollectMedioList'
export default {
  name: 'Collection',
  components: {
    // TopNav
    BaseVideo,
    BaseImage,
    BaseAudio,
    TheLoading,
    CollectMedioList
  },
  props: {},
  data () {
    return {
      loading: true,
      ptsInput: '',
      videoArray: [],
      imgArray: [],
      copyRightType: '版权类型',
      style: '风格',
      classify: '分类',
      definition: '清晰度',
      area: '地点',
      sort: '排序',
      more: '更多筛选',
      copyRightTypeList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      styleList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      classifyList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      definitionList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      areaList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      sortList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      moreList: [ '黄金糕', '狮子头', '蚵仔煎' ],
      audioList: [],
      searchInfo: {},
      showPcbMediaMain: true, // 是否显示音视图片部分
      medioList: [], // 传给收藏专题的list
      medioType: '' // 传给收藏专题的type
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getAudioList('2')
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    getAudioList (type) {
      getdateilInfo(type, (res) => {
        this.audioList = res.data.relationList
      })
    },
    getData () {
      getMediaList((res) => {
        this.videoArray = res.data.videoList
        this.imgArray = res.data.imgList
        this.loading = false
      })
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
    changeSort (data) {
      this.sort = data
      this.searchInfo.sort = data
    },
    changeMore (data) {
      this.more = data
      this.searchInfo.more = data
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
      console.log(store.state.personalSearchInfo)
    },
    // getPersonalSearchInfo (obj) {
    //   store.dispatch({
    //     type: 'sendPersonalSearchInfo',
    //     infoObj: obj
    //   })
    // },
    addMoreMedia (type) {
      this.showPcbMediaMain = false
      this.medioType = type
      if (type === 'video') {
        this.medioList = this.videoArray
      } else if (type === 'img') {
        this.medioList = this.imgArray
      } else {
        this.medioList = this.audioList
      }
    }
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
  padding: 0 20px;
  margin-bottom: 2px;
  .pt__dropdown--box {
    display: flex;
    align-items: center;
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
.pcb__media--box {
  margin-bottom: 20px;
  .pb__box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .media__type {
      font-size:20px;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:28px;
      margin-right: 40px;
    }
    .operator {
      display: flex;
      align-items: center;
      .publicBox {
        font-size:14px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:20px;
        display: flex;
        align-items: center;
        margin-right: 34px;
        cursor: pointer;
      }
      .selectAllBox {
        p {
          width: 12px;
          height: 12px;
          border:1px solid rgba(216,216,216,1);
          margin-right: 6px;
        }
      }
      .cancelCollection {
        p {
          width: 16px;
          height: 16px;
          margin-right: 6px;
          background: url("../../../assets/icon_collect_music_select@2x.png") center no-repeat;
          background-size: 100% 100%;
        }
      }
      .batchDownload {
        p {
          width: 16px;
          height: 16px;
          margin-right: 6px;
          background: url("../../../assets/icon_download_music_normal@2x.png") center no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
  .media__card {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .audio__box {
    height: 192px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .media__more {
    width:100px;
    height:24px;
    border-radius:1px;
    border:1px solid rgba(102,102,102,1);
    margin: 0 auto;
    font-size:10px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:24px;
    text-align: center;
    cursor: pointer;
  }
}
.pcb__vide--box {
  width:100%;
  min-height: 258px;
  background:rgba(255,255,255,1);
  padding: 20px;
  .media__card {
    .item {
      width:226px;
      height: 126px;
      margin-right: 12px;
      margin-bottom: 10px;
      &:nth-child(4n-4) {
        margin-right: 0px;
      }
      @media screen and (max-width: 1197px) {
       width: 180px;
       height: 102px;
      }
    }
  }
}
.pcb__picture--box {
  width:100%;
  min-height: 302px;
  background:rgba(255,255,255,1);
  padding: 20px;
  .media__card {
    .image_item {
      width: 226px;
      margin-right: 12px;
      margin-bottom: 10px;
      &:nth-child(4n-4) {
        margin-right: 0px;
      }
      @media screen and (max-width: 1197px) {
        width: 180px;
      }
      .item {
        height: 170px;
        @media screen and (max-width: 1197px) {
           height: 135px;
        }
      }
    }
  }
}
.pcb__audio--box {
  width:100%;
  min-height: 291px;
  background:rgba(255,255,255,1);
  padding: 20px 20px 39px;
  margin-bottom: 0px;
  .pb__box {
    width:100%;
    padding-bottom: 20px;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(216,216,216,1);
  }
  .audio_array {
    width: 100%;
  }
}
.el-dropdown {
  margin-right: 23px;
}
.el-dropdown-link {
  cursor: pointer;
  font-size:14px;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:20px;
}
</style>
<style>
  .pcb__top .el-input__inner,
  .psb__top .el-input__inner
  {
    height: 24px;
    border-radius:inherit;
  }
  .pcb__top .el-dropdown {
    margin-right: 18px;
  }
  .pcb__top .el-dropdown-link {
    cursor: pointer;
    font-size:12px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:20px;
  }
  .pcb__picture--box .media__card .item img {
    height: 100%;
  }
  .pcb__audio--box .audio_list .item {
    height: 48px;
  }
  .pcb__audio--box .audio_list .tr {
    font-size:14px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:20px;
    margin-right: 18px;
  }
  .pcb__audio--box .audio_list .tr2,
  .pcb__audio--box .audio_list .tr3
  {
    width: 168px;
  }
  .pcb__audio--box .audio_list .tr4 {
    width: 58px;
  }
  .pcb__audio--box .audio_list .tr.tr5 {
    line-height: 28px;
  }
  .pcb__audio--box .audio_list .tr5 img {
    margin-top: 10px;
    width: 326px;
  }
  .pcb__audio--box .audio_list .tr {
    line-height: 48px;
  }
  .pcb__audio--box .audio_list .tr_icon {
    width: 120px;
    margin-right: 0px;
    text-align: right;
  }
  .pcb__audio--box .audio_list .icon {
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 1197px) {
    .pcb__audio--box .audio_list .tr5{
      display: none;
    }
  }
</style>
