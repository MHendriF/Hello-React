import { configureStore } from '@reduxjs/toolkit';
import { todoDeletionCheck, thunk } from './middlewares';
import { todosReducer } from './todos/reducer';
import { goalsReducer } from './goals/reducer';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        goals: goalsReducer,
    },
    middleware: () => {
        return [todoDeletionCheck, thunk];
    },
});

export { store };
