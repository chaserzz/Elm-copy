import { request } from './network'

//获得验证码图片
export function getcaptchas() {
    return request({
        method: 'post',
        url: '/v1/captchas'
    })
}
//User
export function UserInfo(user_id) {
    return request({
        url: '/v1/user',
        params: {
            user_id
        }
    })
}
//进行登录
export function sendLogin(username, password, captcha_code) {
    return request({
        method: 'post',
        url: '/v2/login',

        params: {
            username,
            password,
            captcha_code
        }
    })
}