import { request } from './network'
import fetch from './fetch'
//获得验证码图片
// export function getcaptchas() {
//     return request({
//         method: 'post',
//         url: '/v1/captchas'
//     })
// }


export const getcaptchas = () => fetch('https://elm.cangdu.org/v1/captchas', {}, 'POST');

//进行登录
export function sendLogin(username, password, captcha_code) {
    return request({
        method: 'post',
        url: '/v2/login',
        querys: {
            username,
            password,
            captcha_code
        }
    })
}