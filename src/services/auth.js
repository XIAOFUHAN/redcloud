import { post, get } from '../utils/request';

/**
 * 登录
 * @param {*} data
 */
export const login = data => get('/login/cellphone', data);

/**
 * 注册
 * @param {*} data
 */
