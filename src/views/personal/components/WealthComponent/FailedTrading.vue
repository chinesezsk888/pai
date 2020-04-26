<template>
  <div class="failed__trading wealth__material">
    <el-table
      :data="tableData"
      header-cell-class-name="ele_table_header_row"
      row-class-name="ele_table_row"
      style="width: 100%"
    >
      <el-table-column
        prop="orderNum"
        header-align="center"
        align="center"
        label="单号"
        width="111"
      />
      <el-table-column
        prop="mediaType"
        header-align="center"
        align="center"
        label="类型"
        width="60"
      />
      <el-table-column
        prop="mediaAdd"
        label="素材"
        header-align="center"
        width="341"
      >
        <div slot-scope="scope" class="img__column">
          <p class="add__num">{{ scope.row.mediaAddNum }}</p>
          <el-popover
            v-if="scope.row.mediaAdd"
            placement="bottom-start"
            trigger="hover"
            popper-class="popover__media__add"
            :content="scope.row.mediaAdd"
            width="432px"
          >
            <p
              slot="reference"
              class="title"
            >
              {{ scope.row.mediaAdd | mediaAddDes() }}
            </p>
          </el-popover>
        </div>
      </el-table-column>
      <el-table-column
        prop="updataTime"
        header-align="center"
        align="center"
        label="时间"
        width="162"
      />
      <el-table-column
        prop="operationInfo"
        header-align="center"
        align="center"
        label="操作信息"
        width="161"
      >
        <div slot-scope="scope" class="operation__info">
          <p>{{ scope.row.operationInfo }}</p>
        </div>
      </el-table-column>
      <el-table-column
        prop="moeny"
        header-align="center"
        align="center"
        label="金额"
      >
        <div slot-scope="scope" class="moeny__box" :class="{profit: scope.row.moenyType==='+', loss: scope.row.moenyType==='-'}">
          <span>{{ scope.row.moenyType }}</span>
          <span class="moeny__num">{{ scope.row.moenyNum }}</span>
          <span class="money__unit" :class="{ redUnit: scope.row.moenyUnit==='分'}">{{ scope.row.moenyUnit }}</span>
        </div>
      </el-table-column>
    </el-table>
    <pagination-page />
  </div>
</template>

<script>
import PaginationPage from '../Pagination'
export default {
  name: 'FailedTrading',
  components: {
    PaginationPage
  },
  filters: {
    mediaAddDes (str) {
      if (str.length >= 20) {
        return str.slice(0, 19) + '...'
      } else {
        return str
      }
    }
  },
  data () {
    return {
      tableData: [{
        orderNum: '1234567890',
        mediaType: '视频',
        mediaAddNum: '',
        mediaAdd: '一二三四五六七八九十一二三四五六七八九十八九',
        updataTime: '2019-12-12 12:21:21',
        operationInfo: '购买失败',
        moenyType: '-',
        moenyNum: '30',
        moenyUnit: '元'
      },
      {
        orderNum: '1234567890',
        mediaType: '视频',
        mediaAddNum: '',
        mediaAdd: '一二三四五六七八九十一二三四五六七八九十八九一二三四五六七八九十一二三四五六七一二三四五六七八九十一二三四五六七',
        updataTime: '2019-12-12 12:21:21',
        operationInfo: '购买失败',
        moenyType: '+',
        moenyNum: '3000',
        moenyUnit: '分'
      },
      {
        orderNum: '1234567890',
        mediaType: '视频',
        mediaAddNum: '',
        mediaAdd: '一二三四五六七八九十一二八九',
        updataTime: '2019-12-12 12:21:21',
        operationInfo: '购买失败',
        moenyType: '+',
        moenyNum: '30',
        moenyUnit: '元'
      }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.failed__trading {
  .img__column {
    padding-right: 16px;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    .add__num {
      font-size:16px;
      font-weight:600;
      color:rgba(0,0,0,1);
      line-height:21px;
    }
    .title {
      margin-left: 12px;
    }
  }
  .operation__info {
    p {
      min-width:85px;
      font-size:14px;
      font-weight:400;
      color:rgba(173,0,0,1);
      line-height:20px;
      text-align: center;
    }
  }
  .moeny__box {
    padding: 0 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    & span:nth-child(1) {
      width:9px;
      font-size:14px;
      font-weight:500;
    }
    .moeny__num {
      font-size:22px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:25px;
      font-family: RobotoCondensed-Regular;
    }
    .money__unit {
      font-size:14px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:20px;
      &.redUnit {
        color:rgba(173,0,0,1);
      }
    }
    &.profit {
      & span:nth-child(1) {
        color:rgba(173,0,0,1);
      }
      & span:nth-child(2) {
        color:rgba(173,0,0,1);
      }
    }
    &.loss {
      & span:nth-child(1) {
        color:rgba(51,51,51,1);
      }
    }
    &::after {
      position: absolute;
      content: '';
      width: calc(100% - 28px);
      height: 1px;
      top: 50%;
      background:rgba(173,0,0,1);
      transform: translateY(-50%);
    }
  }
}
</style>
<style>
.popover__media__add {
  max-width:432px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 10px 0px rgba(216,216,216,1);
  border-radius:2px;
  padding: 20px;
  font-size:14px;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:20px;
  box-sizing: border-box;
}
</style>
