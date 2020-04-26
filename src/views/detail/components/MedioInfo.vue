<template>
  <div class="detail__medio__info">
    <div class="dmi__main__box" :class="mediaType | mediaClass">
      <p class="dmb__title">
        {{ medioInfo.title }}
      </p>
      <el-popover
        v-if="medioInfo.summary"
        placement="bottom-end"
        trigger="hover"
        popper-class="popover__summar"
        :content="medioInfo.summary"
      >
        <p
          slot="reference"
          class="dmb__summary"
        >
          {{ medioInfo.summary | summaryFilter }}
        </p>
      </el-popover>
    </div>
    <div class="dmi__msg__box">
      <div class="dmb__li">
        <p class="dl__left dl__auther">
          作 者：
        </p>
        <p class="dl__right">
          {{ medioInfo.author }}
        </p>
      </div>
      <div class="dmb__li">
        <p class="dl__left">
          最高尺寸：
        </p>
        <p class="dl__right">
          {{ medioInfo.maxSize }}
        </p>
      </div>
      <div class="dmb__li">
        <p
          class="dl__left"
          :class="mediaType === '1' ? 'dl__power':'dl__duration'"
        >
          {{ mediaType | medioPower }}
        </p>
        <p class="dl__right">
          {{ mediaType === '1' ? medioInfo.resolution : playDuration }}
        </p>
      </div>
      <div class="dmb__li">
        <p class="dl__left">
          创作时间：
        </p>
        <p class="dl__right">
          {{ medioInfo.createTime }}
        </p>
      </div>
      <div class="dmb__li">
        <p class="dl__left">
          版权信息：
        </p>
        <p class="dl__right">
          {{ medioInfo.copyright }}
        </p>
      </div>
      <div class="dmb__li">
        <p class="dl__left dl__medioId">
          {{ mediaType | medioId }}
        </p>
        <p class="dl__right">
          {{ medioInfo.id }}
        </p>
      </div>
      <div v-if="mediaType === '0'" class="dmb__li">
        <p class="dl__left dl__price">
          价 格：
        </p>
        <p class="dl__right">
          15分
        </p>
      </div>
      <div v-if="mediaType === '0'" class="dmb__li">
        <p class="dl__left dl__promote">
          促 销：
        </p>
        <div class="dl__right">
          <p class="vip__type">会员专享</p>
          <div class="vip__icon"><p>FREE</p></div>
        </div>
      </div>
    </div>
    <div class="dmi__btn__box">
      <div class="print_sample_wafer_btn" @click="downLoadDialogShow()">
        下载样片
      </div>
      <div class="collection_btn" @click="checkDialogShow()">
        收藏
      </div>
      <div class="download_btn" @click="duyLoadDialogShow()">
        下载
      </div>
    </div>
    <div class="dmi__more__box">
      <div class="dmb__more__mag" @click="RelatedInfoDialogShow()">
        <p>其他信息</p>
        <p><i class="el-icon-arrow-right" /></p>
      </div>
      <div class="dmb__report__box" @click="ReportDialogShow()">
        <div class="report__icon" />
        <p>举报</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDuration } from '../../../utils/commen'
