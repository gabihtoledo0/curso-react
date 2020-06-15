import * as todosTypes from "./types";
import { v4 as uuidv4 } from "uuid";

function reducer(state, action) {
  switch (action.type) {
    case todosTypes.ADD_TODO:
      return state.concat({
        id: uuidv4(),
        title: action.payload.title,
        completed: false,
      });
    case todosTypes.TOGGLE_TODO_STATUS:
      return state.map((todos) => {
        if (todos.id === action.payload.id) {
          return { ...todos, completed: action.payload.completed };
        } else {
          return todos;
        }
      });
    case todosTypes.TOGGLE_TODO_TITLE:
      return state.map((todos) => {
        if (todos.id === action.payload.id) {
          return { ...todos, title: action.payload.title };
        } else {
          return todos;
        }
      });
    case todosTypes.REMOVE_TODO:
      return state.filter((todos) => {
        return todos.id !== action.payload.id;
      });
    default:
      throw new Error();
  }
}

export default reducer;
