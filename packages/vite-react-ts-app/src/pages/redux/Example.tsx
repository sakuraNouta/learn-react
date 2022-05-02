/**
 * state -> store <- reducer - action
 */

import { useState } from 'react';
import { createStore } from 'redux';

function counter(
  state = 0,
  action: { type: 'INCREMENT' | 'DECREMENT' | null }
) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
let store = createStore(counter);

export default function Example() {
  const [state, setState] = useState(store.getState());
  store.subscribe(() => setState(store.getState()));

  return (
    <div className="m-auto">
      <p>Current state: {state}</p>
      <button
        className="w-1/3 border"
        onClick={() => store.dispatch({ type: 'INCREMENT' })}
      >
        +
      </button>
      <button
        className="w-1/3 border ml-4"
        onClick={() => store.dispatch({ type: 'DECREMENT' })}
      >
        -
      </button>
    </div>
  );
}
