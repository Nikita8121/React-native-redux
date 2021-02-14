/* eslint-disable prettier/prettier */
import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import bookState from './reducers';

const store = createStore(
    bookState,
    applyMiddleware(createLogger())
);

export default store;
