import { request } from './network'
import fetch from './fetch'

//获得验证码图片
export function getcaptchas() {
    return request({
        url: '/v1/captchas',
        method: 'post',
    })
}
// //进行登录
// export function sendLogin(username, password, captcha_code) {
//     return request({
//         method: 'POST',
//         url: '/v2/login',
//         query: {
//             username,
//             password,
//             captcha_code
//         }
//     })
// }


//User
export function getUserInfo(user_id) {
    return request({
        url: '/v1/user',
        params: {
            user_id
        }
    })
}

/**
 * 账号密码登录
 */
export const sendLogin = (username, password, captcha_code) => fetch('http://elm.cangdu.org/v2/login', { username, password, captcha_code }, 'POST');