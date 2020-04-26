export default {
  setToken (state, payload) {
    state.token = payload.token
  },
  addSidebarDownList (state, payload) { // 全站右下角下载
    if (!state.sidebarDownlist.includes(payload.item)) {
      state.sidebarDownlist.push(payload.item)
    }
  },
  clearSidebarDownList (state, payload) {
    state.sidebarDownlist = []
  },
  removeSidebarDownList (state, payload) {
    state.sidebarDownlist = state.sidebarDownlist.filter(item => {
      return payload.id !== item.id
    })
  },
  setAnimationPoint (state, payload) {
    state.animationPoint = payload.point
  },
  setHeaderPaddingRight (state, payload) {
    state.headerPaddingRight = payload.value
  },
  sendPersonalSearchInfo (state, payload) {
    state.personalSearchInfo = payload.infoObj
  },
  setHomepageAudioFold (state, payload) {
    state.homepageAudio.unfoldObj = payload.unfoldObj
  },
  setHomepageAudioPlay (state, payload) {
    state.homepageAudio.audioObj = payload.audioObj
  }
}
