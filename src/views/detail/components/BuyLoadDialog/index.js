import Vue from 'vue'
import BuyLoad from './BuyLoad.vue'
import store from '@/store'
let BuyLoadDialog = Vue.extend(BuyLoad)

const InfoDialog = function (msg) {
  let Dialog = new BuyLoadDialog({
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
