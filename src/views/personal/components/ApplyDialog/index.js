import Vue from 'vue'
import store from '@/store'
import ApplyDialog from './ApplyDialog'

let ApDialog = Vue.extend(ApplyDialog)

const ADialog = function (msg) {
  let Dialog = new ApDialog({
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
export default ADialog
