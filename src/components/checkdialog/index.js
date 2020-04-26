import Vue from 'vue'
import CheckdialogVue from './Checkdialog'

let CheckdialogConstructor = Vue.extend(CheckdialogVue)

const Checkdialog = function (msg) {
  let dialog = new CheckdialogConstructor({
    propsData: {
      count: msg
    }
  })
  dialog.$mount()
  document.body.appendChild(dialog.$el)
}
export default Checkdialog
