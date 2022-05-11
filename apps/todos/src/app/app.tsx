import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { actions, useAppSelector } from '@myorg/redux-todos';
import { ITodos } from '@myorg/todos-types';
import { Todos } from '@myorg/ui';

const App = () => {
  const todos = useAppSelector(state => state.todos.data);

  useEffect(() => {
    actions.todos.fetchTodos();
  }, []);

  function addTodo() {
    actions.todos.fetchAddTodo({ title: 'test' });
  }

  return (
    <>
      <h1>Todos</h1>
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