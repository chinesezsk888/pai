import Vue from 'vue'
import InvestMoney from './InvestMoneyDialog'
import store from '@/store'
let InvestMoneyDialog = Vue.extend(InvestMoney)

const IMDialog = function (msg) {
  let Dialog = new InvestMoneyDialog({
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
export default IMDialog
