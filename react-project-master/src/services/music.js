import { get } from '../utils/request';

export function getMusics() {
    return get('/song/url', {
        url: '/song/url?id=33894312',
    });
}

/**
 * 根据id获取详情
 * @param {*} id
 */
// export function getMusicsDetails(id) {
//   return post('https://api.cat-shop.penkuoer.com/api/v2/proxy', {
//     url:
//       'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=' +
//       id,
//   });
// }