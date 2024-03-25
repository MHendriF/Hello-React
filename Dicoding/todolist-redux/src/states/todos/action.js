import mockAPI from '../../data/mockAPI';
import { ActionType } from '../utils';

function addTodoActionCreator({ text }) {
    return {
        type: ActionType.ADD_TODO,
        payload: {
            id: `todo-${+new Date()}`,
            text,
            complete: false,
        },
    };
}

function deleteTodoActionCreator(id) {
    return {
        type: ActionType.DELETE_TODO,
        payload: {
            id,
        },
    };
}

function toggleTodoActionCreator(id) {
    return {
        type: ActionType.TOGGLE_TODO,
        payload: {
            id,
        },
    };
}

function receiveTodosActionCreator(todos) {
    return {
        type: ActionType.RECEIVE_TODO,
        payload: {
            todos,
        },
    };
}

function asyncReceiveTodos() {
    return async (dispatch) => {
        const todos = await mockAPI.getTodos();
        dispatch(receiveTodosActionCreator(todos));
    };
}

function asyncAddTodo(text) {
    return async (dispatch) => {
        const { id } = await mockAPI.addTodo(text);
        dispatch(addTodoActionCreator({ id, text }));
    };
}

function asyncDeleteTodo(id) {
    return async (dispatch) => {
        await mockAPI.deleteTodo(id);
        dispatch(deleteTodoActionCreator(id));
    };
}

function asyncToggleTodo(id) {
    return async (dispatch) => {
        await mockAPI.toggleTodo(id);
        dispatch(toggleTodoActionCreator(id));
        try {
            await mockAPI.toggleTodo(id);
        } catch (error) {
            alert(error.message);

            // rollback state change with re-toggling the to-do item.
            dispatch(toggleTodoActionCreator(id));

            // ... you can also do crash reporting.
        }
    };
}

export {
    addTodoActionCreator,
    deleteTodoActionCreator,
    toggleTodoActionCreator,
    receiveTodosActionCreator,
    asyncReceiveTodos,
    asyncAddTodo,
    asyncDeleteTodo,
    asyncToggleTodo,
};
