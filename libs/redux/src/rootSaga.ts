import { all, fork, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import todos from './lib/todos/sagas';

const registeredSagas = [
    ...todos
];

export default function* rootSata () {
    yield take(REHYDRATE);
    const forkedSagas = registeredSagas.map((saga) => fork(saga));
    yield all(forkedSagas);
}
