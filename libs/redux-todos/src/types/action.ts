import { IResponse } from '@myorg/todos-types';

export interface IMetaData {
  promiseActions: {
    resolve: (data?: any) => void;
    reject: (errors?: IResponse.Errors) => void;
  }
}

export interface IAction<P> {
  type: string;
  payload: P;
  meta?: IMetaData;
}