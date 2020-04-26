<template>
  <div class="pagination__box">
    <span>首页</span>
    <!-- <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :pager-count="5"
      :page-size="100"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination> -->
    <div class="pb__change--box">
      <span @click="prevPage()">
        <i class="el-icon-arrow-left" />
      </span>
      <span class="pcb__current--page">{{ currentPage }}</span>
      <span @click="nextPage()">
        <i class="el-icon-arrow-right" />
      </span>
    </div>
    <span>共{{ zongPage }}页</span>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {},
  data () {
    return {
      currentPage: 1,
      zongPage: 7
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    prevPage () {
      if (this.currentPage <= 1) {
        this.currentPage = 1
        return
      } else {
        this.currentPage = this.currentPage - 1
      }
      console.log(this.currentPage)
    },
    nextPage () {
      if (this.currentPage >= this.zongPage) {
        this.currentPage = this.zongPage
        return
      } else {
        this.currentPage = this.currentPage + 1
      }
      console.log(this.currentPage)
    }
  }
}
</script>
<style lang="scss" scoped>
.pagination__box {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    span {
        font-size:14px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:20px;
    }
    .pb__change--box {
        font-size: 14px;
        margin: 0 10px;

        .pcb__current--page {
            padding: 0 10px;
            cursor: auto;
        }
        span {
            cursor: pointer;
        }
    }
}
</style>
<style>
/* .pagination__box .el-pager {
    width: 35.5px;
    overflow: hidden;
}
.pagination__box .el-pagination .btn-prev,
.pagination__box .el-pagination .btn-next
{
  padding: 0px;
}
.pagination__box .el-pagination button {
  min-width: auto;
}
.pagination__box .el-pager li.active {
    color: black;
} */
</style>
