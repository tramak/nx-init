import { createAction } from '@reduxjs/toolkit';
import { ITodos } from '@myorg/todos-types';
export * from './slice';

export const fetchTodos = createAction('fetchTodos');
export const fetchAddTodo = createAction('fetchAddTodo', (payload: ITodos.Todo) => ({ payload }));
// import { bindActionCreators } from '@reduxjs/toolkit';
// export * from './slice';

// import { fetchTodos } from '@myorg/todos-api';
// import { createAsyncRequest } from '../../utils/createAsyncRequest';
// import store from '../../store';

// interface IFetchTodosPayload { count: number } 
// export const fetchTodosAction = createAsyncRequest<IFetchTodosPayload, any>('fetchTodos1', fetchTodos);

// const fetchData = createAsyncRequest<IFetchTodosPayload, any>('fetchTodos1', fetchTodos);

// export default bindActionCreators({
//   fetchData
// }, store.dispatch)