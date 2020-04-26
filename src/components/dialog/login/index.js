import Vue from 'vue'
import LoginVue from './main'
import store from '@/store'
let LoginConstructor = Vue.extend(LoginVue)

const showLogin = function () {
  let dialog = new LoginConstructor()
  dialog.$mount()
  store.dispatch({
    type: 'setHeaderPaddingRight',
    value: '17px'
  })
  dialog.visiable = true
  document.body.appendChild(dialog.$el)
}
export default showLogin
