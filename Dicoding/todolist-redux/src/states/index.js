import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { todoDeletionCheck, thunk } from './middlewares';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk, todoDeletionCheck));

export { store };
