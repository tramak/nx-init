import { useEffect, useState } from 'react';
import { Todo } from '@myorg/data';
import { Todos } from '@myorg/ui';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    console.log('init');
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);

    fetch('/api/v1/courses')
      .then((_) => _.json())
      .then(data => console.log(data));
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;