export default {
  state: {
    id: undefined,
    username: undefined
  },
  reducers: {
    getUser(state, payload) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    async getUserAsync(dispatch, state, payload) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      })
      dispatch({
        type: 'getUser',
        payload
      })
    }
  }
}
