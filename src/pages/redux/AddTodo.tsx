import { connect } from 'react-redux';

import { addTodo } from './actions';

let AddTodo: any = ({ dispatch }: { dispatch: Function }) => {
  let input: any;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          className="border"
          ref={node => {
            input = node;
          }}
        />
        <button className="border bg-green-200 text-base" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
