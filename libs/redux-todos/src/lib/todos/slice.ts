import { createSlice } from '@reduxjs/toolkit';
import { ITodos } from '@myorg/todos-types';
import * as I from './interfaces';

const initialState: ITodos.State = {
  data: [ { title: 'test' }]
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action: I.ISetTodosAction) {
      state.data = action.payload;
    },
    addTodo(state, action: I.IAddTodoAction) {
      state.data.push(action.payload);
    }
  }
});

export const {
  setTodos,
  addTodo
} = slice.actions;
export default slice.reducer;
