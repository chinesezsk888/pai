<template>
  <div class="untransferred__material wealth__material">
    <el-table
      :data="tableData"
      header-cell-class-name="ele_table_header_row"
      row-class-name="ele_table_row"
      style="width: 100%"
    >
      <el-table-column
        prop="mediaType"
        header-align="center"
        align="center"
        label="类型"
        width="80"
      />
      <el-table-column
        prop="mediaAdd"
        label="素材"
        header-align="center"
        align="left"
        width="444"
      >
        <div slot-scope="scope" class="media__add">
          {{ scope.row.mediaAdd }}
        </div>
      </el-table-column>
      <el-table-column
        prop="copyRight"
        header-align="center"
        align="center"
        label="版权"
        width="80"
      />
      <el-table-column
        prop="mediaSize"
        header-align="center"
        align="center"
        label="尺寸"
        width="92"
      />
      <el-table-column
        prop="updataTime"
        header-align="center"
        align="center"
        label="上传时间"
        width="128"
      />
      <el-table-column
        prop="operation"
        header-align="center"
        align="center"
        label="操作"
        class-name="operationWord"
      />
    </el-table>
    <pagination-page />
  </div>
</template>

<script>
import PaginationPage from '../Pagination'
export default {
  name: 'UnTransferredMaterial',
  components: {
    PaginationPage
  },
  data () {
    return {
      tableData: [{
        mediaType: '视频',
        mediaId: '111',
        mediaAdd: '一二三四五六七八九十一二',
        copyRight: '委托',
        mediaSize: '4K',
        updataTime: '2019-12-12',
        mediaSell: '120次',
        mediaEdition: '本账号用户名',
        operation: '重新上传'
      },
      {
        mediaType: '视频',
        mediaId: '111',
        mediaAdd: '一二三四五六七八九十一二三四五六七八九一二一二',
        copyRight: '委托',
        mediaSize: '4K',
        updataTime: '2019-12-12',
        mediaSell: '120次',
        mediaEdition: '本账号用户名',
        operation: '重新上传'
      }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.untransferred__material {
  .media__add {
    padding: 0 26px;
  }
}
</style>
