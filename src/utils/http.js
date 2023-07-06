import axios from 'axios'
import { toast } from 'react-toastify'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
        //Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsibmFtZSI6IlZvIFRhbyJ9LCJpYXQiOjE2ODgwMjg3NTYsImV4cCI6MTY4ODAyOTY1Nn0.s-i78a_VQMnWM1WEPlJTU4sSvw1ZNcsO0o8jz4r2Y68`,
      }
    })

    this.instance.interceptors.response.use(
      (response) => {
        if (response && response.data) {
          return response.data
        }
      }
      // ({ response }) => {
      //   if (response.status === 401) {
      //     toast.error(response.data.message, {
      //       position: 'top-center',
      //       autoClose: 3000
      //     })
      //   }
      //   const result = { ...response.data, status: response.status }
      //   return Promise.reject(result)
    )
    this.instance.interceptors.request.use(
      (config) => {
        const accessToken = ''
        if (accessToken) {
          config.headers.Authorization = 'bearer ' + accessToken
        }
        return config
      },
      (error) => {
        return Promise.reject(error.response)
      }
    )
  }
  get(url, config = null) {
    return this.instance.get(url, config)
  }
  post(url, data, config = null) {
    return this.instance.post(url, data, config)
  }
  put(url, data, config = null) {
    return this.instance.put(url, data, config)
  }
  delete(url, data, config = null) {
    return this.instance.delete(url, {
      data,
      ...config
    })
  }
}

const http = new Http()
export default http
