import { put, takeEvery } from 'redux-saga/effects';
import { ITodos } from '@myorg/types';
import * as api from '@myorg/frontend-api';
import * as actions from './actions';
import registerRequest from '../../utils/registerRequest';



const init = function* () {
  // yield takeEvery(actions.fetchTodos.type, fetchTodos);
  // yield takeEvery(actions.fetchAddTodo.type, fetchAddTodo);
};

const fetchTodosSuccess = function* (data: ITodos.Todo[]) {
  yield put(actions.setTodos(data));
};

const fetchAddTodoSuccess = function* (data: ITodos.Todo) {
  yield put(actions.addTodo(data));
};

export default [
  init,
  registerRequest(takeEvery, actions.fetchTodos.type, api.fetchTodos, fetchTodosSuccess),
  registerRequest(takeEvery, actions.fetchAddTodo.type, api.fetchAddTodo, fetchAddTodoSuccess),
];
