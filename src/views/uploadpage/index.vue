<template>
  <div>
    <the-header />
    <div class="content_panel clearfix">
      <input-panel class="table_panel" />
      <div class="upload_detail_panel" @click="changeGroupFlag=false">
        <div class="upload_item_panel">
          <div class="upload_group_panel">
            <div class="upload_btn_common" @click.stop="changeGroupFlag=true">移动到我的组系列</div>
            <div v-show="changeGroupFlag" class="upload_group_list">
              <div class="input">
                <input><span class="icon_search" />
              </div>
              <div class="list">
                <div class="item">111</div>
                <div class="item">222</div>
                <div class="item">333</div>
                <div class="item">444</div>
              </div>
              <div class="btn" @click="showGroupWin"><span class="icon_add" />创建新系列</div>
            </div>
          </div>
          <div v-if="!hasFile" class="upload_item_list" @drop="dropUpload" @dragover.prevent>
            <div class="upload_btn_upload">
              <div class="icon_add">+</div>
              <div class="txt1">上传素材</div>
              <div class="txt2">选择素材 或 将素材拖拽至此处</div>
            </div>
            <input
              ref="fileObjectBig"
              type="file"
              class="upload_btn_input"
              multiple="multiple"
              @change="fileChange($event)"
            >
          </div>
          <div
            v-else
            class="upload_item_list clearfix"
            :class="{upload_item_audios:pageStyle==3}"
            @drop="dropUpload"
            @dragover.prevent
          >
            <div v-for="(item, index) in fileArray" :key="index" class="upload_item">
              <img v-show="item.status" :src="item.src">
              <div v-show="item.status" class="delete" @click="deleteUploadItem(index)" />
              <div v-show="!item.status&&pageStyle!=3" class="uploading">
                <el-progress :percentage="item.percent" :show-text="progressConfig.showText" color="#000" />
              </div>
              <div v-show="!item.status&&pageStyle==3" class="uploading">
                <img src="../../assets/downaudio_loading@2x.png">
                <progress-circle :bl="20" size="60" color="#AD0000" class="audio_progress" />
              </div>
            </div>
            <div class="upload_item upload_btn_small">
              <div class="txt">继续上传</div>
              <input
                ref="fileObjectSmall"
                type="file"
                class="input"
                multiple="multiple"
                @change="fileChange($event)"
              >
            </div>
          </div>
          <div class="upload_btn_common">上传完毕自动提交</div>
        </div>
        <ExtraPanel />
      </div>
    </div>
  </div>
