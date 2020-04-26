import Vue from 'vue'
import WaitDialog from './WaitStatus.vue'
import store from '@/store'
let WtDialog = Vue.extend(WaitDialog)

const WaitStatus = function (msg) {
  let Dialog = new WtDialog({
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
export default WaitStatus
