import request from '@/utils/request'

export function getVideoList (success, errorCallBack) {
  return request({
    url: '/mctpv/json/getVideoList.json',
    method: 'get'
  }).then(function (res) {
    if (success) success(res.data)
  })
    .catch(function () {
      if (errorCallBack) errorCallBack()
    })
}
export function getImageList (success, errorCallBack) {
  return request({
    url: '/mctpv/json/getImageList.json',
    method: 'get'
  }).then(function (res) {
    if (success) success(res.data)
  })
    .catch(function () {
      if (errorCallBack) errorCallBack()
    })
}

export function getAudioList (success, errorCallBack) {
  return request({
    url: '/mctpv/json/getAudioList.json',
    method: 'get'
  }).then(function (res) {
    if (success) success(res.data)
  })
    .catch(function () {
      if (errorCallBack) errorCallBack()
    })
}
