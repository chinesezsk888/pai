<template>
  <div class="search_nav">
    <el-select v-model="searchNav.leixing" placeholder="版权类型">
      <el-option
        v-for="item in leixingOption"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="searchNav.style" placeholder="风格">
      <el-option
        v-for="item in styleOption"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <span class="search_nav_btn" @click="showSearchWin">更多筛选</span>
  </div>
</template>
<script>
import showSearchWin from './SearchWin'
export default {
  name: 'SearchNav',
  data () {
    return {
      searchNav: {
        leixing: '版权类型',
        style: '风格'
      },
      leixingOption: [],
      styleOption: []
    }
  },
  mounted () {
    this.styleOption = [{
      value: '选项1',
      label: '大'
    }, {
      value: '选项2',
      label: '中'
    }, {
      value: '选项3',
      label: '小'
    }]
    this.leixingOption = [{
      value: '选项1',
      label: '大'
    }, {
      value: '选项2',
      label: '中'
    }, {
      value: '选项3',
      label: '小'
    }]
  },
  methods: {
    showSearchWin () {
      showSearchWin()
    }
  }
}
</script>
<style lang="scss" scoped>
  .search_nav{
    margin-bottom:40px;
    text-align: center;
    ::v-deep .el-input__inner{
      border: 0;
      background: inherit;
      color:#000;
      text-align: right;
    }
    ::v-deep .el-select .el-input .el-select__caret{
      color:#000;
    }
    ::v-deep .el-select{
      width: 120px;
    }
  }
  .search_nav_btn{
    cursor: pointer;
    margin-left:40px;
    font-size:14px;
  }
</style>
