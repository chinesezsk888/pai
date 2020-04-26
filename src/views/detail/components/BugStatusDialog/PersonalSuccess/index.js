import Vue from 'vue'
import PersonalSuccess from './PersonalSuccessDialog'
import store from '@/store'
let PersonalSuccessDialog = Vue.extend(PersonalSuccess)

const PSDialog = function (msg) {
  let Dialog = new PersonalSuccessDialog({
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
export default PSDialog
