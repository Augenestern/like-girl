import axios from 'axios'
import { showFailToast } from 'vant';
import router from '@/routes/index'

// let baseURL = ''
// if (import.meta.env.MODE === 'staging') { // 预备模式
//     baseURL = process.env.NODE_ENV === 'development' ? import.meta.env.VITE_DEV_SERVER : import.meta.env.VITE_SERVER
// } else { // development或production模式
//     baseURL = ''
// }

// 创建axios实例
const request = axios.create({
    // baseURL:'/api',// 所有的请求地址前缀部分(没有后端请求不用写)
    baseURL:"http://8.130.77.88:7001/",
    // baseURL:"http://127.0.0.1:7001/",
    timeout: 80000, // 请求超时时间(毫秒)
    // withCredentials: true,// 异步请求携带cookie
})

// request拦截器
request.interceptors.request.use(
    config => {
        // 如果你要去localStor获取token,(如果你有)
        let token = localStorage.getItem("loginToken") || '';
        if (token) {
            config.headers.token = token
        }
        return config
    },
    error => {
        // 对请求错误做些什么
        Promise.reject(error)
    }
)

// response 拦截器
request.interceptors.response.use(
    response => {
        // token失效，重新登录
        if (response.data.code === 401) {
            //  重新登录
            showFailToast('token失效');
            localStorage.clear();
            location.href = '/';
            router.push('/login')
        }
        // 对响应数据做点什么
        return response.data
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default request