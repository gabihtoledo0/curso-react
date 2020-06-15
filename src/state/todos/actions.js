import * as todosTypes from "./types";
// const todos = {  id, title, completed }
export function addtodos(title) {
  return {
    type: todosTypes.ADD_TODO,
    payload: title,
  };
}

export function toggletodosStatus(id, completed) {
  return {
    type: todosTypes.TOGGLE_TODO_STATUS,
    payload: { id, completed },
  };
}

export function toggletodosTitle(id, title) {
  return {
    type: todosTypes.TOGGLE_TODO_TITLE,
    payload: { id, title },
  };
}

export function removetodos(id) {
  return {
    type: todosTypes.REMOVE_TODO,
    payload: { id },
  };
}
