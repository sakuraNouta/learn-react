const delay = t => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, t);
  });
};

export default {
  namespace: 'products',
  state: [],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    }
  },
  effects: {
    *deleteAfter1Second(action, { put }) {
      yield delay(1000);
      yield put({ type: 'delete', payload: action.payload });
    }
  }
};
