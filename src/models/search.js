import { getLists } from '@/services/search.js'
export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: []
  },
  // 同步
  reducers: {
    getLists(state, action) {
      return {
        ...state,
        // lists: Array(10).fill(action.payload)
        lists: action.payload
      }
    }
  },
  //异步
  effects: {
    *getListAsync({ payload }, { call, put }) {
      const res = yield call(getLists, payload)
      console.log(res)
      yield put({
        type: 'getLists',
        payload: res.lists
      })
    }
  }
}