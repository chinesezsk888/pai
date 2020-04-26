<template>
  <div>
    <div class="page_title">团队设置<div class="title_btn" @click="goSettingExit">申请退出团长职务</div></div>
    <div class="setting_money">
      <div class="title">售图分成比例</div>
      <div class="con">
        <div class="cell">
          <div class="cell_title">团长获得</div>
          <div class="cell_num red">9.9%</div>
        </div>
        <div class="slider">
          <el-slider v-model="value1" />
        </div>
        <div class="cell">
          <div class="cell_title">个人获得</div>
          <div class="cell_num">90%</div>
        </div>
        <div class="cell">
          <div class="cell_title">平台分成</div>
          <div class="cell_num">0.1%</div>
        </div>
      </div>
      <div class="infor">更改分成比例后，若团员比例减少，只对后续加入的团员生效。此前加入的团员按原比例分成。</div>
    </div>
    <div class="page_title">集团素材</div>
    <div class="setting_panel">
      <el-radio v-model="radio" label="1">公开可见</el-radio>
      <el-radio v-model="radio" label="2">仅集团可见</el-radio>
    </div>
    <div class="btns">
      <div class="btn-default">取消</div>
      <div class="btn-red">确定</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ManagerSetting',
  data () {
    return {
      value1: 0,
      radio: '1'
    }
  },
  methods: {
    goSettingExit () {
      this.$router.push('/personal/team_manager_index/setting_exit')
    }
  }
}
</script>
<style lang="scss" scoped>
.page_title{
  font-size: 20px;
  height: 62px;
  border-bottom: 2px solid #F3F3F4;
  line-height: 60px;
  padding: 0 32px;
}
.setting_panel{
  padding:20px 32px;
  ::v-deep .el-radio__label{
    padding-left:8px;
  }
}
.title_btn{
  cursor: pointer;
  width:120px;
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
.setting_money{
  padding:20px 32px;
  border-bottom:8px solid #F3F3F4;
  .con{
    display:flex;
  }
  .title{
    font-size:16px;
    margin-bottom:16px;
  }
  .cell{
    width:56px;
    height:58px;
    margin-bottom:8px;
    margin-right:32px;
  }
  .infor{
    font-size:12px;
    color:#BFBFBF;
  }
  .cell_title{
    font-size:14px;
    color:#4D4D4D;
    margin-bottom:10px;
  }
  .cell_num{
    font-size:24px;
    font-family:RobotoCondensed-Regular;
    &.red{
      color:#B40000
    }
  }
  .slider{
    width:300px;
    margin-right:32px;
    margin-top: 16px;
  }
}
.btns{
  display: flex;
  width: 512px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 330px;
}
.btn-default{
  cursor: pointer;
  width:240px;
  height:40px;
  border:1px solid rgba(216,216,216,1);
  border-radius:2px;
  font-size:14px;
  color:#000;
  text-align: center;
  line-height: 40px;
}
.btn-red{
  cursor: pointer;
  width:240px;
  height:40px;
  background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
  border-radius:2px;
  font-size:14px;
  color:#fff;
  text-align: center;
  line-height: 40px;
}
</style>
