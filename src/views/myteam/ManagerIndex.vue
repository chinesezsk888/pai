<template>
  <div class="manager_page">
    <div class="page_title">团员管理</div>
    <div class="row">
      <div class="col1">
        <div class="th">总积分</div>
        <div class="tr">25000</div>
      </div>
      <div class="col2">
        <div class="th">到期</div>
        <div class="tr">2020-12-31</div>
      </div>
      <div class="col3">
        <div class="th">团员人数</div>
        <div class="tr">200/1000</div>
      </div>
      <div class="col4">
        <div class="btn" @click="test1">邀请加入</div>
        <div class="btn" @click="test2">申请新建团员</div>
        <div class="btn" @click="test3">设置我的团</div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'ManagerIndex',
  methods: {
    test1 () {
      this.$router.push('/personal/team_manager_index')
    },
    test2 () {
      this.$router.push('/personal/team_manager_index/new_member')
    },
    test3 () {
      this.$router.push('/personal/team_manager_index/setting')
    }
  }
}
</script>
<style lang="scss" scoped>
.manager_page{
  color:#000;
  background: #fff;
  min-height: 938px;
  overflow: hidden;
}
.page_title{
  font-size: 20px;
  height: 62px;
  border-bottom: 2px solid #F3F3F4;
  line-height: 62px;
  padding: 0 32px;
}
.row{
  display:flex;
  height:102px;
  border-bottom:8px solid #F3F3F4;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  font-family: RobotoCondensed-Regular;
}
.col1{
  width:13.061%
}
.col2{
  width:19.082%;
}
.col3{
  width:19.082%;
}
.col4{
  width:48%;
  display:flex;
  justify-content:space-between;
  padding:0 32px;
  .btn{
    cursor: pointer;
    background:rgba(255,255,255,1);
    font-size:12px;
    color:#000;
    text-align: center;
    line-height: 28px;
    width:120px;
    height:28px;
    border-radius:2px;
    border:1px solid rgba(216,216,216,1);
    margin-top:32px;
  }
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
  margin:16px 0 10px;
}
.tr{
  font-size:24px;
}

</style>
