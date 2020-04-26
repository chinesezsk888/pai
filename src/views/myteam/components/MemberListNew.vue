<template>
  <div>
    <div class="material_list">
      <el-table
        :data="tableData"
        style="width: 100%"
        header-cell-class-name="ele_table_header_row"
        row-class-name="ele_table_row"
        height="430"
      >
        <el-table-column
          type="selection"
          header-align="center"
          align="center"
          width="52"
        />
        <el-table-column
          fixed
          prop="author"
          header-align="center"
          align="center"
          label="子账号名"
          width="208"
        />
        <el-table-column
          fixed
          prop="message"
          header-align="center"
          align="center"
          label="留言"
          width="404"
        />
        <el-table-column
          fixed
          prop="upload"
          header-align="center"
          align="center"
          label="上传"
          width="71"
        />
        <el-table-column
          fixed
          prop="sale"
          header-align="center"
          align="center"
          label="售出"
          width="71"
        />
        <el-table-column
          fixed
          prop="phone"
          header-align="center"
          align="center"
          label="手机号"
          width="129"
        />
      </el-table>
    </div>
    <div class="btns">
      <div class="btn">不再显示此邀请</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        author: '王小虎',
        phone: '12345678900',
        upload: '100',
        sale: '100',
        message: '一二三四五六七八九十一二三四五六七八九十'
      }, {
        author: '王小虎',
        phone: '12345678900',
        upload: '100',
        sale: '100',
        message: '一二三四五六七八九十一二三四五六七八九十'
      }, {
        author: '王小虎',
        phone: '12345678900',
        upload: '100',
        sale: '100',
        message: '一二三四五六七八九十一二三四五六七八九十'
      }, {
        author: '王小虎',
        phone: '12345678900',
        upload: '100',
        sale: '100',
        message: '一二三四五六七八九十一二三四五六七八九十'
      }, {
        author: '王小虎',
        phone: '12345678900',
        upload: '100',
        sale: '100',
        message: '一二三四五六七八九十一二三四五六七八九十'
      }]
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .material_list{
    margin-bottom:20px;
  }
  .btns{
    display: flex;
    .btn{
      cursor: pointer;
      font-size:12px;
      color:#000;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
      padding: 5px 12px 4px;
      margin-right: 8px;
    }
  }
</style>
