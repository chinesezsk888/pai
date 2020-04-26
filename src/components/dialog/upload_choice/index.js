import Vue from 'vue'
import UploadVue from './main'
import store from '@/store'
let UploadConstructor = Vue.extend(UploadVue)

const showUploadChoice = function () {
  let dialog = new UploadConstructor()
  dialog.$mount()
  dialog.visiable = true
  store.dispatch({
    type: 'setHeaderPaddingRight',
    value: '17px'
  })
  document.body.appendChild(dialog.$el)
}
export default showUploadChoice
