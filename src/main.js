import '@/styles/index.scss'
import 'vue-photo-preview/dist/skin.css'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import '@/styles/myelement.scss'
import '@/assets/font/font.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import preview from 'vue-photo-preview'
import VideoPlayer from 'vue-video-player'
import { VueMasonryPlugin } from 'vue-masonry'
import { Dialog, Form, FormItem, Input, Dropdown, DropdownMenu, DropdownItem, Popover, Slider,
  CheckboxGroup, Checkbox, DatePicker, Select, Option, Progress, Radio,
  Table, TableColumn, InputNumber, Tabs, TabPane
} from 'element-ui'
import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(VueMasonryPlugin)
Vue.use(VideoPlayer)
Vue.use(preview)
Vue.use(Slider)
Vue.use(Dialog)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Popover)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Progress)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Radio)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
