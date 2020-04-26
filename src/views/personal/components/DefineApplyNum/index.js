import Vue from 'vue'
import store from '@/store'
import DefineApplyNum from './DefineApplyNum'

let DanDialog = Vue.extend(DefineApplyNum)

const DDialog = function (msg) {
  let Dialog = new DanDialog({
    propsData: {
      count: msg
    }
  })
  Dialog.$mount()
  Dialog.count = true
  store.dispatch({
    type: 'setHeaderPaddingRight',
    value: '17px'
  })
  document.body.appendChild(Dialog.$el)
}
export default DDialog
