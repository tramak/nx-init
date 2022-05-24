import agent from './agent/axios';
import { AxiosResponse } from 'axios';
import { ITodos } from '@myorg/types';

export const fetchTodos = (): Promise<AxiosResponse<ITodos.Todo[]>> => {
  return agent.get('/todos');
};

export const fetchAddTodo = (data: ITodos.Todo): Promise<AxiosResponse<ITodos.Todo>> => {
  return agent.post('/addTodo', data);
};

