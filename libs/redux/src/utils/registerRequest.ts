import { AxiosResponse, AxiosError } from 'axios';
import { takeEvery } from 'redux-saga/effects';
import { IResponse } from '@myorg/types';
import { IAction } from '../types/action';
import { call } from './call';

const registerRequest = function <A extends IAction<any>>(
  effect: typeof takeEvery,
  actionName: string,
  apiFunc: (data: any) => Promise<AxiosResponse<any>>,
  success: (data: any) => void,
  error?: (data: any) => void
) {
  const callBack = function* (action: A) {
    try {
      const response: AxiosResponse<any> = yield call(apiFunc, action.payload, action.meta);
      yield success(response.data);
    } catch(e: AxiosError | unknown) {
      const axiosError = e as AxiosError;
      if (axiosError.isAxiosError) {
        const data = axiosError.response?.data as IResponse.ErrorResponse;

        if (error) {
          yield error(data.errors);
        }
      }
    }
  }

  return function* () {
    yield effect(actionName, callBack);
  }
}

export default registerRequest;
