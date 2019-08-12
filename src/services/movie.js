import { post } from '../utils/request';

export function getHotMovies() {
  return post('/api/v2/proxy', {
    url: 'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290'
  });
}

/**
 * 根据id获取详情
 * @param {*} id
 */
export function getMovieDetail(id) {
  return post('/api/v2/proxy', {
    url:
      'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=' +
      id
  });
}
