import axios from 'axios'
axios.defaults.withCredentials = true

export function request(options) {
    return new Promise((resolve, reject) => {
        // 1.创建axios的实例对象
        const instance = axios.create({
            baseURL: 'https://elm.cangdu.org',
            timeout: 9000,
        })
        instance.interceptors.response.use(res => {
            return res.data
        })
        instance(options)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
    })
}