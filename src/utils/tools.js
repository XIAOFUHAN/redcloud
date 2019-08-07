/**
 * 设置token
 * @param {*} token
 */
export function setToken(token) {
  localStorage.setItem('token', token);
}

/**
 * 获取token
 */
export function getToken() {
  return localStorage.getItem('token');
}

/**
 * 判断是否登录
 */
export function isLogined() {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
}
