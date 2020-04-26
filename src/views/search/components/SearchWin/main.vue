<template>
  <el-dialog
    title="更多筛选"
    :visible.sync="visiable"
    width="658px"
    center
    append-to-body
    :before-close="closeHandle"
    custom-class="ele_dialog-center"
  >
    <el-form
      ref="searchForm"
      size="mini"
      class="search_dialog"
    >
      <el-form-item>
        <input v-model="keyWord" placeholder="筛选关键词，以空格区分" class="item_keyword">
      </el-form-item>
      <el-form-item>
        <span class="label">尺寸：</span>
        <el-select v-model="size" placeholder="全部">
          <el-option
            v-for="item in sizeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <span class="label">题材：</span>
        <el-select v-model="size" placeholder="全部">
          <el-option
            v-for="item in sizeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span class="label">风格：</span>
        <el-select v-model="size" placeholder="全部">
          <el-option
            v-for="item in sizeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span class="label">地点：</span>
        <el-select v-model="size" placeholder="全部">
          <el-option
            v-for="item in sizeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span class="label">题材：</span>
        <el-select v-model="size" placeholder="全部">
          <el-option
            v-for="item in sizeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <span class="label">作者：</span>
        <input v-model="author">
      </el-form-item>
      <el-form-item>
        <span class="label">时间：</span>
        <el-date-picker
          v-model="bdDate"
          type="date"
          placeholder="开始"
          class="item_date"
        />
        至
        <el-date-picker
          v-model="bdDate"
          type="date"
          placeholder="结束"
          class="item_date"
        />
      </el-form-item>
      <el-form-item>
        <div class="clearfix">
          <div class="label_left">形式：</div>
          <div class="item_copyright" @click="setScreen(1)">
            <span class="icon_checkbox" :class="{'on':tableScreenId==1}" />全部
          </div>
          <div class="item_copyright" @click="setScreen(2)">
            <span class="icon_checkbox" :class="{'on':tableScreenId==2}" />横屏
          </div>
          <div class="item_copyright" @click="setScreen(3)">
            <span class="icon_checkbox" :class="{'on':tableScreenId==3}" />竖屏
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <div class="clearfix">
          <div class="label_left">版权：</div>
          <div class="item_copyright" @click="setCopyright(1)">
            <span class="icon_checkbox" :class="{'on':tableCopyrightId==1}" />售予
          </div>
          <div class="item_copyright" @click="setCopyright(2)">
            <span class="icon_checkbox" :class="{'on':tableCopyrightId==2}" />共享
          </div>
          <div class="item_copyright" @click="setCopyright(3)">
            <span class="icon_checkbox" :class="{'on':tableCopyrightId==3}" />委托
          </div>
          <div class="item_copyright" @click="setCopyright(4)">
            <span class="icon_checkbox" :class="{'on':tableCopyrightId==4}" />代售
          </div>
          <div>
            到期
            <el-date-picker
              v-model="bdDate"
              type="date"
              placeholder="选择日期"
              class="item_date"
            />
          </div>
        </div>
      </el-form-item>
      <el-form-item size="large" style="margin-top:40px" class="btns">
        <div class="btn_close" @click="closeHandle">取消</div>
        <div class="btn_submit" @click="sendFrom('loginForm')">确定</div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: 'SearchWin',
  props: {
    visiable: Boolean
  },
  data () {
    return {
      bdDate: '',
      keyWord: '',
      size: '',
      tableCopyrightId: '', // 版权
      tableScreenId: '', // 形式
      sizeOption: [{
        value: '选项1',
        label: '大'
      }, {
        value: '选项2',
        label: '中'
      }, {
        value: '选项3',
        label: '小'
      }]
    }
  },
  methods: {
    setScreen (id) {
      this.tableScreenId = id
    },
    setCopyright (id) {
      this.tableCopyrightId = id
    },
    closeHandle () {
      this.visiable = !this.visiable
      this.$destroy()
    },
    sendFrom (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.search_dialog{
  width: 538px;
  margin: 0 auto;
  .label{
    font-size:14px;
    color:#333;
  }
  .btns{
    width:332px;
    margin:0 auto;
  }
  .item_keyword{
    width:100%;
    padding-left:12px;
    height:28px;
    border-radius:2px;
    border:1px solid rgba(216,216,216,1);
  }
  .label_left{
    float:left;
    color:#333;
  }
  .item_copyright{
    cursor: pointer;
    float:left;
    color:#333;
    margin-right:20px;
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
      top: 3px;
      left: 2px;
    }
  }
}
.btn_close,.btn_submit
{
  float:left;
  width:150px;
  height:40px;
  font-size:14px;
  font-weight:400;
  border-radius:2px;
  text-align: center;
  border:1px solid #ccc;
  box-sizing: border-box;
  line-height: 38px;
  color:rgba(0,0,0,1);
  cursor: pointer;
}
.btn_submit{
  background:linear-gradient(135deg,rgba(226,6,19,1) 0%,rgba(173,0,0,1) 100%);
  margin-left: 0px;
  color:rgba(255,255,255,1);
  margin-left:20px;
}
</style>
<style lang="scss">
.search_dialog{
  .el-form-item--mini.el-form-item{
    margin-bottom:20px
  }
  .el-input__icon.el-icon-date{
    &::before,&::after{
      content:""
    }
  }
  .el-select{
    width:62px;
    margin-right:10px;
  }
  .el-input--mini .el-input__inner{
    padding:0 5px;
  }
  .el-date-editor.el-input{
    width: 148px;
  }
}
</style>
