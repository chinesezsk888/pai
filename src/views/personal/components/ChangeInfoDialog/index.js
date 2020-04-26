import Vue from 'vue'
import store from '@/store'
import ChangeInfo from './ChangeInfo'

let CheckInfoDialog = Vue.extend(ChangeInfo)

const InfoDialog = function (msg) {
  let Dialog = new CheckInfoDialog({
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
