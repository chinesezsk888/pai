import Vue from 'vue'
import RegisterVue from './main'
import store from '@/store'
let RegisterConstructor = Vue.extend(RegisterVue)

const showRegister = function () {
  let dialog = new RegisterConstructor()
  dialog.$mount()
  dialog.visiable = true
  store.dispatch({
    type: 'setHeaderPaddingRight',
    value: '17px'
  })
  document.body.appendChild(dialog.$el)
}
export default showRegister
