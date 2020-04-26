<template>
  <div class="header">
    <div class="banner" :class="{'show_action':isFixed}">
      <div class="banner_top_bg" />
      <div class="banner_top">
        <div class="logo">
          <img src="../assets/demo/logo.png">
        </div>
        <div class="btns">
          <span class="btn" @click="testDownload">收藏夹</span>
          <span class="btn" @click="showRegister">注册</span>
          <span class="btn-end" @click="showLogin">登录</span>
        </div>
      </div>
      <div class="search search-big">
        <div class="input">
          <input>
          <div class="btn_search" @click="goSearchPage" />
          <el-dropdown>
            <span class="el-dropdown-link">
              内容<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>视频</el-dropdown-item>
              <el-dropdown-item>图片</el-dropdown-item>
              <el-dropdown-item>音乐</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="btn_upload" @click="goUploadPage">上传素材</div>
      </div>
      <div class="item_panel">
        <swiper
          ref="mySwiper"
          :options="swiperOption"
        >
          <swiper-slide v-for="item in bannerVideoArray" :key="item.infor">
            <div
              class="item"
              @click="swiperClickHandle"
            >
              <video autoplay muted loop :src="item.src" />
              <div class="author">
                作者：{{ item.author }}
              </div>
              <div class="infor">
                ID:{{ item.infor }}
              </div>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination" />
        </swiper>
      </div>
    </div>
    <div class="nav_bar" :class="{'show_action':isFixed}">
      <div class="nav_bar_btn">
        <div :class="{current:currentNav==0}" @click="navHandle(0)">视频</div>
        <div :class="{current:currentNav==1}" @click="navHandle(1)">图片</div>
        <div :class="{current:currentNav==2}" @click="navHandle(2)">音乐</div>
        <div class="nav_line" :class="setNavLine()" />
      </div>
    </div>
    <div class="header-fixed" :class="{'show_action':isFixed}" :style="{'paddingRight':headerPaddingRight}">
      <div class="banner">
        <div class="banner_top">
          <div class="logo">
            <img src="../assets/demo/logo.png">
          </div>
          <div class="btns">
            <span class="btn" @click="testDownload">收藏夹</span>
            <span class="btn" @click="showRegister">注册</span>
            <span class="btn-end" @click="testMessage">登录</span>
          </div>
        </div>
        <div class="search">
          <div class="input">
            <input>
            <div class="btn_search" @click="goSearchPage" />
            <el-dropdown>
              <span class="el-dropdown-link">
                内容<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>视频</el-dropdown-item>
                <el-dropdown-item>图片</el-dropdown-item>
                <el-dropdown-item>音乐</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="btn_upload" @click="goUploadPage">上传素材</div>
        </div>
      </div>
      <div class="nav_bar">
        <div class="nav_bar_btn">
          <div :class="{current:currentNav==0}" @click="navHandle(0)">视频</div>
          <div :class="{current:currentNav==1}" @click="navHandle(1)">图片</div>
          <div :class="{current:currentNav==2}" @click="navHandle(2)">音乐</div>
          <div class="nav_line" :class="setNavLine()" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import showLimit from '@/components/checkdialog'
