export default {
  token: '', // 登录token
  sidebarDownlist: [], // 全站右下角下载
  personalNavClickId: '', // 侧边栏选项id
  animationPoint: { // 页面联动动画 鼠标点击位置
    x: -1,
    y: -1
  },
  headerPaddingRight: 0, // 弹出框时修改fixed布局的头部栏
  sidebarPaddingRight: 0, // 弹出框时修改fixed布局的侧边栏
  personalSearchInfo: {}, // 个人页面搜索传递的数据
  homepageAudio: {
    unfoldObj: null, // 首页正在展开的音频组件
    audioObj: null, // 首页正在播放的音频组件
    playObj: null // 首页正在播放的音频
  }
}
