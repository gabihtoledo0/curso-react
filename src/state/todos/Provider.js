import React, { useReducer } from "react";
import TodoContext from "./Context";
import todoReducer from "./reducer";

function Provider({ children }) {
  const [todos, todosDispatch] = useReducer(todoReducer, "all");
  return (
  <TodoContext.Provider value={{ todos, todosDispatch }}>
    {children}
  </TodoContext.Provider>
  );
}

export default Provider;
