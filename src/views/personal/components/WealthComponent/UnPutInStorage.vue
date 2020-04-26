<template>
  <div class="un__put__in__storage wealth__material">
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
        width="76"
      />
      <el-table-column
        prop="mediaId"
        header-align="center"
        align="center"
        label="ID"
        width="99"
      />
      <el-table-column
        prop="mediaAdd"
        label="素材"
        header-align="center"
        width="332"
      >
        <div slot-scope="scope" class="img__column">
          <img class="" :src="scope.row.imageUrl">
          <div class="title">{{ scope.row.mediaAdd }}</div>
        </div>
      </el-table-column>
      <el-table-column
        prop="copyRight"
        header-align="center"
        align="center"
        label="版权"
        width="76"
      />
      <el-table-column
        prop="mediaSize"
        header-align="center"
        align="center"
        label="尺寸"
        width="88"
      />
      <el-table-column
        prop="updataTime"
        header-align="center"
        align="center"
        label="上传时间"
        width="124"
      />
      <el-table-column
        prop="mediaEdition"
        header-align="center"
        align="center"
        label="账号"
      />
    </el-table>
    <pagination-page />
  </div>
</template>

<script>
import PaginationPage from '../Pagination'
export default {
  name: 'UnPutInStorage',
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
        imageUrl: 'http://139.196.248.235:8089/wap/image/4/169/729.jpg',
        operation: '下载'
      },
      {
        mediaType: '视频',
        mediaId: '111',
        mediaAdd: '一二三四五六七八九十一二',
        copyRight: '委托',
        mediaSize: '4K',
        updataTime: '2019-12-12',
        mediaSell: '120次',
        mediaEdition: '本账号用户名',
        imageUrl: 'http://139.196.248.235:8089/wap/image/4/169/729.jpg',
        operation: '下载'
      }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.un__put__in__storage {
  .img__column {
    display:flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: 34px;
      margin-right:20px;
    }
  }
}
</style>
