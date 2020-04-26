import request from '@/utils/request'

export function getGroupVideoList (success, errorCallBack) {
  return request({
    url: '/mctpv/json/getGroupVideoList.json',
    method: 'get'
  }).then(function (res) {
    if (success) success(res.data)
  })
    .catch(function () {
      if (errorCallBack) errorCallBack()
    })
}
export function getGroupAudioList (success, errorCallBack) {
  return request({
    url: '/mctpv/json/getGroupAudioList.json',
    method: 'get'
  }).then(function (res) {
    if (success) success(res.data)
  })
    .catch(function () {
      if (errorCallBack) errorCallBack()
    })
}
export function getGroupImageList (success, errorCallBack) {
  return request({
    url: '/mctpv/json/getGroupImageList.json',
    method: 'get'
  }).then(function (res) {
    if (success) success(res.data)
  })
    .catch(function () {
      if (errorCallBack) errorCallBack()
    })
}
