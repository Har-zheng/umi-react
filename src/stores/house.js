import { Http } from '@/utils'
export default {
  state: {
    detail: {},
    comments:[]
  },
  reducers: {
    getDetail(state, payload){
      return {
        ...state,
        datail: payload
      }
    }
  },
  effects: {
    async getDetailAsync(dispatch, rootState, payload){
    
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