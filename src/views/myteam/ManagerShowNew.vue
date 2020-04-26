<template>
  <div class="manager_panel">
    <div class="select_panel">
      <el-dropdown trigger="click" size="small" @command="changeStyle">
        <span class="el-dropdown-link">
          {{ style }}<i class="el-icon-arrow-down el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,index) in styleList"
            :key="index"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <member-list-new />
    <div class="btns">
      <div class="btn-default">取消</div>
      <div class="btn-red" @click="goSettingAccont">下一步 设置账号</div>
    </div>
  </div>
</template>
<script>
import MemberListNew from './components/MemberListNew.vue'
export default {
  name: 'ManagerShow',
  components: {
    MemberListNew
  },
  data () {
    return {
      style: '风格',
      styleList: [ '黄金糕', '狮子头', '蚵仔煎' ]
    }
  },
  methods: {
    goSettingAccont () {
      this.$router.push('/personal/team_manager_index/setting_accont')
    }
  }
}
</script>
<style lang="scss" scoped>
  .manager_panel{
    padding:32px 20px;
  }
  .select_panel{
    margin-bottom:24px;
  }
  .btns{
    display: flex;
    width: 512px;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 80px;
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
