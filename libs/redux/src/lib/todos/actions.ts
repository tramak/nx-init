export * from './slice';
import { createAction } from '@reduxjs/toolkit';
import { ITodos } from '@myorg/types';

export const fetchTodos = createAction('fetchTodos');
export const fetchAddTodo = createAction('fetchAddTodo', (payload: ITodos.Todo) => ({ payload }));
