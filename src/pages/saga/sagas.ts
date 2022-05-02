import { all, call, put, takeEvery } from 'redux-saga/effects';

const delay = (t: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, t);
  });
};

export function* helloSaga() {
  yield console.log('Hello Saga!');
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([call(helloSaga), call(watchIncrementAsync)]);
}
