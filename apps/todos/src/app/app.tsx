import { useEffect } from 'react';
import classNames from 'classnames';
import { actions, useAppSelector, useRequest } from '@myorg/redux-todos';
import { Todos } from '@myorg/ui';

const App = () => {
  const todos = useAppSelector(state => state.todos.data);
  const requestTodos = useRequest('fetchTodos');

  useEffect(() => {
    actions.todos.fetchTodos();

    return () => {
      // actions.request.clear({ action: 'fetchTodos' });
      actions.request.clear('fetchTodos');
    }
  }, []);

  function addTodo() {
    actions.todos.fetchAddTodo({ title: 'test' });
  }

  return (
    <>
      <h1>Todos</h1>
      {JSON.stringify(requestTodos)}
      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo} className={classNames({
        test: true
      })}>
        Add Todo
      </button>
    </>
  );
};

export default App;