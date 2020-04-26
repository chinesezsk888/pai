<template>
  <div class="bugged__material wealth__material">
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
        width="52"
      />
      <el-table-column
        prop="mediaId"
        header-align="center"
        align="center"
        label="ID"
        width="75"
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
        width="52"
      />
      <el-table-column
        prop="mediaSize"
        header-align="center"
        align="center"
        label="尺寸"
        width="80"
      />
      <el-table-column
        prop="updataTime"
        header-align="center"
        align="center"
        label="上传时间"
        width="95"
      />
      <el-table-column
        prop="mediaSell"
        header-align="center"
        align="center"
        label="售出"
        width="67"
      />
      <el-table-column
        prop="mediaEdition"
        header-align="center"
        align="center"
        label="账号"
        width="106"
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
  name: 'BuggedMaterial',
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
        mediaAdd: '一二三四五六七八三四五六七三四五六七三四五六七九十一二',
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
.bugged__material {
   .img__column {
    display:flex;
    // justify-content: flex-end;
    align-items: center;
    padding: 0 24px;
    img {
      width: 60px;
      height: 34px;
      margin-right:20px;
    }
    .title {
      width: 203px;
      font-size:14px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:20px;
    }
  }
}
</style>
