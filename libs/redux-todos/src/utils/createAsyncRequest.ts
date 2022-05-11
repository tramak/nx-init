import { AxiosResponse } from 'axios';
import { createAction } from '@reduxjs/toolkit';
import store from '../store';

interface ICreateAsyncRequestMeta {
  promiseActions : {
    resolve: () => void;
    reject: () => void;
  }
}

// type ICreateAsyncRequestResult = (data: any) => (d: any, meta?: ICreateAsyncRequestMeta) => 

export const createAsyncRequest = <T, R>(name: string, func: (data: T) => Promise<AxiosResponse<R>>) => {
  const requestAction = createAction(name, (payload?: T) => ({ payload }));
  const requestActionSuccess = createAction(`${name}Success`, (payload: R) => ({ payload }));
  const requestActionError = createAction(`${name}Error`);

  return (data: T, meta?: ICreateAsyncRequestMeta) => {
    func(data)
      .then((response) => {
        console.log({ response });
        store.dispatch(requestActionSuccess(response.data));
      })
      .catch((error) => {
        console.log({ error });
        store.dispatch(requestActionError());
      });

    return requestAction(data);
  };
};
