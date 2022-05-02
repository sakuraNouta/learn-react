import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// eslint-disable-next-line require-yield
function* helloSaga() {
  console.log('Hello Sagas!');
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(() => 'Hello Saga!', applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga);

export default function Hello() {
  return <div className="m-auto">{store.getState()}</div>;
}
