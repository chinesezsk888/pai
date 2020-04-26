<template>
  <div class="myteam_page">
    <div class="page_title">
      我的团 <span>我的团长我的团</span>
      <div class="page_btn" @click="extendHandle">
        {{ rowShow?'收起':'展开' }}
      </div>
    </div>
    <div class="row" :class="{'show':rowShow}">
      <div class="col1">
        <div class="th">到期</div>
        <div class="tr">2020-12-31</div>
      </div>
      <div class="col2">
        <div class="th">每日限量</div>
        <div class="tr">233</div>
      </div>
      <div class="col3">
        <div class="th">每日限分</div>
        <div class="tr">20202</div>
      </div>
      <div class="col4">
        <div class="btn">我要退团</div>
        <span class="btn" @click="goTeamInvite">参团邀请</span>
        <span class="btn" @click="goTeamApply">报名</span>
      </div>
    </div>
    <div class="material_panel">
      <div class="material_head">
        <div class="nav_con">
          <div class="nav" :class="{'on':materialNavNum==0}" @click="materialNav(0)">视频</div>
          <div class="nav" :class="{'on':materialNavNum==1}" @click="materialNav(1)">图片</div>
          <div class="nav" :class="{'on':materialNavNum==2}" @click="materialNav(2)">音乐</div>
          <div class="nav_line" :class="'nav_line'+materialNavNum" />
        </div>
        <div class="list_style">
          <span class="btn" :class="{on:isMaterialThum}" @click="showThum">缩略显示</span>
          <span class="line">|</span>
          <span class="btn" :class="{on:!isMaterialThum}" @click="showList">列表显示</span>
          <div class="my_search-little">
            <el-input v-model="searchInput" placeholder="" />
            <div class="my_search_btn" />
          </div>
        </div>
      </div>
      <div v-show="isMaterialThum">
        <div :class="{'show':materialNavNum==0}" class="material_con">
          <group-material
            v-if="videoGroup.length>0"
            :list="videoGroup"
            :config="swiperConfig"
            type="0"
          />
          <list-video ref="listVideo" :init-item-list="videoArray" />
        </div>
        <div :class="{'show':materialNavNum==1}" class="material_con">
          <group-material
            v-if="imageGroup.length>0"
            :list="imageGroup"
            :config="swiperConfig"
            type="1"
          />
          <list-image ref="listImage" :init-item-list="imageArray" :config="imageListConfig" />
        </div>
      </div>
      <div v-show="!isMaterialThum">
        <div :class="{'show':materialNavNum==0}" class="material_con">
          <material-list />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GroupMaterial from '@/components/material_list/GroupMaterial.vue'
