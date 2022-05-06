import { call as callRedux, put } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { IResponse } from '@myorg/types';
import { IMetaData } from '../types/action';
import { setLoading, setSuccess, setError } from '../lib/request/slice';

export const call = function* (func: any, payload?: any, meta?: IMetaData): any {
  const resolve = meta?.promiseActions.resolve;
  const reject = meta?.promiseActions.reject;
  const requestId = meta?.request?.id;
  const action = func.name;

  try {
    yield put(setLoading({ action, requestId }));

    const data = yield callRedux(func, payload);
    if (resolve) {
      resolve(data);
    }
    yield put(setSuccess({ action, requestId }));
    return data;
  } catch(e: AxiosError | unknown) {
    const axiosError = e as AxiosError;
    let error = '';
    if (axiosError.isAxiosError) {
      const data = axiosError.response?.data as IResponse.ErrorResponse;

      if (data.messages?.length) {
        error = data.messages[0].message;
        // console.log(data.errors);
      }

      if (reject) {
        reject(data?.messages);
      }
    }

    yield put(setError({ action, error, requestId }));

    throw e;
  }
}
