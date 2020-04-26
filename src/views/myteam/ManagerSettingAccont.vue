<template>
  <div>
    <div class="page_title">账号设置</div>
    <div class="table_panel">
      <div class="cell">
        <el-checkbox v-model="checked">手机号</el-checkbox>
        <textarea placeholder="批量输入，请使用英文逗号或空格区分 手机号创建每日默认限制100个，如有需求，联系后台编辑批量创建" />
      </div>
      <div class="cell">
        <div class="title">
          <el-checkbox v-model="checked">用户名</el-checkbox>初始密码 <input>
          <div class="title_btn">一键复制所有</div>
        </div>
        <textarea placeholder="" />
        <div class="infor">共注册30个账号，用户需登录后接收团邀请，才能成为团员。7日内首次登陆有效</div>
      </div>
      <div class="cell">
        <div class="title">
          <el-checkbox v-model="checked">邀请码</el-checkbox>
          <div class="title_btn">一键复制所有</div>
        </div>
        <textarea placeholder="" />
        <div class="infor">共生成30个邀请码，7天内有效。请妥善保管</div>
      </div>
    </div>
    <div class="page_title">权限设置</div>
    <div class="setting_panel">
      <div class="item">
        <div class="label">到期时间</div>
        <el-radio v-model="radio" class="radio1" label="1">不限</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">限制</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">每日用量</div>
        <el-radio v-model="radio" class="radio1" label="1">不限</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">限制</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">总分限制</div>
        <el-radio v-model="radio" class="radio1" label="1">不限</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">限制</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">集团素材</div>
        <el-radio v-model="radio" class="radio1" label="1">公开</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">仅集团</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">每日用分</div>
        <el-radio v-model="radio" class="radio1" label="1">不限</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">限制</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">奖<span class="block" />励</div>
        <el-radio v-model="radio" class="radio1" label="1">不奖励</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">集团</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
    </div>
    <div class="btns">
      <div class="btn-default" @click="goManagerNew">返回上一步</div>
      <div class="btn-red">确定</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ManagerSettingExit',
  data () {
    return {
      tableAbstract: '', // 信息
      radio: '1',
      daynum: ''
    }
  },
  methods: {
    goManagerNew () {
      this.$router.push('/personal/team_manager_index/new_member')
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
.btns{
  display: flex;
  width: 512px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 78px;
  margin-bottom:80px;
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
.setting_panel{
  padding:0 32px;
  display:flex;
  flex-wrap:wrap;
  .label{
    width:94px;
  }
  .radio1{
    width:86px;
  }
  .radio2{
    width:70px;
  }
  .item{
    display:flex;
    width:50%;
    margin-top: 16px;
    line-height: 24px;
  }
  ::v-deep .el-radio{
    line-height: 24px;
    margin-right:0;
  }
  ::v-deep .el-input{
    width:106px;
    height:24px;
    border-radius:0;
  }
  ::v-deep .el-input__inner{
    height:24px;
    border-radius:0;
  }
}
.table_panel{
  padding:0 104px 0 32px;
  border-bottom:8px solid #F3F3F4;
  .title{
    font-size:14px;
    margin-bottom:16px;
  }
  .title_btn{
    cursor: pointer;
    width: 96px;
    height: 28px;
    border-radius: 2px;
    border: 1px solid #d8d8d8;
    font-size: 12px;
    text-align: center;
    line-height: 28px;
    float: right;
  }
  textarea{
    resize: none;
    width:844px;
    height:72px;
    border-radius:2px;
    border:1px solid #D8D8D8;
    margin-bottom:8px;
    padding:9px 12px;
  }
  .infor{
    font-size:12px;
    color:#BBB;
  }
  .cell{
    padding:20px 0 32px;
    border-bottom:2px solid #F3F3F4;
    &:last-child{
      border:none;
    }
  }
}
</style>
