import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import todos from './lib/todos/slice';
import request from './lib/request/slice';
import { persistConfig } from './persistConfig';

const appReducer = combineReducers({
    request,
    todos,
});

const persistedReducer = persistReducer(persistConfig, appReducer);
export default persistedReducer;
