import { ActionType } from '../utils';

function addGoalActionCreator({ id, text }) {
    return {
        type: ActionType.ADD_GOAL,
        payload: {
            id,
            text,
        },
    };
}

function deleteGoalActionCreator(id) {
    return {
        type: ActionType.DELETE_GOAL,
        payload: {
            id,
        },
    };
}

export { addGoalActionCreator, deleteGoalActionCreator };
