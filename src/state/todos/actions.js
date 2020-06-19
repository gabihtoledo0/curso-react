import * as todosTypes from "./types";
// const todos = {  id, title, completed }
export function addtodo(title) {
  return {
    type: todosTypes.ADD_TODO,
    payload: {
      title: title
    },
  };
}

export function toggletodoStatus(id, completed) {
  return {
    type: todosTypes.TOGGLE_TODO_STATUS,
    payload: { id, completed },
  };
}

export function toggletodoTitle(id, title) {
  return {
    type: todosTypes.TOGGLE_TODO_TITLE,
    payload: { id, title },
  };
}

export function removetodo(id) {
  return {
    type: todosTypes.REMOVE_TODO,
    payload: { id },
  };
}
