<template>
  <div class="myteam_page">
    <div class="page_title">申请当团长</div>
    <div class="content">
      <p>团长可管理团员，奖励团员，获得更多的机会组织素材</p>
      <p>团员售图团长可获得奖励</p>
      <p>团长不可加入其它团。如加入其它团的，成为团长时将自动退出其它团</p>
      <p>申请团长需已在平台上传50个作品，无争议作品。或已出售10个作品。………………</p>
      <div class="myteam_table">
        <div class="table_item">
          <div class="label">申请信息</div>
          <textarea v-model="tableAbstract" placeholder="报名上报集团，我是政工部李闻" class="item_abstract" />
          <div class="count_num">{{ tableAbstract.length }}/600</div>
        </div>
        <div class="table_item table_input">
          <div class="phone_input">
            <div class="label">手机号</div>
            <input placeholder="输入手机号">
          </div>
          <div class="code_input">
            <div class="label">验证码</div>
            <input placeholder="输入验证码">
            <span class="btn">发送验证码</span>
          </div>
        </div>
        <div class="extra_info">
          申请将在30个工作日内完成处理 申请团长需支付费用 50 元<br> 未申请成功费用将原路退还
        </div>
      </div>
    </div>
    <div class="page_title">支付方式</div>
    <div class="content">
      1111
    </div>
    <div class="btn_default btn_default-red apply_btn">申请成为团长</div>
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
      publicStyle: true // 默认公开申请
    }
  },
  methods: {
    setStylePublic () {
      this.publicStyle = true
    },
    setStylePrivate () {
      this.publicStyle = false
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
  .content{
    padding:20px 32px;
    font-size:14px;
    color:#333;
    p{
      line-height:30px;
    }
    border-bottom: 8px solid #F3F3F4;
  }
  .myteam_table{
    margin-top:48px;
  }
  .table_item{
    margin-bottom:32px;
    position: relative;
    width:460px;
    margin-bottom:20px;
    .label{
      font-size:14px;
      color:#333;
      margin-bottom:4px;
    }
  }
  .table_input{
    display:flex;
    justify-content: space-between;
  }
  .phone_input {
    input{
      width:192px;
      font-size:14px;
      padding-left:12px;
      height:28px;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
    }
  }
  .code_input{
    input{
      width:114px;
      padding-left:12px;
      font-size:14px;
      height:28px;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
      margin-right:4px;
    }
    .btn{
      cursor: pointer;
      width:85px;
      display: inline-block;
      vertical-align: top;
      height:28px;
      font-size:12px;
      text-align: center;
      line-height: 28px;
      border-radius:2px;
      border:1px solid rgba(102,102,102,1);
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
  .extra_info{
    color:#333;
    width:200px;
    height:60px;
    line-height:20px;
  }
  .apply_btn{
    margin-top:60px;
    margin-left:30px;
  }
</style>
