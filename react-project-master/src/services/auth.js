import { post, get } from '../utils/request';

/**
 * 登录
 * @param {*} data
 */
//export const login = data => post('/api/v1/auth/login', data);

/**
 * 注册
 * @param {*} data
 */
//export const reg = data => post('/api/v1/auth/reg', data);

export const getRankingList = data => post('/top/list', data);



