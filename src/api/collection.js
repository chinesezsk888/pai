import request from '@/utils/request'

export function getMediaList (success, errorCallBack) {
  return request({
    url: '/mctpv/json/getPersonalList.json',
    method: 'get'
  }).then(function (res) {
    if (success) success(res)
  })
    .catch(function () {
      if (errorCallBack) errorCallBack()
    })
}
