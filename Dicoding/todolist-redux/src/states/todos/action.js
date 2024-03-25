import mockAPI from '../../data/mockAPI';

function addTodoActionCreator({ text }) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: `todo-${+new Date()}`,
            text,
            complete: false,
        },
    };
}

function deleteTodoActionCreator(id) {
    return {
        type: 'DELETE_TODO',
        payload: {
            id,
        },
    };
}

function toggleTodoActionCreator(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: {
            id,
        },
    };
}

function receiveTodosActionCreator(todos) {
    return {
        type: 'RECEIVE_TODOS',
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
