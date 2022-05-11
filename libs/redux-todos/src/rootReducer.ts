import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import todos from './lib/todos/slice';
import { persistConfig } from './persistConfig';

const appReducer = combineReducers({
    todos,
});

const persistedReducer = persistReducer(persistConfig, appReducer);
export default persistedReducer;
