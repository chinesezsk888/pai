import Vue from 'vue'
import store from '@/store'
import AccountChange from './AccountChange'

let AcDialog = Vue.extend(AccountChange)

const ACDialog = function (msg) {
  let Dialog = new AcDialog({
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
export default ACDialog
