function addGoalActionCreator({ id, text }) {
    return {
        type: 'ADD_GOAL',
        payload: {
            id,
            text,
        },
    };
}

function deleteGoalActionCreator(id) {
    return {
        type: 'DELETE_GOAL',
        payload: {
            id,
        },
    };
}

export { addGoalActionCreator, deleteGoalActionCreator };
