import { put, select, takeEvery, delay, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ITodos } from '@myorg/todos-types';
import * as api from '@myorg/todos-api';
import * as I from './interfaces';
import * as actions from './actions';


const fetchTodos = function* () {
  try {
    console.log(api.fetchTodos.name);
    const response: AxiosResponse<ITodos.Todo[]> = yield call(api.fetchTodos);

    yield put(actions.setTodos(response.data));
  } catch(e) {
    console.log({ e });
  }
  yield 2;
}

const fetchAddTodo = function* (action: I.IFetchAddTodo) {
  try {
    const response: AxiosResponse<ITodos.Todo> = yield call(api.fetchAddTodo, action.payload);

    yield put(actions.addTodo(response.data));
  } catch (e) {
    console.log({ e });
  }
}

const init = function* () {
  yield takeEvery(actions.fetchTodos.type, fetchTodos);
  yield takeEvery(actions.fetchAddTodo, fetchAddTodo);
};

export default [
  init
];
