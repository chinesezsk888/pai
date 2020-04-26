import Vue from 'vue'
import TeamSuccess from './TeamSuccessDialog'
import store from '@/store'
let TeamSuccessDialog = Vue.extend(TeamSuccess)

const TSDialog = function (msg) {
  let Dialog = new TeamSuccessDialog({
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
export default TSDialog
