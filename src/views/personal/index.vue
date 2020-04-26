<template>
  <div class="personal__box">
    <the-header />
    <div class="personal__main">
      <div class="pm__flex--box">
        <PersonalNav :list="navList" />
        <PersonalMain />
      </div>
      <the-page-footer />
    </div>
  </div>
</template>

<script>
import PersonalNav from './PersonalNav'
import PersonalMain from './PersonalMain'
import ThePageFooter from '@/components/ThePageFooter'
import { personNavData } from '@/utils/dataConfig.js'
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    PersonalNav,
    PersonalMain,
    ThePageFooter,
    TheHeader
  },
  props: {},
  data () {
    return {
      navList: personNavData
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.personal__box {
  width: 100%;
  height: 100%;
  background:rgba(243,243,244,1);
  position: relative;
  padding-top: 120px;
  ::v-deep .header {
    margin-bottom: 0px;
    .nav_bar {
      font-size: 16px;
      height: 38px;
      .nav_bar_btn {
        .current::after {
          bottom:-8px;
          left:-8px;
        }
      }
    }
  }
  .personal__main {
    .pm__flex--box {
      display: flex;
      justify-content: center;
      min-height: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
