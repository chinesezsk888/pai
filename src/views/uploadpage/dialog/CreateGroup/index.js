import Vue from 'vue'
import newGroupWin from './main'

let GroupWinConstructor = Vue.extend(newGroupWin)

const showGroupWin = function () {
  let dialog = new GroupWinConstructor()
  dialog.$mount()
  dialog.visiable = true
  document.body.appendChild(dialog.$el)
}
export default showGroupWin