import Dialog from '../../../components/checkdialog'
import DownLoadDialog from './DownLoadDialog'
import BuyLoadDialog from './BuyLoadDialog'
import ReportDialog from './ReportDialog'
import RelatedInfoDialog from './RelatedInfoDialog'
export default {
  name: 'MedioInfo',
  filters: {
    medioId (type) {
      if (type === '0') {
        return '视 频 ID：'
      } else if (type === '1') {
        return '图 片 ID：'
      } else {
        return '音 频 ID：'
      }
    },
    medioPower (type) {
      if (type === '1') {
        return '分 辨 率：'
      } else {
        return '时 长：'
      }
    },
    summaryFilter (str) {
      let strLength = str.length
      let strSummary = str
      if (strLength > 120) {
        strSummary = str.slice(0, 115) + '...'
      }
      return strSummary
    },
    mediaClass (type) {
      if (type === '0') {
        return 'media__video'
      } else if (type === '1') {
        return 'media__img'
      } else {
        return 'media__audio'
      }
    }
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    medioInfo: Object,
    // eslint-disable-next-line vue/require-default-prop
    mediaType: String
  },
  data () {
    return {
      showPopover: false
    }
  },
  computed: {
    playDuration () {
      return formatDuration(this.medioInfo.duration)
    }
  },
  created () {
  },
  methods: {
    checkDialogShow () {
      Dialog(true)
    },
    downLoadDialogShow () {
      DownLoadDialog(true)
    },
    duyLoadDialogShow () {
      BuyLoadDialog(true)
    },
    ReportDialogShow () {
      ReportDialog(true)
    },
    RelatedInfoDialogShow () {
      RelatedInfoDialog(true)
    }
  }
}
</script>
<style lang="scss" scoped>
$linear-bgcolor: linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
.detail__medio__info{
  width: 480px;
  height: 360px;
  margin-top: 40px;
  .dmi__main__box {
    padding-bottom: 20px;
    border-bottom: 1px solid #D8D8D8;
    box-sizing: border-box;
    &.media__audio {
      padding-bottom: 28px;
    }
    .dmb__title {
      font-size:24px;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:30px;
      margin-bottom: 8px;
    }
    .dmb__summary {
      font-size:12px;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height:18px;
      cursor: pointer;
    }
  }
  .dmi__msg__box {
    padding: 16px 0 20px;
    border-bottom: 1px solid #D8D8D8;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 24px;
    .dmb__li {
      width: 191px;
      margin-right: 49px;
      display: flex;
      align-items: center;
      margin-top: 4px;
      font-size:14px;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height:20px;
      .dl__left {
        width: 80px;
        // letter-spacing: 2px;
        &.dl__auther,&.dl__duration,&.dl__price,&.dl__promote {
          letter-spacing: 8px;
        }
        &.dl__medioId,&.dl__power  {
          letter-spacing: 1px;
        }
      }
      .dl__right {
        position: relative;
        .vip__type {
          font-size:10px;
          font-weight:600;
          color:rgba(173,0,0,1);
          line-height:10px;
          padding: 5px;
          border:1px solid;
          border-image:linear-gradient(135deg, rgba(213,0,0,1), rgba(173,0,0,1)) 1 1
        }
        .vip__icon {
          width: 30px;
          height: 15px;
          position: absolute;
          bottom: -8px;
          right: -23px;
          transform: rotate(25deg);
          background: url(~@/assets/detailImgs/detail-discountwps.png) center no-repeat;
          background-size: 100%;
          line-height:15px;
          text-align: center;
          p {
            display: inline-block;
            font-size:8px;
            font-weight:bold;
            color:#fff;
            text-shadow:1px 0px 3px rgba(130,0,0,0.3);
            transform: scale(0.65);
          }
        }
      }
    }
  }
  .dmi__btn__box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    div {
      width: 150px;
      height: 40px;
      font-size:14px;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:40px;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
      box-sizing: border-box;
      background:rgba(255,255,255,1);
      text-align: center;
      cursor: pointer;
      &.download_btn {
        background: $linear-bgcolor;
        color:rgba(255,255,255,1);
      }
    }
  }
  .dmi__more__box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .dmb__more__mag {
      display: flex;
      align-items: center;
      font-size:14px;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height:20px;
      p {
        &:nth-last-child(1) {
          font-size: 12px;
        }
      }
    }
    .dmb__report__box {
      display: flex;
      align-items: center;
      font-size:14px;
      color:rgba(102,102,102,1);
      line-height:20px;
      cursor: pointer;
      .report__icon {
        width:13px;
        height:12px;
        background: url('../../../assets/img/icon_jubao_presswps.png') center no-repeat;
        background-size: 100% 100%;
        margin-right: 2px;
      }
    }
  }
}
</style>
<style>
.popover__summar {
  width: 360px;
  padding: 30px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 10px 0px rgba(216,216,216,1);
  border-radius:2px;
  box-sizing: border-box;
  font-size:12px;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:18px;
}
</style>
