<template>
  <div class="manager_panel">
    <div class="select_panel">
      <el-dropdown trigger="click" size="small">
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
      <div class="my_search-little">
        <el-input v-model="searchInput" placeholder="" />
        <div class="my_search_btn" />
      </div>
    </div>
    <member-list />
  </div>
</template>
<script>
import MemberList from './components/MemberList.vue'
export default {
  name: 'ManagerShow',
  components: {
    MemberList
  },
  data () {
    return {
      style: '风格',
      styleList: [ '黄金糕', '狮子头', '蚵仔煎' ]
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
    display:flex;
    justify-content: space-between;
  }
</style>
