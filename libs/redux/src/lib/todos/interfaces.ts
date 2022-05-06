import { ITodos } from '@myorg/types';
import { IAction } from '../../types/action';

export type IFetchAddTodo = IAction<ITodos.Todo>;

// slice
export type ISetTodosAction = IAction<ITodos.Todo[]>;
export type IAddTodoAction = IAction<ITodos.Todo>;