import { showLogin, showRegister, showMessage, showUploadChoice } from '@/components/dialog'
export default {
  name: 'TheHeader',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    currentNav: {
      default: '-1',
      type: String
    },
    list: {
      default () {
        return []
      },
      type: Array
    },
    isFixed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        observer: true,
        observeParents: true,
        on: {
          slideChangeTransitionStart: () => {
            // let swiper = this.$refs.mySwiper.swiper
            // this.currentGroup = swiper.activeIndex + 1
          },
          click: () => {

          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'my_pagination',
          bulletActiveClass: 'my_pagination_active'
        }
      },
      bannerVideoArray: [{
        src: 'http://cloudvideo.thepaper.cn/video/e723745fba0a4015b03845c65221e15f/hd/d2054ce7-29c2-48c9-a577-39b47b232199-33f5172b-5a74-71d5-5792-7ae4a7749a94.mp4',
        author: '圣诞配得上',
        infor: '1'
      }, {
        src: 'http://cloudvideo.thepaper.cn/video/13ec10694bca4c388fe5142ff40f450e/hd/65bd52e6-1d43-4916-827a-c75a6a011132-6a20570a-cdaf-8b0e-d112-b641cf05d139.mp4',
        author: '圣诞配得上',
        infor: '2'
      }, {
        src: 'http://cloudvideo.thepaper.cn/video/e723745fba0a4015b03845c65221e15f/hd/d2054ce7-29c2-48c9-a577-39b47b232199-33f5172b-5a74-71d5-5792-7ae4a7749a94.mp4',
        author: '圣诞配得上',
        infor: '3'
      }, {
        src: 'http://cloudvideo.thepaper.cn/video/13ec10694bca4c388fe5142ff40f450e/hd/65bd52e6-1d43-4916-827a-c75a6a011132-6a20570a-cdaf-8b0e-d112-b641cf05d139.mp4',
        author: '圣诞配得上',
        infor: '4'
      }, {
        src: 'http://cloudvideo.thepaper.cn/video/e723745fba0a4015b03845c65221e15f/hd/d2054ce7-29c2-48c9-a577-39b47b232199-33f5172b-5a74-71d5-5792-7ae4a7749a94.mp4',
        author: '圣诞配得上',
        infor: '5'
      }]
    }
  },
  computed: {
    headerPaddingRight () {
      return this.$store.state.headerPaddingRight
    }
  },
  mounted () {

  },
  methods: {
    swiperClickHandle () {
      showMessage({
        msg: '测试点击',
        title: '点击生效了'
      })
    },
    testDownload () {
      this.$store.dispatch('addDownList')
    },
    testMessage () {
      showMessage({
        msg: '您所上传的内容XXXX.mov，与库中内容重复，未能入库。请检查后再操作。',
        title: '重复上传内容'
      })
    },
    showLimit () {
      showLimit(true)
    },
    showRegister () {
      showRegister()
    },
    showLogin () {
      showLogin()
    },
    goUploadPage () {
      showUploadChoice()
    },
    goSearchPage () {
      this.$router.push('/search')
    },
    setNavLine () {
      let navClass = ''
      switch (this.currentNav) {
        case '0':
          navClass = 'current0'
          break
        case '1':
          navClass = 'current1'
          break
        case '2':
          navClass = 'current2'
          break
      }
      return navClass
    },
    navHandle (type) {
      let scrollTop = 0
      if (type === 0) {
        scrollTop = 431
      }
      if (type === 1) {
        scrollTop = 1501
      }
      if (type === 2) {
        scrollTop = 2801
      }
      window.scroll(0, scrollTop)
    }
  }
}
</script>
<style lang="scss" scoped>
  .header{
    width: 100%;
    margin-bottom:40px;
    transition: all 0.6s ease-in-out;
    position: relative;
    .banner{
      &.show_action{
        visibility: hidden;
      }
    }
    .nav_bar{
      &.show_action{
        visibility: hidden;
      }
    }
  }
  .banner{
    position: relative;
    width: 100%;
    height: 475px;
    transition: all 0.6s ease-in-out;
  }
  .nav_line{
    position: absolute;
    bottom:-21px;
    left: -1000015px;
    content:'';
    display: block;
    width:48px;
    height:4px;
    background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
    transition: all 0.6s ease-in-out;
    &.current0{
      left:15px;
    }
    &.current1{
      left:404px;
    }
    &.current2{
      left:798px;
    }
  }
  .banner_top{
    padding:0 60px;
    position: absolute;
    top:0;
    z-index: 15;
    width:100%;
    height:140px;
    transition: all 0.4s ease-in-out;
    .logo{
      float:left;
    }
    .btns{
      cursor: pointer;
      margin-top:26px;
      font-size:14px;
      color:#fff;
      float:right;
    }
    .btn-end{
      margin-left:12px;
    }
    .btn{
      position: relative;
      margin:0 12px;
      &::after{
        position: absolute;
        content:'';
        display:block;
        top:3px;
        right: -12px;
        width:1px;
        height:11px;
        background:rgba(255,255,255,1);
      }
    }
  }
  .banner_top_bg{
    position: absolute;
    top:0;
    z-index: 10;
    width:100%;
    height:140px;
    background:linear-gradient(180deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
    opacity:0.5;
  }
  .item_panel{
    width: 100%;
    height: 475px;
    position: absolute;
    top:0;
    left:0;
    transition: all 0.4s ease-in-out;
  }
  .item{
    position: relative;
    width: 100%;
    height: 475px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-size:14px;
    color:#fff;
    div{
      width:50%;
      position: absolute;
      bottom:14px;
    }
    video{
      width:100%;
      height:100%;
    }
    .author{
      left:70px;
    }
    .infor{
      right:70px;
      text-align: right;
    }
  }
  .nav_bar{
    width: 100%;
    height:60px;
    background:rgba(255,255,255,1);
    box-shadow:0px 10px 10px 0px rgba(0,0,0,0.05);
    font-size:24px;
  }
  .nav_bar_btn{
    position: relative;
    width: 860px;
    max-width: 100%;
    padding: 0 15px;
    margin:0 auto;
    padding-top:12px;
    display: flex;
    justify-content: space-between;
    div{
      cursor: pointer;
    }
    .current{
      font-weight: 500;
    }
  }
  .search {
    position: absolute;
    top:218px;
    width: 70%;
    max-width: 100%;
    left:50%;
    transform: translate(-50%);
    z-index: 20;
    .el-dropdown{
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 38px;
      line-height: 38px;
      padding-left: 20px;
      border-right: 1px solid #fff;
      margin-top: 1px;
    }
    .input{
      width: 90%;
      width: calc(100% - 104px);
      height:40px;
      float:left;
      position: relative;
      input{
        background:rgba(255,255,255,1);
        opacity:0.8;
        width: 100%;
        height: 100%;
        padding: 0 84px;
        border: 1px solid #fff;
      }
      .btn_search{
        cursor: pointer;
        position: absolute;
        top:0;
        right:0;
        width: 44px;
        height: 38px;
        border-left: 1px solid #fff;
        margin-top: 1px;
        background: url(~@/assets/icon_search_normal@2x.png) no-repeat;
        background-size:20px 20px;
        background-position: center;
        &:active{
          background-image: url(~@/assets/icon_search_press@2x.png);
        }
      }
    }
    .btn_upload{
      cursor: pointer;
      text-align: center;
      line-height: 40px;
      font-size:16px;
      color:#fff;
      margin-left:4px;
      float:left;
      width:100px;
      height:40px;
      background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
    }
  }

  .header-fixed{
    opacity: 0;
    height: 0;
    width: 100%;
    margin-bottom:40px;
    position: absolute;
    bottom: -40px;
    z-index: 1000;
    transition:  0.4s ease-in-out;
    transition-property: height,opacity,top;
    overflow: hidden;
    &.show_action{
      opacity: 1;
      height: 120px;
      position: fixed;
      top:0;
    }
    .banner{
      position: relative;
      width: 100%;
      transition: all 0.6s ease-in-out;
      height:60px;
      background: #fff;
    }
    .banner_top{
      padding:0 60px;
      position: absolute;
      top:0;
      z-index: 40;
      width:100%;
      height:60px;
      transition: all 0.4s ease-in-out;
      .logo{
        cursor: pointer;
        float:left;
        img{
          max-height: 60px;
        }
      }
      .btns{
        cursor: pointer;
        margin-top:26px;
        font-size:14px;
        color:#000;
        float:right;
      }
      .btn-end{
        margin-left:12px;
      }
      .btn{
        position: relative;
        margin:0 12px;
        &::after{
          position: absolute;
          content:'';
          display:block;
          top:3px;
          right: -12px;
          width:1px;
          height:11px;
          background:#000;
        }
      }
    }
    .nav_line{
      position: absolute;
      bottom:-21px;
      left: -1000015px;
      content:'';
      display: block;
      width:48px;
      height:4px;
      background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
      transition: all 0.6s ease-in-out;
      &.current0{
        left:15px;
      }
      &.current1{
        left:404px;
      }
      &.current2{
        left:798px;
      }
    }
    .nav_bar{
      width: 100%;
      height:60px;
      background:rgba(255,255,255,1);
      box-shadow:0px 10px 10px 0px rgba(0,0,0,0.05);
      font-size:24px;
    }
    .nav_bar_btn{
      position: relative;
      width: 860px;
      max-width: 100%;
      padding: 0 15px;
      margin:0 auto;
      padding-top:12px;
      display: flex;
      justify-content: space-between;
      div{
        cursor: pointer;
      }
      .current{
        font-weight: 500;
      }
    }
    .search {
      position: absolute;
      top:20px;
      width: 70%;
      max-width: 100%;
      left:50%;
      transform: translate(-50%);
      z-index: 100;
      .el-dropdown{
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 38px;
        line-height: 38px;
        padding-left: 20px;
        border-right: 1px solid #D8D8D8;
        margin-top: 1px;
      }
      .input{
        width: 90%;
        width: calc(100% - 104px);
        height:40px;
        float:left;
        position: relative;
        input{
          background: #F3F3F4;
          border: 0;
          opacity:0.8;
          width: 100%;
          height: 100%;
          padding: 0 84px;
        }
        .btn_search{
          cursor: pointer;
          position: absolute;
          top:0;
          right:0;
          width: 44px;
          height: 38px;
          border-left: 1px solid #D8D8D8;
          margin-top: 1px;
          background: url(~@/assets/icon_search_normal@2x.png) no-repeat;
          background-size:20px 20px;
          background-position: center;
          &:active{
            background-image: url(~@/assets/icon_search_press@2x.png);
          }
        }
      }
      .btn_upload{
        cursor: pointer;
        text-align: center;
        line-height: 40px;
        font-size:16px;
        color:#fff;
        margin-left:4px;
        float:left;
        width:100px;
        height:40px;
        background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
      }
    }
  }
  .my_pagination{
    width:15px;
    height:4px;
    background:rgba(255,255,255,1);
    opacity:0.75;
    display:inline-block;
    margin:0 4px;
  }
  .my_pagination:first-child,
  .my_pagination:last-child{
    width:8px;
    height:4px;
    background:rgba(255,255,255,1);
    opacity:0.5;
  }
  .my_pagination.my_pagination_active{
    width:30px;
    height:4px;
    background:rgba(255,255,255,1);
    opacity: 1;
  }
  @media all and (max-width: 1366px) {
    .header-fixed{
      .search{
        width:790px;
        width: calc(100% - 436px);
        &.search-big{
          width:90%;
        }
        .input{
          width: 88.6%;
          width: calc(100% - 90px);
        }
        .btn_upload{
          width: 86px;
        }
      }
    }
  }
  @media all and (max-width: 1024px) {
    .search{
      width:790px;
      width: calc(100% - 436px);
      &.search-big{
        width:90%;
      }
      .input{
        width: 88.6%;
        width: calc(100% - 90px);
      }
      .btn_upload{
        width: 86px;
      }
    }
  }

</style>
