import { MouseEventHandler, useState } from 'react';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

interface CounterProps {
  value: number;
  onIncrement: MouseEventHandler;
  onDecrement: MouseEventHandler;
  onIncrementAsync: MouseEventHandler;
}

type ActionType =
  | 'INCREMENT'
  | 'DECREMENT'
  | 'INCREMENT_IF_ODD'
  | 'INCREMENT_ASYNC';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync
}: CounterProps) => (
  <div className="flex flex-col">
    <div>Clicked: {value} times</div>
    <button className="border mt-2" onClick={onIncrement}>
      Increment
    </button>{' '}
    <button className="border mt-2" onClick={onDecrement}>
      Decrement
    </button>{' '}
    <button className="border mt-2" onClick={onIncrementAsync}>
      Increment after 1 second
    </button>{' '}
    <hr />
  </div>
);

function reducer(state = 0, action: { type: ActionType }) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state;
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = (type: ActionType) => store.dispatch({ type });

export default function CounterWrap() {
  const [value, setValue] = useState(store.getState());
  store.subscribe(() => setValue(store.getState()));
  return (
    <div className="m-auto">
      <Counter
        value={value}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />
    </div>
  );
}
