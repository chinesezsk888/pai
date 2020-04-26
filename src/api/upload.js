import request from '@/utils/request'

export function uploadFile (formData, uploadProgress, success, errorCallBack) {
  return request({
    url: 'http://localhost:7001/upload',
    method: 'post',
    data: formData,
    onUploadProgress: progressEvent => {
      if (uploadProgress && progressEvent.total !== 0) uploadProgress(progressEvent)
    }
  }).then(function (res) {
    if (success) success(res.data)
  })
    .catch(function () {
      if (errorCallBack) errorCallBack()
    })
}
