import { MouseEventHandler } from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from './actions';

interface TodoProps {
  id: number;
  onClick: MouseEventHandler;
  completed: boolean;
  text: string;
}

const Todo = ({ onClick, completed, text }: TodoProps) => (
  <li
    className="bg-light-200 px-2 my-2 cursor-pointer"
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}: {
  todos: Array<TodoProps>;
  onTodoClick: Function;
}) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

const getVisibleTodos = (todos: Array<TodoProps>, filter: string) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

const mapStateToProps = (state: {
  todos: Array<TodoProps>;
  visibilityFilter: string;
}) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
