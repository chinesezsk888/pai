import Vue from 'vue'
import MessageVue from './main'
import store from '@/store'
let MessageConstructor = Vue.extend(MessageVue)

const showMessage = function ({ msg, title }) {
  let dialog = new MessageConstructor({
    propsData: {
      msg,
      title
    }
  })
  dialog.$mount()
  dialog.visiable = true
  store.dispatch({
    type: 'setHeaderPaddingRight',
    value: '17px'
  })
  document.body.appendChild(dialog.$el)
}
export default showMessage