import ListImage from '@/components/material_list/ListImage.vue'
import ListVideo from '@/components/material_list/ListVideo.vue'
import MaterialList from './components/MaterialList.vue'
import { getImageList, getVideoList } from '@/api/homepage.js'
export default {
  name: 'TeamShow',
  components: {
    GroupMaterial,
    MaterialList,
    ListImage,
    ListVideo
  },
  data () {
    return {
      searchInput: '',
      itemList: [{
        title: '团队名1'
      }],
      imageGroup: [],
      imageArray: [],
      videoGroup: [],
      videoArray: [],
      rowShow: false,
      imageListConfig: {
        gutter: 12
      },
      swiperConfig: {
        slidesPerView: 5,
        spaceBetween: 12,
        slidesOffsetBefore: 214
      },
      materialNavNum: 0, // 0 当前选中类型 0 视频 1 图片 2 音频
      isMaterialThum: true // true 缩略图 false 列表
    }
  },
  mounted () {
    this.getData()
    this.$nextTick(() => {})
  },
  methods: {
    goTeamInvite () {
      this.$router.push('/personal/myteam_invite')
    },
    goTeamApply () {
      this.$router.push('/personal/myteam_apply')
    },
    showThum () {
      this.isMaterialThum = true
    },
    showList () {
      this.isMaterialThum = false
    },
    materialNav (num) {
      this.materialNavNum = num
    },
    extendHandle () {
      this.rowShow = !this.rowShow
    },
    getData () {
      getImageList((res) => {
        this.imageGroup = res.groupData
        this.imageArray = res.listData
        this.$refs.listImage.loading = false
      })
      getVideoList((res) => {
        this.videoGroup = res.groupData
        this.videoArray = res.listData
        this.$refs.listVideo.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .myteam_page{
    color:#000;
    background: #fff;
    min-height: 938px;
  }
  .list_style{
    display:flex;
    margin-top: 32px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #999;
    .btn {
      cursor: pointer;
    }
    .line{
      margin:0 12px;
    }
    .on{
      color:#B40000;
    }
    .my_search-little{
      margin:0 20px 0 32px;
    }
  }

  .page_title{
    font-size: 20px;
    height: 62px;
    border-bottom: 2px solid #F3F3F4;
    line-height: 60px;
    padding: 0 32px;
  }
  .team_name{
    color:#000;
    font-weight:600;
  }
  .page_btn{
    font-size:12px;
    color:#333;
    float:right;
    cursor: pointer;
  }
  .row{
    display:flex;
    height:0;
    border-bottom:6px solid #F3F3F4;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    &.show{
      height:102px;
      border-bottom:8px solid #F3F3F4;
    }
  }
  .col1{
    width:19.081%
  }
  .col2{
    width:13.979%;
  }
  .col3{
    width:13.979%
  }
  .col4{
    width:52.346%;
    .btn{
      cursor: pointer;
      background:rgba(255,255,255,1);
      font-size:12px;
      color:#000;
      text-align: center;
      line-height: 28px;
      width:72px;
      height:28px;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
      margin:0 auto;
      margin-top:32px;
    }
  }
  .col1,.col2,.col3{
    position: relative;
    &::after{
      content:'';
      position: absolute;
      width:2px;
      height: 100%;
      top:0;
      right:0;
      background: #F3F3F4;
    }
    .th,.tr{
      padding-left: 32px;
    }
  }
  .th{
    font-size:14px;
    margin:17px 0 10px;
  }
  .tr{
    font-size:24px;
    font-family: RobotoCondensed-Regular;
  }
  .material_head{
    height:70px;
    border-bottom:2px solid #F3F3F4;
    display:flex;
    justify-content: space-between;
  }
  .material_panel{
    width: 980px;
    position: relative;
  }
  .material_con{
    &::-webkit-scrollbar-track{background-color: #f0f0f0;}
    &::-webkit-scrollbar{width: 4px;background-color: #f0f0f0;}
    &::-webkit-scrollbar-thumb{background-color: #E5E5E5;}
    width: 100%;
    padding:32px 20px;
    opacity: 0;
    position: absolute;
    overflow: auto;
    height: 704px;
    &.show{
      opacity: 1;
      z-index: 10;
    }
    ::v-deep .swiper_image,::v-deep .swiper_video {
      .swiper-slide{
        width:172px !important;
      }
      .icon_swiper{
        top: 40px;
        width: 20px;
        height: 20px;
        background-size: 20px;
        left: -10px;
      }
      .item_image{
        width:172px;
        height:138px;
        font-size:14px;
      }
      .item_video{
        width:172px;
        height:97px;
        font-size:14px;
      }
      .swiper-button-prev{
        width: 0;
        height: 0;
      }
      .swiper-button-next{
        width: 0;
        height: 0;
      }
    }
    ::v-deep .image_panel {
      width:980px;
      margin-top:32px;
      .image_panel_contain{
        width:980px;
      }
      .item{
        width:226px;
      }
    }
    ::v-deep .video_panel {
      width:980px;
      margin-top:32px;
      .video_panel_contain{
        width:980px;
      }
      .video_item{
        margin:0 12px 12px 0;
      }
      .label{
        top:54px;
      }
      .item{
        width:226px;
        height:126px;
      }
    }
  }
  .nav_con{
    display:flex;
    margin-top:36px;
    position: relative;
  }
  .nav{
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
    &.on{
      font-weight: 600;
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
    &.nav_line0{
      left: 24px;
    }
    &.nav_line1{
      left: 126px;
    }
    &.nav_line2{
      left: 228px;
    }
  }
</style>
