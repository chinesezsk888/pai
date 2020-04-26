import Vue from 'vue'
import store from '@/store'
import QRCode from './QRCode'

let QRCodeDialog = Vue.extend(QRCode)

const QRCDialog = function (msg) {
  let Dialog = new QRCodeDialog({
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
export default QRCDialog
