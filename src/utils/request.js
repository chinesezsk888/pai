import axios from 'axios'
import showLogin from '@/components/dialog/login'
const service = axios.create({
  baseURL: '',
  timeout: 5000 // request timeout
})

// http response 拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          showLogin()
      }
    }
    return Promise.reject(error.response.data)
  }
)

export default service
