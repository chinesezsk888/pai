<template>
  <div class="myteam_page">
    <div class="page_title">
      参团邀请<div class="page_btn">取消报名</div>
    </div>
    <div>
      <div class="title">
        团队名1<div class="btn">接受邀请</div>
      </div>
      <div class="row">
        <div class="col1">
          <div class="th">入团奖励</div>
          <div class="tr">1000<span style="font-size:12px">分</span></div>
        </div>
        <div class="col2">
          <div class="th">团员人数</div>
          <div class="tr">233</div>
        </div>
        <div class="col3">
          <div class="th">到期时间</div>
          <div class="tr">2020-12-12</div>
        </div>
        <div class="col2">
          <div class="th">每日限量</div>
          <div class="tr">100</div>
        </div>
        <div class="col2">
          <div class="th">每日限份</div>
          <div class="tr">200</div>
        </div>
        <div class="col4">
          <div class="circle_bg">
            <div class="circle">
              出售分成
            </div>
            <progress-circle :bl="10" size="54" color="#F3F3F4" class="circle_block" />
          </div>
          <div>
            <div class="th">个人</div>
            <div class="tr">90%</div>
          </div>
          <div style="margin-left:16px;">
            <div class="th">团长</div>
            <div class="tr">10%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressCircle from '@/components/animation/ProgressCircle.vue'
export default {
  name: 'TeamInvite',
  components: {
    ProgressCircle
  },
  data () {
    return {
      itemList: [{
        title: '团队名1'
      }]
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
  .page_title{
    font-size: 20px;
    height: 68px;
    border-bottom: 8px solid #F3F3F4;
    line-height: 60px;
    padding: 0 32px;
  }
  .page_btn{
    cursor: pointer;
    width:88px;
    height:24px;
    border-radius:2px;
    border:1px solid rgba(216,216,216,1);
    font-size:12px;
    line-height: 24px;
    text-align: center;
    color:#000;
    float: right;
    margin-top:20px;
  }
  .title{
    height: 58px;
    line-height: 58px;
    padding:0 32px 0 39px;
    border-bottom:2px solid #F3F3F4;
  }
  .btn{
    cursor: pointer;
    float:right;
    margin-top:16px;
    width:88px;
    height:26px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
    border-radius:2px;
    font-size:12px;
    color:#333;
    text-align: center;
    line-height: 26px;
  }
  .row{
    display:flex;
    height:102px;
    border-bottom:8px solid #F3F3F4;
  }
  .col1{
    width:13.061%
  }
  .col2{
    width:13.877%;
  }
  .col3{
    width:19.081%
  }
  .col4{
    width:25.204%;
    display: flex;
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
      padding-left: 40px;
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
  .circle_bg{
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-image: linear-gradient(90deg, rgba(213,0,0,1), rgba(173,0,0,1));
    margin-top:18px;
    margin-left:39px;
    margin-right:20px;
    position: relative;
  }
  .circle{
    background: #fff;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    font-size: 12px;
    padding: 10px;
    margin-top: 4px;
    margin-left: 4px;
  }
  .circle_block{
    position: absolute;
    top:0;
    left:0;
  }
</style>
