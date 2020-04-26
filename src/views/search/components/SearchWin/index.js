import Vue from 'vue'
import SearchWin from './main'

let SearchWinConstructor = Vue.extend(SearchWin)

const showSearchWin = function () {
  let dialog = new SearchWinConstructor()
  dialog.$mount()
  dialog.visiable = true
  document.body.appendChild(dialog.$el)
}
export default showSearchWin
