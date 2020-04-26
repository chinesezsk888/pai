/* eslint-disable vue/no-v-html */
<template>
  <div class="search_item">
    <div class="search_title" v-html="needTitle" />
    <div class="search_key">搜索命中<span>标题</span><span>摘要</span><span>作者</span></div>
  </div>
</template>
<script>
export default {
  name: 'BaseSearch',
  data () {
    return {
      searchTitle: '搜索显示关键词前后一行就够了吧总共可显示二十五个字',
      highlight: '关键词',
      needTitle: ''
    }
  },
  mounted () {
    this.needTitle = this.searchTitle.replace(this.highlight, '<span>' + this.highlight + '</span>')
  }
}
</script>
<style scoped lang="scss">
  .search_item{
    margin-bottom:20px;
    width: 380px;
    padding:12px;
    background: #fff;
  }
  .search_title{
    font-size:14px;
    margin-bottom:8px;
    ::v-deep span{
      color:#AD0000;
      font-weight: 600;
    }
  }
  .search_key{
    font-size:14px;
    span{
      border:1px solid rgba(102,102,102,1);
      font-size:12px;
      color:#666;
      margin:12px;
      padding:0 8px;
    }
  }
</style>
