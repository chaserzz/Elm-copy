import axios from 'axios'


export function request(options) {
    return new Promise((resolve, reject) => {
        // 1.创建axios的实例对象
        const instance = axios.create({
            baseURL: 'https://elm.cangdu.org',
            timeout: 9000,
        })
        instance.defaults.withCredentials = true; //配置为true
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