import { useEffect } from 'react';
import classNames from 'classnames';
import { actions, useAppSelector, useRequest } from '@myorg/redux';
import { Todos, Header } from '@myorg/ui';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const Demo = () => {
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
      <Header status='' logout={() => {}} scrollToQuestionList={() => {}} />

      ---------------------------------------------------
      <h1>Todos</h1>

      {JSON.stringify(requestTodos)}

      <Todos todos={todos} />

      <button id="add-todo" onClick={addTodo} className={classNames({
        test: true
      })}>
        Add Todo
      </button>

      <br />
      --------------------------------------------------------
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Demo />
    </BrowserRouter>
  );
};

export default App;
