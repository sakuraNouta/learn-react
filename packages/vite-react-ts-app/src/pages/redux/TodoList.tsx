import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddTodo from './AddTodo';
import { Footer } from './Footer';
import todoApp from './reduces';
import VisibleTodoList from './VisibleTodoList';

function App() {
  return (
    <div className="m-auto">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

let store = createStore(todoApp);

export default function TodoList() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
