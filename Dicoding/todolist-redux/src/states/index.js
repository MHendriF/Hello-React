import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { todoDeletionCheck } from './middlewares';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck));

export { store };
