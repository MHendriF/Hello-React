import { ActionType } from '../utils';

function goalsReducer(goals = [], action = {}) {
    switch (action.type) {
        case ActionType.ADD_GOAL:
            return [...goals, action.payload];
        case ActionType.DELETE_GOAL:
            return goals.filter((goal) => goal.id !== action.payload.id);
        default:
            return goals;
    }
}

export { goalsReducer };
