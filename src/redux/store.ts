import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { photosReducer } from './reducer';
import Saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    root: rootReducer,
    photos: photosReducer,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(Saga);

export default store;
