import Vue from 'vue'
import store from '@/store'
import ApplyRefund from './ApplyRefund'

let ApplyRefundDialog = Vue.extend(ApplyRefund)

const ARDialog = function (msg) {
  let Dialog = new ApplyRefundDialog({
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
export default ARDialog
