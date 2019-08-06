import { getHotMovies } from '../services/movie';
export default {
  namespace: 'movie', //命名空间 每一个model都不同 用于区分
  state: {
    list: [],
    page: 1
  },
  //同步的方式改变数据
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }; //使用新的数据覆盖已有的state
    }
  },
  //副作用  用于异步处理数据
  effects: {
    //generate函数 es6的语法 以*好开头
    //call put 是js的内置方法
    *loadData({ payload }, { call, put }) {
      //yield effects的方法  是的等待方法返回结果
      const res = yield call(getHotMovies);
      //put 派发一个action 用来触发 reducer 改变数据
      yield put({
        type: 'save', //同一个model中派发 action 可以不用加命名空间
        payload: {
          list: res.data.ms
        }
      });
    }
  }
};
