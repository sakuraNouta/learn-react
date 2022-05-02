import { combineReducers } from 'redux';

interface TODO {
  type: 'ADD_TODO' | 'TOGGLE_TODO';
  id: number;
  text: string;
  completed: boolean;
}

const todos = (state = [], action: TODO) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo: TODO) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action: { type: 'SET_VISIBILITY_FILTER'; filter: Function }
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
