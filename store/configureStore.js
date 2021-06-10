import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../root-reducer'
import rootSaga from '../store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    store.runSaga = sagaMiddleware.run;
    store.runSaga(rootSaga);

    return store;
}