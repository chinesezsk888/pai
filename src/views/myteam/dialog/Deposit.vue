<template>
  <el-dialog
    title="充值积分"
    :visible="visible"
    width="350px"
    center
    custom-class="ele_dialog-center"
    @close="$emit('update:show', false)"
  >
    <div class="infor_member">将更改<span>233</span>个团员设置</div>
    <div class="row">
      <div class="label">充值积分</div>
      <el-input-number
        v-model="num"
        controls-position="right"
        :max="99999"
        :step="100"
        :min="100"
      />
      <div class="txt_score">分</div>
    </div>
    <div class="row">
      <div class="label">总&nbsp;积&nbsp;分</div>
      <div class="total_num"><span>12</span> 分</div>
    </div>
    <div class="extra_info">注：初始显示原积分 随充值增加数值</div>
    <div class="btn_submit">确定</div>
  </el-dialog>
</template>
<script>
export default {
  name: 'DialogDeposit',
  props: {
    show: Boolean
  },
  data () {
    return {
      visible: this.show,
      num: 100
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
.infor_member{
  font-size:16px;
  color:#000;
  padding:0 13px;
  margin-bottom:30px;
  span{
    color:#AD0000;
    font-family: RobotoCondensed-Regular;
  }
}
.row{
  height:42px;
  line-height: 42px;
  font-size:20px;
  color:#000;
  margin-bottom:20px;
  display:flex;
  position: relative;
  padding:0 13px;
  .total_num{
    font-family: RobotoCondensed-Regular;
    margin-right: 8px;
    font-size:16px;

    span{
      font-size: 24px;
      margin-right: 12px;
      border-bottom: 1px solid;
    }
  }
  .label{
    margin-right:12px;
  }
  .txt_score{
    position: absolute;
    right: 40px;
    font-size: 14px;
    color: #000;
  }
}
.extra_info{
  font-size: 14px;
  color: #bbb;
  text-align: right;
  margin:-20px -11px 60px 0
}
.btn_submit
{
  font-size:14px;
  font-weight:400;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
  color:rgba(255,255,255,1);
  width:230px;
  height:40px;
  background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
  border-radius:2px;
}
</style>
