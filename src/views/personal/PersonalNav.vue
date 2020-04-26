<template>
  <div class="personal__nav__box">
    <div class="user">
      用户名某某某
    </div>
    <div class="pnb__integral">
      <span>积分</span>
      <span>1264</span>
      <p />
    </div>
    <ul class="user__ul">
      <li
        v-for="item in list"
        :key="item.connId"
        :class="{ 'grayBg': item.connId === clickId }"
        @click="changeMain(item.connId)"
      >
        <p :class="{ 'accountFlag': item.connId == 3, 'myteamFlag': item.connId == 4 }">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonalNav',
  components: {},
  props: {
    // eslint-disable-next-line vue/require-default-prop
    list: Array
  },
  data () {
    return {
      clickId: ''
    }
  },
  computed: {},
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.setNavOn(val.name)
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted () {
    this.setNavOn(this.$route.name)
  },
  created () {
  },
  methods: {
    setNavOn (routeName) {
      switch (routeName) {
        case 'Wealth':
          this.clickId = '2'
          break
        case 'Account':
          this.clickId = '3'
          break
        case 'TeamShow':
        case 'TeamApplyLeader':
        case 'TeamInvite':
        case 'TeamApply':
          this.clickId = '4'
          break
        case 'ManagerIndex':
        case 'ManagerShow':
        case 'ManagerSetting':
        case 'ManagerShowNew':
        case 'ManagerSettingExit':
          this.clickId = '5'
          break
        default:
          this.clickId = '1'
      }
    },
    changeMain (clickid) {
      this.goRouter(clickid)
    },
    goRouter (id) {
      const path = this.list[id - 1].path
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.personal__nav__box{
  width: 180px;
  // height:937px;
  background:rgba(255,255,255,1);
  margin-right: 20px;
  @media screen and (max-width: 1197px) {
    width: 120px;
    margin-right: 10px;
  }
  .user {
    height:52px;
    font-size:14px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:52px;
    text-align: center;
    border-bottom: 2px solid #F4F4F4;
    box-sizing: border-box;
  }
  .pnb__integral {
    height: 56px;
    font-weight:400;
    text-align: center;
    border-bottom: 2px solid #F4F4F4;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    & span:nth-child(1) {
      font-size:14px;
      color:rgba(51,51,51,1);
      line-height:20px;
    }
    & span:nth-child(2) {
      font-size:21px;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:24px;
      font-family: RobotoCondensed-Regular;
    }
    p {
      margin-left: 8px;
      width:16px;
      height:16px;
      background: url(~@/assets/personalImgs/nav-v-icon.png) center no-repeat;
      background-size: 100%;
    }
  }
  ul {
    overflow: hidden;
    &.user__ul li:nth-child(1) {
      margin-top: 24px;
    }
    li {
      width:100%;
      height: 34px;
      line-height: 34px;
      // text-align: center;
      font-size:16px;
      font-weight:500;
      color:rgba(0,0,0,1);
      margin: 18px 0;
      cursor: pointer;
      box-sizing: border-box;
      border-left: 4px solid #FFFFFF;
      p {
        padding-left: 58px;
        @media screen and (max-width: 1197px) {
          padding-left: 28px;
        }
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
          width:24px;
          height:16px;
        }
        &.accountFlag::after {
          background: url(~@/assets/personalImgs/nav-pass-enter-icon-big.png) center no-repeat;
          background-size: 100%;
        }
        &.myteamFlag::after {
          background: url(~@/assets/personalImgs/nav-invite-icon-big.png) center no-repeat;
          background-size: 100%;
        }
      }
      &.grayBg {
        background:rgba(243,243,244,1);
        border-left: 4px solid #E20613;
        font-weight: 600;
      }
    }
  }
}
</style>
