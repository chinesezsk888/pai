<template>
  <div>
    <div class="material_list">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-class-name="getHeaderCellClass"
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
          prop="date"
          header-align="center"
          align="center"
          label="时间限制"
          width="116"
        />
        <el-table-column
          fixed
          prop="storeLimit"
          header-align="center"
          align="center"
          label="积分限制"
          width="80"
        />
        <el-table-column
          fixed
          prop="dayNum"
          header-align="center"
          align="center"
          label="每日 限量"
          width="63"
        />
        <el-table-column
          fixed
          prop="dayStore"
          header-align="center"
          align="center"
          label="每日 限分"
          width="66"
        />a
        <el-table-column
          fixed
          prop="uploadNum"
          header-align="center"
          align="center"
          label="上传"
          width="71"
        />
        <el-table-column
          fixed
          prop="saleNum"
          header-align="center"
          align="center"
          label="售出"
          width="83"
        />
        <el-table-column
          fixed
          prop="status"
          header-align="center"
          align="center"
          label="状态"
          width="68"
        >
          <div v-if="scope.row.status == 1" slot-scope="scope">
            激活
          </div>
          <div v-else style="color:#AD0000">
            停用
          </div>
        </el-table-column>
        <el-table-column
          fixed
          prop="phone"
          header-align="center"
          align="center"
          label="手机号"
          width="124"
        >
          <div slot-scope="scope">{{ scope.row.phone == ''? '/':scope.row.phone }}</div>
        </el-table-column>
      </el-table>
    </div>
    <div class="btns">
      <div class="btn">删除</div>
      <div class="btn" @click="showDeposit">充值积分</div>
      <dialog-deposit :show.sync="depositShow" />
      <div class="btn" @click="showPermission">修改权限</div>
      <dialog-permission :show.sync="permissionShow" />
    </div>
  </div>
</template>

<script>
import DialogDeposit from '../dialog/Deposit.vue'
import DialogPermission from '../dialog/Permission.vue'
export default {
  components: {
    DialogDeposit,
    DialogPermission
  },
  data () {
    return {
      depositShow: false,
      permissionShow: false,
      tableData: [{
        date: '2016-05-03',
        author: '王小虎',
        storeLimit: 10000,
        dayNum: 100,
        dayStore: 100,
        uploadNum: 1111,
        saleNum: 100,
        status: 1,
        phone: '12345678900'
      }, {
        date: '2016-05-03',
        author: '王小虎',
        storeLimit: 10000,
        dayNum: 100,
        dayStore: 100,
        uploadNum: 1111,
        saleNum: 100,
        status: 0,
        phone: ''
      }, {
        date: '2016-05-03',
        author: '王小虎',
        storeLimit: 10000,
        dayNum: 100,
        dayStore: 100,
        uploadNum: 1111,
        saleNum: 100,
        status: 1,
        phone: '12345678900'
      }]
    }
  },
  methods: {
    getHeaderCellClass ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 4 || columnIndex == 5) {
        return 'ele_table_header_row ele_table_header_row_12'
      } else {
        return 'ele_table_header_row'
      }
    },
    showDeposit () {
      this.depositShow = true
    },
    showPermission () {
      this.permissionShow = true
    }
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
