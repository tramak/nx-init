import { put, select, takeEvery, all } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { call } from '../../utils/call';
import { ITodos } from '@myorg/todos-types';
import * as api from '@myorg/todos-api';
import * as I from './interfaces';
import * as actions from './actions';


const fetchTodos = function* () {
  try {
    const [response]: [AxiosResponse<ITodos.Todo[]>] = yield all([call(api.fetchTodos)]);

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
  yield takeEvery(actions.fetchAddTodo.type, fetchAddTodo);
};

export default [
  init
];
