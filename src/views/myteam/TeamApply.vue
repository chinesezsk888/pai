<template>
  <div class="myteam_page">
    <div class="page_title">您当前还没有开启参团</div>
    <div class="explain">
      <p>参团后，可按团团规则，共享团内资源，可共用积分、分享素材、获赠积分、获得免费素材、升级VIP…… </p>
      <p>如报名后，可能收到多个团邀请，可选择参加其中一个团</p>
      <p>一位用户，只能参加一个团，中途可退团。</p>
      <p>退团后，再次申请加入，需团长批准</p>
    </div>
    <div class="page_title">报名</div>
    <div class="myteam_table">
      <div class="apply_style">
        <el-radio v-model="publicStyle" label="1">公开申请 | 所有团长将能看到你的申请</el-radio>
      </div>
      <div class="apply_style">
        <el-radio v-model="publicStyle" label="2">指定申请 | 只有该团长能看到你的申请</el-radio>
      </div>
      <div class="table_item">
        <div class="label">报名信息</div>
        <textarea v-model="tableAbstract" placeholder="报名上报集团，我是政工部李闻" class="item_abstract" />
        <div class="count_num">{{ tableAbstract.length }}/600</div>
      </div>
      <div class="btns">
        <div class="btn_default  btn_default-red">我要报名参团</div>
        <div class="btn_default" @click="goTeamApplyLeader">申请当团长</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TeamInvite',
  components: {
  },
  data () {
    return {
      tableAbstract: '', // 报名信息
      publicStyle: '1' // 默认公开申请
    }
  },
  methods: {
    goTeamApplyLeader () {
      this.$router.push('/personal/myteam_apply_leader')
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
    height: 62px;
    border-bottom: 2px solid #F3F3F4;
    line-height: 60px;
    padding: 0 32px;
  }
  .explain{
    padding:20px 38px;
    font-size:14px;
    color:#333;
    p{
      line-height:30px;
    }
    border-bottom: 8px solid #F3F3F4;
  }
  .btn_default-red{
    margin-right:12px;
  }
  .myteam_table{
    padding:20px 32px;
  }
  .apply_style{
    font-size:14px;
    margin-bottom:20px;
    ::v-deep .el-radio__label{
      padding-left:8px;
    }
  }
  .table_item{
    margin-bottom:32px;
    position: relative;
    width:460px;
    margin-bottom:60px;
    .label{
      font-size:14px;
      color:#333;
      margin-bottom:4px;
    }
  }
  .item_abstract{
    resize: none;
    color:#333;
    padding: 6px 0 12px 12px;
    width:100%;
    height:100px;
    border-radius:2px;
    border:1px solid rgba(216,216,216,1);
  }
  .count_num{
    position: absolute;
    bottom: 8px;
    font-size:12px;
    color:#999;
    right: 12px;
  }

</style>
