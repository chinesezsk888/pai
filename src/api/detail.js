import request from '@/utils/request'

export function getdateilInfo (type, success, errorCallBack) {
  var url = ''
  if (type === '0') {
    url = '/mctpv/json/getVideoInfo.json'
  } else if (type === '1') {
    url = '/mctpv/json/getImageInfo.json'
  } else {
    url = '/mctpv/json/getAudioInfo.json'
  }
  return request(url, {
    url: url,
    method: 'get'
  }).then(function (res) {
    if (success) success(res)
  })
    .catch(function (eror) {
      if (errorCallBack) errorCallBack()
    })
}
