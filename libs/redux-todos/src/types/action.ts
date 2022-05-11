import { IResponse } from '@myorg/todos-types';

export interface Action<P> {
  type: string;
  payload: P;
  meta?: {
    promiseActions: {
      resolve: () => void;
      reject: (errors: IResponse.Errors) => void;
    }
  }
}