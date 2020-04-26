<template>
  <div class="table_panel">
    <div class="last_txt_btn">调取上一次文本</div>
    <div class="table_item">
      <div class="label red_star">标题</div>
      <div class="table_input">
        <input v-model="tableTitle" placeholder="输入内容" class="item_title">
        <div class="count_num">{{ tableTitle.length }}/28</div>
      </div>
    </div>
    <div class="table_item">
      <div class="label">摘要</div>
      <div class="table_input">
        <textarea v-model="tableAbstract" placeholder="输入内容" class="item_abstract" />
        <div class="count_num">{{ tableAbstract.length }}/600</div>
      </div>
    </div>
    <div class="table_item">
      <div class="label red_star">分类</div>
      <div class="item_classify">
        <el-select v-model="classifyValue" placeholder="请选择">
          <el-option
            v-for="item in classifyOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="table_item">
      <div class="label red_star">标签</div>
      <div class="clearfix">
        <input v-model="tableTag" placeholder="输入内容，空格区分" class="item_tag">
        <div class="item_tag_btn">
          <span class="icon_checkbox" />自动生成标签
        </div>
      </div>
    </div>
    <div class="table_item clearfix">
      <div style="float:left">
        <div class="label red_star">作者</div>
        <input v-model="tableAuthor" placeholder="最长十二字" class="item_author">
      </div>
      <div style="float:right">
        <div class="label red_star">素材日期</div>
        <el-date-picker
          v-model="tableMaterialDate"
          type="date"
          placeholder="选择日期"
        />
      </div>
    </div>
    <div class="table_item">
      <div class="label red_star">版权</div>
      <div class="clearfix">
        <div class="item_copyright">
          <el-radio v-model="copyright" label="1">售予</el-radio>
          <el-radio v-model="copyright" label="2">共享</el-radio>
          <el-radio v-model="copyright" label="3">委托</el-radio>
          <el-radio v-model="copyright" label="4">代售</el-radio>
        </div>
        <div>
          到期
          <el-date-picker
            v-model="tableEndDate"
            type="date"
            placeholder="选择日期"
            class="item_date"
          />
        </div>
      </div>
    </div>
    <div class="table_item">
      <div class="label red_star">所属权选择<div class="btn-line">设为默认</div></div>
      <el-radio v-model="radio1" label="1">共享集团主号 | 中国图片总社</el-radio>
      <el-radio v-model="radio1" label="2">仅本账号</el-radio>
      <div class="txt-extra">如选择共享团员，团员将免费使用该作品</div>
    </div>
    <div class="table_item">
      <div class="label red_star">价格 <span class="sub_label">| 该组系列中每一份素材价格</span><div class="btn-line">设为默认</div></div>
      <el-radio v-model="radio2" label="1">
        价格
      </el-radio>
      <el-radio v-model="radio2" label="2">免费</el-radio>
    </div>
    <div class="table_item">
      <div class="label red_star">允许平台促销 <span class="sub_label">| 平台促销可以低于定价方式出售</span></div>
      <el-radio v-model="radio3" label="1">可允许限时免费</el-radio>
      <el-radio v-model="radio3" label="2">不得低于</el-radio>
      <el-radio v-model="radio3" label="3">不允许</el-radio>
    </div>
    <div class="table_footer">
      <div class="item_agreement" @click="setAgreement"><span class="icon_checkbox" :class="{on:tableAgreement}" />我同意版权协议并保证所传内容合规合法，承担相应责任。</div>
      <div class="btns">
        <div class="btn_default">取消</div>
        <div class="btn_default">保存文本</div>
        <div class="btn_default btn_default-red">提交入库</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputPanel',
  data () {
    return {
      copyright: '1',
      radio3: '', // 允许平台促销
      radio2: '1', // 价格
      radio2Num: '10', //
      radio1: '1', // 所属权选择
      tableAbstract: '', // 摘要
      tableTitle: '', // 标题
      tableTag: '', // 标签
      tableAuthor: '', // 作者
      tableTagArray: [], // 自动生成标签
      tableMaterialDate: '', // 素材日期
      tableEndDate: '', // 到期
      tableCopyrightId: '', // 版权
      classifyValue: '',
      classifyOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      tableAgreement: false // 是否同意协议
    }
  },
  methods: {
    setAgreement () {
      this.tableAgreement = !this.tableAgreement
    }
  }
}
</script>
<style lang="scss" scoped>
  .table_panel{
    color:#333;
    font-size:14px;
    padding: 30px 28px;
    position: relative;
  }
  .table_footer{
    position: absolute;
    bottom:30px;
    .item_agreement{
      margin-bottom:20px;
    }
  }
  .table_item{
    margin-bottom:24px;
    position: relative;
    .sub_label{
      font-size:12px;
      color:#333;
    }
    .txt-extra{
      font-size: 12px;
      color: #bbb;
      margin: 3px 0 0 16px;
    }
    .btn-line{
      cursor: pointer;
      float:right;
      font-size:12px;
      font-weight:600;
      color:#000;
      border-bottom:1px solid;
    }
    .count_num{
      position: absolute;
      bottom: 7px;
      font-size:12px;
      color:#999;
      right: 10px;
    }
    .label{
      position: relative;
      margin-bottom: 5px;
    }
    .red_star{
      &::before{
        content:'';
        display:block;
        width:4px;
        height:4px;
        background:rgba(226,6,19,1);
        border-radius: 50%;
        position: absolute;
        left: -9px;
        top: 6px;
      }
    }
    input{
      height:28px;
      padding: 0px 30px 0 12px;
      color:#333;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
    }
    .item_tag{
      width:343px;
      float:left;
    }
    .item_tag_btn{
      float:right;
      color:#BBB;
      margin-top: 6px;
    }
    .item_author{
      width:192px;
      padding: 0px 0 0 12px;
    }
    .item_copyright{
      cursor: pointer;
      float:left;
      margin-right:17px;
      margin-top:6px;
    }
    .item_abstract{
      resize: none;
      color:#333;
      padding: 6px 0 20px 12px;
      width:100%;
      height:100px;
      border-radius:2px;
      border:1px solid rgba(216,216,216,1);
    }
    .item_title{
      width:100%;
    }
  }
  .last_txt_btn{
    cursor: pointer;
    font-size:14px;
    color:#000;
    width:128px;
    height:28px;
    line-height: 26px;
    text-align: center;
    border-radius:2px;
    border:1px solid rgba(216,216,216,1);
    margin-bottom:30px;
  }
  .btn_default{
    margin-right:12px;
  }
  .btn_default-red{
    margin:0;
  }
  .icon_checkbox{
    display: inline-block;
    margin-right:8px;
    width:12px;
    height:12px;
    border:1px solid rgba(216,216,216,1);
  }
  .icon_checkbox.on{
    position: relative;
    &::after{
      position: absolute;
      width: 6px;
      height: 6px;
      background:#e20613;
      content: "";
      display: block;
      top: 2px;
      left: 2px;
    }
  }
</style>
<style lang="scss" >
.table_panel{
  .el-date-editor.el-input{
    width: 148px;
  }
  .el-input__inner{
    height: 28px;
    border-radius: 2px;
    color:#333;
    line-height: 28px;
    border: 1px solid #d8d8d8;
  }
  .el-input__icon{
    line-height: 28px;
  }
}
</style>
