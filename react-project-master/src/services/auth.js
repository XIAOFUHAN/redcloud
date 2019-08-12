/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:25:37
 * @LastEditTime: 2019-08-06 16:25:37
 * @LastEditors: 陈佳
 */

import { post, get } from '../utils/request';

/**
 * 登录
 * @param {*} data
 */
export const login = data => post('/api/v1/auth/login', data);

/**
 * 注册
 * @param {*} data
 */
export const reg = data => post('/api/v1/auth/reg', data);

export const loadShopCart = () => get('/api/v1/shop_carts');

