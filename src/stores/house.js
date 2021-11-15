import { Http } from '@/utils'
export default {
  state: {
    detail: {},
    comments: ['123', '321']
  },
  reducers: {
    getDetail(state, payload) {

      return {
        ...state,
        detail: payload
      }
    }
  },
  effects: {
    async getDetailAsync(dispatch, rootState, payload) {
      const detail = await Http({
        url: '/house/detail',
        body: payload
      })
      console.log(detail);
      dispatch({
        type: 'getDetail',
        payload: detail
      });
    }
  }
}