import Vue from 'vue'
import FailDialog from './FailStatus.vue'
import store from '@/store'
let FtDialog = Vue.extend(FailDialog)

const FailStatus = function (msg) {
  let Dialog = new FtDialog({
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
export default FailStatus
