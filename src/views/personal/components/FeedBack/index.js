import Vue from 'vue'
import FeedBack from './FeedBack'
import store from '@/store'
let FeedBackDialog = Vue.extend(FeedBack)

const FBDialog = function (msg) {
  let Dialog = new FeedBackDialog({
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
export default FBDialog
