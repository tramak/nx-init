import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    // devTools: !!DEVELOPMENT,
    middleware: getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
    })
      .concat(sagaMiddleware)
});

// if (DEVELOPMENT && module.hot) {
//     module.hot.accept('./root_reducer', () => {
//         const newRootReducer = require('./root_reducer').default
//         store.replaceReducer(newRootReducer)
//     })
// }

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;
