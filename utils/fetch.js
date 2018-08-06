import axios from 'axios'

// 初始化 axios 实例
const service  = axios.create({
    baseURL: 'https://13.125.249.52:8008/',
    timeout: 5000
})

// request 拦截
axios.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
})

// response 拦截
axios.interceptors.response.use(response => {
    // Do something with response data
    return response;
}, error => {
    // Do something with response error
    return Promise.reject(error);
})

export default service