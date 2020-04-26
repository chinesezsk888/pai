import Vue from 'vue'
import ReportDialog from './ReportDialog.vue'
import store from '@/store'
let RtDialog = Vue.extend(ReportDialog)

const InfoDialog = function (msg) {
  let Dialog = new RtDialog({
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
