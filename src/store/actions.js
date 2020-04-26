export default {
  setToken (context, payload) {
    context.commit('setToken', payload)
  },
  addSidebarDownList (context, payload) {
    context.commit('addSidebarDownList', payload)
  },
  clearSidebarDownList (context, payload) {
    context.commit('clearSidebarDownList', payload)
  },
  removeSidebarDownList (context, payload) {
    context.commit('removeSidebarDownList', payload)
  },
  setAnimationPoint (context, payload) {
    context.commit('setAnimationPoint', payload)
  },
  setHeaderPaddingRight (context, payload) {
    context.commit('setHeaderPaddingRight', payload)
  },
  sendPersonalSearchInfo (context, payload) {
    context.commit('sendPersonalSearchInfo', payload)
  },
  sendPersonalSearchAxios ({ dispatch }, payload) {
    if (JSON.stringify(payload) === '{}') {
      return false
    } else {
      return dispatch({
        type: 'sendPersonalSearchInfo',
        infoObj: payload
      })
    }
  },
  setHomepageAudioFold (context, payload) {
    context.commit('setHomepageAudioFold', payload)
  },
  setHomepageAudioPlay (context, payload) {
    context.commit('setHomepageAudioPlay', payload)
  }
}
