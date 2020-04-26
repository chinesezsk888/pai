import Vue from 'vue'
import SuccessDialog from './SuccessStatus.vue'
import store from '@/store'
let StDialog = Vue.extend(SuccessDialog)

const SuccessStatus = function (msg) {
  let Dialog = new StDialog({
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
export default SuccessStatus
