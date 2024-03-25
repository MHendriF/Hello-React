function goalsReducer(goals = [], action = {}) {
    if (action.type === 'ADD_GOAL') {
      return [...goals, action.payload];
    }
  
    if (action.type === 'DELETE_GOAL') {
      return goals.filter((goal) => goal.id !== action.payload.id);
    }
  
    return goals;
  }
  
  export { goalsReducer };
  