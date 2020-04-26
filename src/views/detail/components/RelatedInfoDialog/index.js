import Vue from 'vue'
import RelatedLoad from './RelatedInfo.vue'
import store from '@/store'
let RelatedInfoDialog = Vue.extend(RelatedLoad)

const RiDialog = function (msg) {
  let Dialog = new RelatedInfoDialog({
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
export default RiDialog
