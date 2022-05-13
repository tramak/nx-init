import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';
import * as I from './interfaces';

const requestState = (state: RootState): I.IRequestState => state.request;

export const getRequest = (name: string, id?: string) => createSelector(requestState, (request: I.IRequestState) => {
  if (!request.data?.[name]) {
    return {};
  }

  if (id !== undefined) {
    return (request.data[name] as I.IRequestStateIds)[id] || {};
  }

  return request.data[name] || {};
})
// export const getModulesOptions = createSelector(authState, (auth) => {
//     const
// });
