function addTodoActionCreator({ id, text }) {
    return {
        type: 'ADD_TODO',
        payload: {
            id,
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

export { addTodoActionCreator, deleteTodoActionCreator, toggleTodoActionCreator };
