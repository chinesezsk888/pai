<template>
  <div>
    <the-home-header v-if="headerHomepage" :is-fixed="isFixed" :current-nav="currentHomeNav" />
    <the-header v-else :current-nav="currentNav" />
    <div class="contain" :class="{'common':!headerHomepage}">
      <router-view />
    </div>
    <the-page-footer />
  </div>
</template>
<script>
import ThePageFooter from '@/components/ThePageFooter'
import TheHomeHeader from '@/components/TheHomeHeader.vue'
import TheHeader from '@/components/TheHeader.vue'
export default {
  name: 'HomePageIndex',
  components: {
    TheHomeHeader,
    TheHeader,
    ThePageFooter
  },
  data () {
    return {
      isFixed: false,
      headerHomepage: true,
      currentNav: '-1',
      currentHomeNav: '-1'
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'resetHeader'
  },
  mounted () {
    this.resetHeader()
    window.addEventListener('scroll', () => {
      var scrolltop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrolltop > 390) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
      if (scrolltop > 0) {
        this.currentHomeNav = '0'
      }
      if (scrolltop > 1200) {
        this.currentHomeNav = '1'
      }
      if (scrolltop > 2500) {
        this.currentHomeNav = '2'
      }
    })
  },
  methods: {
    resetHeader () {
      if (this.$route.params.type) {
        this.headerHomepage = false
        this.currentNav = this.$route.params.type
      } else {
        this.headerHomepage = true
      }
    }
  }
}
</script>
<style lang="scss">
  .contain{
    &.common{
      margin-top: 120px;
      .audio_panel{
        margin-top: 160px;
      }
    }
    transition: all 0.6s;
  }
  .audio_panel{
    width:1577px;
    max-width: 100%;
    margin:0 auto;
    margin-top:40px;
    min-height: 750px;
    overflow: hidden;
  }
  .audio_panel_contain{
    width:1612px;
    .item{
      margin-right:32px;
      margin-bottom:40px;
      float:left;
    }
  }
  // 1580px // 1182px // 780px

  @media all and (max-width: 1580px) {
    .audio_panel{width:1182px;}
    .audio_panel_contain{width:1206px;}
  }
  @media all and (max-width: 1182px) {
    .audio_panel{width:780px;}
    .audio_panel_contain{width:850px;}
  }
</style>
