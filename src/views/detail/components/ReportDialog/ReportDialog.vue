<template>
  <el-dialog
    title="举报"
    :visible.sync="count"
    width="580px"
    center
    append-to-body
    :before-close="changeShow"
    custom-class="reportBox ele_dialog-center"
  >
    <el-form ref="reportForm" :model="reportForm" :rules="rules" class="report__form--box">
      <el-form-item label="举报内容:" prop="type">
        <el-checkbox-group v-model="reportForm.type">
          <el-checkbox label="版权不符合" name="type" />
          <el-checkbox label="内容违规" name="type" />
          <el-checkbox label="内容重复" name="type" />
          <el-checkbox label="低俗" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="留言:" prop="message" class="rt__item--message">
        <el-input v-model="reportForm.message" type="textarea" placeholder="请输入内容" @input="changeMessage" />
        <p><span class="textareaLenght">{{ textareaNum }}</span>/800</p>
      </el-form-item>
      <el-form-item label="联系方式:" prop="contact" class="rt__item--contact">
        <el-input v-model="reportForm.contact" placeholder="请输入内容" @input="changeContact" />
        <p><span class="contactLenght">{{ contactNum }}</span>/80</p>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <div class="closeBtn" @click="changeShow()">取 消</div>
      <div class="primaryBtn" @click="sendReport('reportForm')">确 定</div>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: 'ReportDialog',
  props: {
    count: Boolean
  },
  data () {
    var validateContact = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'))
      } else if (value.length > 80) {
        callback(new Error('字数不能超过80'))
      } else {
        callback()
      }
    }
    var validateMessage = (rule, value, callback) => {
      if (value.length > 800) {
        callback(new Error('字数不能超过800'))
      } else {
        callback()
      }
    }
    return {
      reportForm: {
        type: [],
        message: '',
        contact: ''
      },
      rules: {
        type: [
          { type: 'array', trigger: 'change' }
        ],
        message: [
          { validator: validateMessage, trigger: 'blur' }
        ],
        contact: [
          { required: true, validator: validateContact, trigger: 'blur' }
        ]
      },
      textareaNum: 0,
      contactNum: 0
    }
  },
  methods: {
    changeShow () {
      store.dispatch({
        type: 'setHeaderPaddingRight',
        value: '0'
      })
      this.count = !this.count
      this.$destroy()
    },
    changeMessage () {
      let messageLenght = this.reportForm.message.length
      this.textareaNum = messageLenght
    },
    changeContact () {
      let contactLenght = this.reportForm.contact.length
      this.contactNum = contactLenght
    },
    sendReport (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.reportForm)
          console.log('111')
        //   this.count = !this.count
        //   this.$destroy()
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
  .reportBox {
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 8px 0px rgba(0,0,0,0.5);
    border-radius:4px;
    padding: 20px 35px 40px;
    .report__form--box {
      padding: 30px 0 60px;
      .el-form-item {
        &.rt__item--message,
        &.rt__item--contact {
          position: relative;
          p {
            font-size:9px;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:13px;
            position: absolute;
            right: 10px;
            bottom: -20px;
          }
        }
        &.rt__item--contact {
          ::v-deep .el-form-item__label {
            position: relative;
          }
          ::v-deep .el-form-item__error{
            position: absolute;
            color:#999;
            font-size:14px;
            height:20px;
            padding-left: 17px;
            &::after{
              content: '\e6db';
              display: block;
              position: absolute;
              top:0;
              left:0;
            }
          }
        }
        &.is-required:not(.is-no-asterisk) {
          ::v-deep .el-form-item__label-wrap {
            &>.el-form-item__label:before{
              position: absolute;
              top: 10px;
              left: -10px;
              content: '';
              display:block;
              width:4px;
              height:4px;
              border-radius: 50%;
              background-color:#E20613;
            }
          }
        }
        &.is-required:not(.is-no-asterisk) {
          &>.el-form-item__label:before {
              position: absolute;
              top: 10px;
              left: -10px;
              content: '';
              display:block;
              width:4px;
              height:4px;
              border-radius: 50%;
              background-color:#E20613;
          }
        }
      }
      .el-form-item:nth-child(2) {
        margin-bottom: 18px;
        ::v-deep .el-textarea__inner {
          resize: none;
          height: 100px;
        }
      }
      .el-checkbox {
        margin-right: 25px;
      }
      & .el-form-item:nth-child(1) {
        margin-bottom: 9px;
      }
      ::v-deep .el-checkbox__input{
        &.is-checked {
          &+.el-checkbox__label {
            color: #606266;
          }
          .el-checkbox__inner {
            background-color: #fff;
            border-color: #DCDFE6;
          }
          .el-checkbox__inner:hover {
            border-color: #DCDFE6;
          }
          .el-checkbox__inner::after {
            box-sizing: content-box;
            content: "";
            border: 1px solid #FFF;
            border-left: 0;
            border-top: 0;
            height: 7px;
            left: 4px;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 6px;
            height: 6px;
            background: rgba(226,6,19,1);
            transform: translate(-45%,-50%);
          }
        }
        &.is-indeterminate {
          .el-checkbox__inner {
            background-color: #fff;
            border-color: #DCDFE6;
          }
        }
        &.is-focus {
          .el-checkbox__inner {
            border-color: #DCDFE6;
          }
        }
      }
      ::v-deep .el-checkbox:nth-last-child(1) {
        margin-right: 0px;
      }
      ::v-deep .el-form-item__content,
      ::v-deep .el-form-item__label {
        line-height: 25px;
      }
      .rt__item--contact {
        ::v-deep .el-input__inner {
          height: 28px;
        }
      }

    }
    .dialog-footer {
      div {
        width: 220px;
      }
    }
  }
</style>
