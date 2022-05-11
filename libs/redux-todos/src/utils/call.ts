import { call as callRedux } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { IResponse } from '@myorg/todos-types';
import { IMetaData } from '../types/action';

export const call = function* (func: any, payload?: any, meta?: IMetaData): any {
  const resolve = meta?.promiseActions.resolve;
  const reject = meta?.promiseActions.reject;
  console.log(func.name);
  try {
    const data = yield callRedux(func, payload);
    if (resolve) {
      resolve(data);
    }
    return data;
  } catch(e: AxiosError | unknown) {
    const axiosError = e as AxiosError;
    if (axiosError.isAxiosError) {
      const data = axiosError.response?.data as IResponse.ErrorResponse;

      if (data.errors?.length) {
        console.log(data.errors);
      }

      if (reject) {
        reject(data?.errors);
      }
    }

    throw e;
  }
}