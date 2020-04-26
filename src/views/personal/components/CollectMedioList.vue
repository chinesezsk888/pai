<template>
  <div class="collect__medio__list">
    <div class="pb__box">
      <p class="media__type">{{ collectMedioTitle }}</p>
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
      <el-dropdown class="cml__dropdown">
        <p class="type__icon" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-show="medioType!=='video'" @click.native="showVideoCard()">视频</el-dropdown-item>
          <el-dropdown-item v-show="medioType!=='img'" @click.native="showImgCard()">图片</el-dropdown-item>
          <el-dropdown-item v-show="medioType!=='audio'" @click.native="showAudioCard()">音频</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div
      class="pcb__media--box"
      :class="{videBox:medioType==='video',pictureBox:medioType==='img',audioBox:medioType==='audio'}"
    >
      <div v-if="medioType === 'video'" class="media__card">
        <base-video
          v-for="videoItem in medioList"
          :key="videoItem.id"
          :item="videoItem"
        />
      </div>
      <div v-if="medioType === 'img'" class="media__card">
        <div
          v-masonry
          transition-duration="0s"
          item-selector=".image_item"
          gutter="10"
        >
          <div
            v-for="itemImg in medioList"
            :key="itemImg.id"
            v-masonry-tile
            class="image_item"
          >
            <base-image :item="itemImg" />
          </div>
        </div>
      </div>
      <div v-if="medioType === 'audio'" class="media__card">
        <base-audio :list="medioList" class="audio_array" />
      </div>
    </div>
    <the-loading v-show="loading" />
    <pagination-page />
  </div>
</template>

<script>
import BaseVideo from '@/components/material/BaseVideo.vue'
import BaseImage from '@/components/material/BaseImage.vue'
import BaseAudio from '@/components/material/BaseAudio'
import TheLoading from '@/components/TheLoading.vue'
import PaginationPage from './Pagination'
export default {
  name: 'CollectMedioList',
  components: {
    BaseVideo,
    BaseImage,
    BaseAudio,
    TheLoading,
    PaginationPage
  },
  props: {
    medioList: {
      default () {
        return {}
      },
      type: Array
    },
    medioType: {
      default () {
        return {}
      },
      type: String
    }
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    collectMedioTitle () {
      if (this.medioType === 'video') {
        return '视频'
      } else if (this.medioType === 'img') {
        return '图片'
      } else {
        return '音频'
      }
    }
  },
  watch: {},
  mounted () {},
  created () {
    if (this.medioList) {
      this.loading = false
    }
    console.log(this.medioList)
    console.log(this.medioType)
  },
  methods: {
    showVideoCard () {
      this.medioType = 'video'
    },
    showImgCard () {
      this.medioType = 'img'
      console.log(this.medioType)
    },
    showAudioCard () {
      this.medioType = 'audio'
    }
  }
}
</script>
<style lang="scss" scoped>
.collect__medio__list {
  background:rgba(255,255,255,1);
  padding: 20px;
  position: relative;
  min-height: 876px;
  .pb__box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
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
          background: url(~@/assets/icon_collect_music_select@2x.png) center no-repeat;
          background-size: 100% 100%;
        }
      }
      .batchDownload {
        p {
          width: 16px;
          height: 16px;
          margin-right: 6px;
          background: url(~@/assets/icon_download_music_normal@2x.png) center no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .el-dropdown {
      width: 16px;
      height: 14px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      .type__icon {
        width: 16px;
        height: 14px;
        background: url(~@/assets/personalImgs/personal-medio-type-icon.png) no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
    }
  }
  .pcb__media--box {
    margin-bottom: 20px;
    &.videBox {
      .media__card {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        flex-wrap: wrap;
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
    &.pictureBox {
      .item{
        width:226px;
        margin-bottom:20px;
      }
    }
    &.audioBox {
      .audio_array {
        width: 100%;
      }
    }
  }
}
</style>
<style>
.collect__medio__list .audioBox .audio_list .item {
  height: 48px;
}
.collect__medio__list .audioBox .audio_list .tr {
  font-size:14px;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height:20px;
  margin-right: 18px;
}
.collect__medio__list .audioBox .audio_list .tr2,
.collect__medio__list .audioBox .audio_list .tr3
{
  width: 168px;
}
.collect__medio__list .audioBox .audio_list .tr4 {
  width: 58px;
}
.collect__medio__list .audioBox .audio_list .tr.tr5 {
  line-height: 28px;
}
.collect__medio__list .audioBox .audio_list .tr5 img {
  margin-top: 10px;
  width: 326px;
}
.collect__medio__list .audioBox .audio_list .tr {
  line-height: 48px;
}
.collect__medio__list .audioBox .audio_list .tr_icon {
  width: 120px;
  margin-right: 0px;
  text-align: right;
}
.collect__medio__list .audioBox .audio_list .icon {
  width: 20px;
  height: 20px;
}
@media screen and (max-width: 1197px) {
  .collect__medio__list .audioBox .audio_list .tr5{
    display: none;
  }
}
</style>
