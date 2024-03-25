import { ActionType } from '../utils';

function todosReducer(todos = [], action = {}) {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [...todos, action.payload];
        case ActionType.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id);
        case ActionType.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ActionType.RECEIVE_TODOS:
            return action.payload.todos;
        default:
            return todos;
    }
}
export { todosReducer };