</template>
<script>
import { uploadFile } from '@/api/upload.js'
import InputPanel from './InputPanel'
import ExtraPanel from './ExtraPanel'
import TheHeader from '@/components/TheHeader.vue'
import showGroupWin from './dialog/CreateGroup'
import imgAudioDefault from '@/assets/downaudio_default@2x.png'
import ProgressCircle from '@/components/animation/ProgressCircle.vue'
export default {
  name: 'HomePage',
  components: {
    TheHeader,
    InputPanel,
    ExtraPanel,
    ProgressCircle
  },
  data () {
    return {
      pageStyle: 3, // 1视频 2图片 3音频
      progressConfig: {
        showText: false
      },
      changeGroupFlag: false,
      hasFile: false, // 已经上传
      fileArray: [] // 存储文件对象。不区分类型
    }
  },
  methods: {
    showGroupWin () {
      showGroupWin()
    },
    uploadFile (files) {
      const that = this
      Array.prototype.forEach.call(files, (item, index) => {
        let formData = new FormData()
        let obj = {
          status: false,
          percent: 0
        }
        that.fileArray.push(obj)
        that.hasFile = true
        formData.append('file', item)
        uploadFile(formData, (e) => {
          obj.percent = e.loaded / e.total * 100
          if (obj.percent >= 100) {
            setTimeout(() => {
              if (that.pageStyle == 3) {
                obj.src = imgAudioDefault
                obj.status = true
              } else {
                let fileReader = new FileReader()
                fileReader.readAsDataURL(item)
                fileReader.onload = (e) => {
                  obj.src = e.target.result
                  obj.status = true
                }
              }
            }, 500)
          }
        })
      })
    },
    dropUpload (event) {
      event.preventDefault()
      this.uploadFile(event.dataTransfer.files)
    },
    fileChange (event) {
      this.uploadFile(event.currentTarget.files)
    },
    deleteUploadItem (index) {
      this.fileArray.splice(index, 1)
      if (this.fileArray.length === 0) {
        this.hasFile = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .content_panel{
    width:1600px;
    margin:0 auto;
    margin-top:140px;
    margin-bottom: 50px;
    overflow: hidden;
  }
  .table_panel{
    float:left;
    width:520px;
    height:960px;
    background:rgba(255,255,255,1);
  }
  .upload_detail_panel{
    float:right;
    width:1060px;
    height:960px;
  }
  .upload_item_panel{
    padding:30px 20px 20px;
    background:rgba(255,255,255,1);
  }
  .upload_item_list{
    &.none{
      width: 1020px;
      height: 838px;
    }
    margin-top:40px;
    width: 1020px;
    height: 544px;
    position: relative;
    overflow: auto;
  }
  .upload_item{
    float:left;
    width:235px;
    height:132px;
    margin-right:12px;
    margin-bottom:12px;
    position: relative;
    img{
      width:100%;
      height:100%;
      object-fit: contain;
      background: #000;
    }
    .delete{
      position: absolute;
      width:16px;
      height:16px;
      top:0;
      right:0;
      z-index: 10;
      background: url(~@/assets/icon_add_music_normal@2x.png);
      background-size:100%;
    }
    .uploading{
      width: 100%;
      height: 100%;
      background: #D8D8D8;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-progress{
        width:195px;
      }
      position: relative;
    }
  }
  .upload_btn_common{
    cursor: pointer;
    color:#000;
    width:500px;
    height:36px;
    border-radius:2px;
    border:1px solid rgba(216,216,216,1);
    font-size:16px;
    text-align: center;
    line-height: 36px;
    margin:0 auto;
  }
  .upload_btn_input,
  .upload_btn_upload{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    cursor: pointer;
    width:250px;
    height:250px;
    border:1px dotted rgba(151,151,151,1);
    color:#333;
    text-align: center;
    .icon_add{
      font-size:80px;
      margin-top:38px;
    }
    .txt1{
      margin-top:28px;
      font-size:24px;
    }
    .txt2{
      font-size:14px;
      margin-top:20px;
    }
  }
  .upload_btn_small{
    width:235px;
    height:132px;
    border:1px dashed rgba(102,102,102,1);
    position: relative;
    .txt,.input{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      cursor: pointer;
      width:100%;
      height:100%;
    }
    .txt{
      text-align: center;
      padding-top: 56px;
      font-size: 16px;
      padding-left: 32px;
      &::after{
        content: "+";
        display: block;
        position: absolute;
        top: 43px;
        left: 70px;
        font-size: 36px;
        color: #666;
      }
    }
    .input{
      opacity: 0;
    }
  }
  .upload_btn_input{
    opacity: 0;
  }
  .upload_group_panel{
    position: relative;
    .icon_add{
      display:inline-block;
      width:24px;
      height:24px;
      background:url(~@/assets/icon_add_music_normal@2x.png);
      background-size:100%;
      vertical-align: text-top;
    }
  }
  .upload_group_list{
    position: absolute;
    width:500px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 10px 0px rgba(216,216,216,1);
    border-radius:2px;
    left:50%;
    transform: translate(-50%);
    z-index: 20;
    .item{
      cursor: pointer;
      height:56px;
      line-height: 56px;
      border-bottom:1px solid #D8D8D8;
      font-size:14px;
      padding-left:10px;
      &:hover{
        box-shadow:0px 0px 10px 0px rgba(216,216,216,1);
      }
    }
    .list{
      padding: 0 40px;
    }
    .input{
      height:65px;
      padding:0 67px;
      border-bottom:1px solid #D8D8D8;
      input{
        margin-top:20px;
        width:326px;
        height:24px;
      }
      .icon_search{
        display:inline-block;
        width:24px;
        height:24px;
        background:url(~@/assets/icon_search_normal@2x.png);
        background-size:100%;
        vertical-align: bottom;
      }
    }
    .btn{
      cursor: pointer;
      height:62px;
      text-align: center;
      line-height: 62px;
    }
  }
  .el-progress-bar__outer{
    background: #fff;
  }
  .upload_item_audios {
    .upload_item{
      width:100px;
      height:100px;
    }
    .upload_btn_small{
      .txt{
        padding-left:0;
        &::after{
          top: 30px;
          left: 50%;
          font-size: 36px;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .audio_progress{
    position: absolute;
    ::v-deep .circle{
      border-width: 2px!important;
    }
  }
</style>
