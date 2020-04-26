<template>
  <el-dialog
    title="修改权限"
    :visible="visible"
    width="548px"
    top="20vh"
    center
    @close="$emit('update:show', false)"
  >
    <div class="infor">
      <div class="infor_member">将更改<span>233</span>个团员设置</div>
      <div class="infor_num">我的可用积分：<span>24457</span></div>
    </div>
    <div class="item_list">
      <div class="item">
        <div class="label">到期时间</div>
        <el-radio v-model="radio1" class="radio1" label="0">不修改</el-radio>
        <el-radio v-model="radio1" class="radio1" label="1">不限</el-radio>
        <el-radio v-model="radio1" class="radio2" label="2">限制</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">每日用量</div>
        <el-radio v-model="radio" class="radio1" label="0">不修改</el-radio>
        <el-radio v-model="radio" class="radio1" label="1">不限</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">限制</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">总分限制</div>
        <el-radio v-model="radio" class="radio1" label="0">不修改</el-radio>
        <el-radio v-model="radio" class="radio1" label="1">不限</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">限制</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">集团素材</div>
        <el-radio v-model="radio" class="radio1" label="0">不修改</el-radio>
        <el-radio v-model="radio" class="radio1" label="1">公开</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">仅集团</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">每日用分</div>
        <el-radio v-model="radio" class="radio1" label="0">不修改</el-radio>
        <el-radio v-model="radio" class="radio1" label="1">不限</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">限制</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
      <div class="item">
        <div class="label">奖<span class="block" />励</div>
        <el-radio v-model="radio" class="radio1" label="0">不修改</el-radio>
        <el-radio v-model="radio" class="radio1" label="1">不奖励</el-radio>
        <el-radio v-model="radio" class="radio2" label="2">集团</el-radio>
        <el-input v-model="daynum" placeholder="输入数量" />
      </div>
    </div>
    <div class="btn_submit">确定</div>
  </el-dialog>
</template>
<script>
export default {
  name: 'DialogPermission',
  props: {
    show: Boolean
  },
  data () {
    return {
      visible: this.show,
      radio1: '0',
      radio: '0',
      daynum: ''
    }
  },
  watch: {
    show () {
      this.visible = this.show
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>

.infor{
  display: flex;
  justify-content: space-between;
  padding-bottom:20px;
  border-bottom:1px solid #D8D8D8;
}
.infor_member{
  font-size:16px;
  color:#000;
  span{
    color:#AD0000;
    font-family: RobotoCondensed-Regular;
  }
}
.infor_num{
  font-size:14px;
  color:#333;
  span{
    font-family: RobotoCondensed-Regular;
  }
}
.item_list{
  color: #333;
  padding: 20px 0;
  border-bottom:1px solid #D8D8D8;
  margin-bottom:60px;
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
    margin-bottom: 16px;
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
  ::v-deep .el-radio__label{
    padding-left:8px;
  }
}
.btn_submit
{
  font-size:14px;
  font-weight:400;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
  color:rgba(255,255,255,1);
  width:428px;
  height:40px;
  background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
  border-radius:2px;
}
</style>
