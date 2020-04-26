import Vue from 'vue'
import DownLoad from './Download.vue'
import store from '@/store'
let DownLoadDialog = Vue.extend(DownLoad)

const InfoDialog = function (msg) {
  let Dialog = new DownLoadDialog({
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
export default InfoDialog
