export default {
  namespace: 'user',
  state: {
    userName: '孙尚香',
    nickName: '大小姐',
    skName: '水果甜心',
    lv: 5
  },
  reducers: {
    lvUp(state, action) {
      return { ...state, ...{ lv: state.lv + action.payload.step } };
    }
  }
};
