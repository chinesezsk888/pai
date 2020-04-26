import axios from 'axios'
import FileSaver from 'file-saver'
import { MessageBox } from 'element-ui'
import store from '@/store'
function formatDuraton (time) {
  time = parseFloat(time)
  var hour = Math.floor(time / 3600)
  var min = Math.floor(Math.floor(time / 60) % 60)
  var sec = Math.floor(time % 60)
  hour = hour < 10 ? ('0' + hour + ':') : (hour + ':')
  min = min < 10 ? ('0' + min + ':') : (min + ':')
  sec = sec < 10 ? ('0' + sec) : (sec)
  // eslint-disable-next-line eqeqeq
  time = hour == '00:' ? (min + sec) : (hour + min + sec)
  return time
}
function downloadPic (url) { // 可跨域图片下载
  const img = new Image()
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  img.onload = function () {
    canvas.width = this.width
    canvas.height = this.height
    ctx.drawImage(this, 0, 0)

    const elt = document.createElement('a')
    elt.setAttribute('href', canvas.toDataURL('image/png'))
    elt.setAttribute('download', 'file.png')
    elt.style.display = 'none'
    document.body.appendChild(elt)
    elt.click()
    document.body.removeChild(elt)
  }
  img.src = url
  img.setAttribute('crossOrigin', 'anonymous')
}
function getFileBlob (url) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      responseType: 'blob'
    }).then(data => {
      resolve(data.data)
    }).catch(error => {
      reject(error.toString())
    })
  })
}
function downloadFiles (files) {
  files.forEach(item => {
    getFileBlob(item).then(data => {
      const urlArray = item.split('/')
      const fileName = urlArray[urlArray.length - 1] // 获取文件名
      FileSaver.saveAs(data, fileName) // 利用file-saver保存文件
    })
  })
}
// vuex 外层方法 -侧边栏下载
function sidebarDownload (item) {
  MessageBox.confirm('此操作会将之前保存的批量下载清空, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    store.dispatch({
      type: 'clearSidebarDownList'
    })
    store.dispatch({
      type: 'addSidebarDownList',
      item: item
    })
  })
}
// vuex 外层方法 -弹框固定body时减少fixed布局的影响

export {
  sidebarDownload,
  formatDuraton,
  getFileBlob,
  downloadFiles,
  downloadPic
}
