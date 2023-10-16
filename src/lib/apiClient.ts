import axios from 'axios'
import { BASE_URL } from '../utils/constants'
const axiosInstance = axios.create({
  baseURL: BASE_URL ,
  headers: {
    Accept: 'application/json',
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: any) => {
    let errorMsg = 'Something went wrong. Please try again!'
    
    if (  
      error?.response?.data?.errors !== null && 
      (Array.isArray(error.response.data.errors)) && 
      (error.response.data.errors.length !== 0)
    ) {  
      errorMsg = (error.response.data.errors[0] as { description: string }).description;
    }
    return await Promise.reject(errorMsg)
  }
)


export default axiosInstance