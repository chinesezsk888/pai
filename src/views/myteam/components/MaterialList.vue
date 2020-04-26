<template>
  <div class="material_list">
    <el-table
      :data="tableData"
      style="width: 100%"
      header-cell-class-name="ele_table_header_row"
      row-class-name="ele_table_row"
      :cell-class-name="setTableCellClass"
      height="550"
    >
      <el-table-column
        fixed
        prop="item"
        header-align="center"
        label="素材"
        width="300"
      >
        <div slot-scope="scope" class="table_row_1">
          <img class="thumnail" :src="scope.row.thumbnail">
          <div class="title">{{ scope.row.title }}</div>
        </div>
      </el-table-column>
      <el-table-column
        fixed
        prop="abstract"
        header-align="center"
        label="摘要"
        width="302"
      />
      <el-table-column
        fixed
        prop="copyright"
        header-align="center"
        align="center"
        label="版权"
        width="54"
      />
      <el-table-column
        fixed
        prop="size"
        header-align="center"
        align="center"
        label="尺寸"
        width="66"
      />
      <el-table-column
        fixed
        prop="date"
        header-align="center"
        align="center"
        label="上传时间"
        width="98"
      />a
      <el-table-column
        fixed
        prop="author"
        header-align="center"
        align="center"
        label="账号"
        width="120"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        thumbnail: 'https://file.moetu.org/images/2020/03/20/demo10c7a1736d6a806d44.jpg',
        title: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八',
        abstract: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五',
        copyright: '委托',
        size: '4k',
        date: '2016-05-03',
        author: '王小虎'
      }, {
        thumbnail: 'https://file.moetu.org/images/2020/03/20/demo12856824118908579a.jpg',
        title: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八',
        abstract: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五',
        copyright: '委托',
        size: '4k',
        date: '2016-05-03',
        author: '王小虎'
      }, {
        thumbnail: 'https://file.moetu.org/images/2020/03/20/demo162c0b1ffcc642f6cb.jpg',
        title: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八',
        abstract: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五',
        copyright: '委托',
        size: '4k',
        date: '2016-05-03',
        author: '王小虎'
      }]
    }
  },
  methods: {
    setTableCellClass ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 1) {
        return 'table_row_2'
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  ::v-deep .table_row_2{
    .cell{
      font-size:12px;
      line-height:16px;
    }
  }
  .table_row_1 {
    display:flex;
    justify-content: space-between;
    align-items: center;
    .thumnail{
      width:60px;
      height:34px;
      margin-right:12px;
    }
    .title{
      width:200px;
      line-height:20px;
    }
  }
</style>
