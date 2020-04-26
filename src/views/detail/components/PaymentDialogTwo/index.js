import Vue from 'vue'
import PaymentDialog from './PaymentDialog'
import store from '@/store'
let PaymDialog = Vue.extend(PaymentDialog)

const payDialog = function (msg) {
  let Dialog = new PaymDialog({
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
export default payDialog
