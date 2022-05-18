import { Types } from "./types";

const INITIAL_STATE = {
  tasks: [{
    id:1,
    text:"Bonjour",
    completed:false
  }]
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_TODO:
      return {
        tasks: [...state.tasks, action.payload]
      };

    case Types.MODIFY_TODO:

      return {
        tasks: state.tasks.map((task, index) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              text: action.payload.text,
              completed: !action.payload.completed
            };
          } else return task;
        })
      };

    case Types.DELETE_TODO:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload.id)
      };

    default:
      return state;
  }
};
