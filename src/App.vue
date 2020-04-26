<template>
  <div id="app" class="app">
    <router-view />
    <TheSidebar />
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
export default {
  name: 'App',
  components: {
    TheSidebar
  }
}
</script>
<style lang="scss">
  html{
    background:rgba(243,243,244,1);
  }
  .app{
    .video-js .vjs-poster {
      background-size: cover!important;
      height: 360px;
    }
    @media screen and (max-width: 1180px) {
      .video__box .video-js .vjs-poster {
        height: 190px;
      }
    }
    .vjs_video_433-dimensions.vjs-fluid {
      padding-top: 0!important;
      height: 360px;
    }
    .video-js .vjs-play-control,
    .video-js .vjs-volume-panel
    {
      display: none!important;
    }
    .video-js .vjs-control-bar {
      height: 3px;
    }
    .video-js .vjs-progress-control {
      height: 3px;
      background-color: #fff;
    }
    .video-js .vjs-play-progress {
      background-color: #AD0000;
    }
    .video-js .vjs-progress-control .vjs-progress-holder {
      margin: 0!important;
    }
    .video-js .vjs-play-progress:before {
      display: none;
    }
    .video-js .vjs-progress-holder {
      height: 3px!important;
    }
    .video-js .vjs-mouse-display,
    .video-js .vjs-time-tooltip
    {
      display: none!important;
    }
  }
</style>
