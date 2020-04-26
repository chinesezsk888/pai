<template>
  <div>
    <div class="page_title">申请退出团长职务</div>
    <div class="myteam_table">
      <div class="table_item">
        <div class="label">说明信息</div>
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
    </div>
    <div class="btns">
      <div class="btn-default">取消</div>
      <div class="btn-red">确定</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ManagerSettingExit',
  data () {
    return {
      tableAbstract: '' // 信息
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
.myteam_table{
  padding:20px 32px;
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
</style>
