import { post, get } from '../utils/request';

/**
 * 登录
 * @param {*} data
 */
export const login = data => get('/login/cellphone', data);

/**
 * 发送验证码
 * @param {} data
 */
export const sedVerify = data => get('/captcha/sent', data);
/**
 * 验证手机是否已注册
 * @param {*} data
 */

export const isPhoneReg = data => get('/cellphone/existence/check', data);
//调用推荐新音乐接口
export const newMusics = data => get('/top/song', data);
//播放音乐接口
export const playMusic = data => get('/song/url', data);
//音乐详情
export const musicDetail = data => get('/song/detail', data);

export const mvDetail = data => get('/video/url', data);
/**
 * 注册
 * @param {*} data
 */
