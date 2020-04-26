import Vue from 'vue'
import store from '@/store'
import ModifyUserInfo from './ModifyUserInfo'

let ModifyUserInfoDialog = Vue.extend(ModifyUserInfo)

const MuiDialog = function (msg) {
  let Dialog = new ModifyUserInfoDialog({
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
export default MuiDialog
