<template>
  <div class="header" :style="{'paddingRight':headerPaddingRight}">
    <div class="banner">
      <div class="banner_top">
        <div class="logo" @click="logoClick">
          <img src="../assets/demo/logo.png">
        </div>
        <div class="btns">
          <span class="btn" @click="showLimit">收藏夹</span>
          <template v-if="!loginStatus">
            <span class="btn" @click="showRegister">注册</span>
            <span class="btn-end" @click="showLogin">登录</span>
          </template>
          <template v-else="">
            <el-dropdown class="theheader_userinfor">
              <span>用户名</span>
              <el-dropdown-menu slot="dropdown">
                <div class="pnb__integral">
                  <span>积分</span>
                  <span>1264</span>
                  <span>分</span>
                  <p />
                </div>
                <el-dropdown-item
                  v-for="item in navList"
                  :key="item.connId"
                  @click.native="goPersonal(item.connId)"
                >
                  <p :class="{ 'accountFlag': item.connId == 3, 'myteamFlag': item.connId == 4 }">{{ item.name }}</p>
                </el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
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
</template>
<script>
import showLimit from '@/components/checkdialog'
import { personNavData } from '@/utils/dataConfig.js'
import { showLogin, showRegister, showUploadChoice } from '@/components/dialog'
export default {
  name: 'TheHeader',
  props: {
    loginStatus: {
      default: true,
      type: Boolean
    },
    currentNav: {
      default: '-1',
      type: String
    },
    list: {
      default () {
        return []
      },
      type: Array
    }
  },
  data () {
    return {
      banner: require('../assets/demo/demo6.jpg'),
      navList: personNavData
    }
  },
  computed: {
    headerPaddingRight () {
      return this.$store.state.headerPaddingRight
    }
  },
  methods: {
    showRegister () {
      showRegister()
    },
    showLimit () {
      showLimit(true)
    },
    showLogin () {
      showLogin()
    },
    logoClick () {
      this.$router.push('/')
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
      let name = ''
      let myType = ''
      switch (type) {
        case 0:
          name = 'HomeVideo'
          myType = '0'
          break
        case 1:
          name = 'HomeImage'
          myType = '1'
          break
        case 2:
          name = 'HomeAudio'
          myType = '2'
          break
        default:
          break
      }
      this.$router.push({ name: name, params: { type: myType } })
    },
    goPersonal (id) {
      const path = this.navList[id - 1].path
      let routeData = this.$router.resolve(path)
      window.open(routeData.href, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
  .header{
    width: 100%;
    margin-bottom:40px;
    position: fixed;
    top:0;
    z-index: 1000;
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
  .theheader_userinfor.el-dropdown{
    color: #000;
    font-size:14px;
    margin: 0 12px;
  }
  .el-dropdown-menu {
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
    .pnb__integral {
      height: 34px;
      font-weight:400;
      text-align: center;
      border-bottom: 2px solid #F4F4F4;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size:12px;
      line-height:17px;
      & span:nth-child(1) {
        color:rgba(51,51,51,1);
        margin-right: 4px;
      }
      & span:nth-child(2) {
        font-size:14px;
        font-weight:400;
        color:rgba(0,0,0,1);
        font-family: RobotoCondensed-Regular;
      }
      & span:nth-last-child(1) {
        color:rgba(51,51,51,1);
      }
      p {
        margin-left: 6px;
        margin-bottom: 2px;
        width:12px;
        height:12px;
        background: url('../assets/personalImgs/nav-v-icon.png') center no-repeat;
        background-size: 100%;
      }
    }
    & .el-dropdown-menu__item:nth-last-of-type(1) {
      height: 33px;
      line-height: 33px;
      text-align: center;
      padding: 0;
    }
  }
  .el-dropdown-menu__item{
    padding: 0;
    p {
      display: inline-block;
      color: #000;
      font-size: 12px;
      padding-left: 30px;
      padding-right: 15px;
      &.accountFlag, &.myteamFlag {
        display: flex;
        align-items: center;
        justify-content: left;
      }
      &.accountFlag::after,&.myteamFlag::after{
        clear: both;
        content: '';
        display: inline-block;
        margin-left: 8px;
        width:20px;
        height:12px;
      }
      &.accountFlag::after {
        background: url('../assets/personalImgs/nav-pass-enter-icon-small.png') center no-repeat;
        background-size: 100%;
      }
      &.myteamFlag::after {
        background: url('../assets/personalImgs/nav-invite-icon-small.png') center no-repeat;
        background-size: 100%;
      }
    }
  }
  .el-dropdown-menu__item--divided{
    margin-top:0;
  }
  .el-dropdown-menu__item--divided:before{
    content:none;
  }
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    background:rgba(247,247,247,1);
    color:#000;
    font-weight:500;
    position: relative;
    &::after{
      content:"";
      height:100%;
      position: absolute;
      width:2px;
      background: #E20613;
      top:0;
      left:0;
    }
  }

  @media all and (max-width: 1366px) {
    .search{
      width:790px;
      width: calc(100% - 436px);
      .input{
        width: 88.6%;
        width: calc(100% - 90px);
      }
      .btn_upload{
        width: 86px;
      }
    }
  }
  @media all and (max-width: 1024px) {
    .search{
      width:790px;
      width: calc(100% - 436px);
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
