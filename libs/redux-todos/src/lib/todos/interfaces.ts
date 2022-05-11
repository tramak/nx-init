import { ITodos } from '@myorg/todos-types';
import { Action } from '../../types/action';

export type IFetchAddTodo = Action<ITodos.Todo>;

// slice
export type ISetTodosAction = Action<ITodos.Todo[]>;
export type IAddTodoAction = Action<ITodos.Todo>;
