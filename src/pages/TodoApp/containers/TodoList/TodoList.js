import React, { useContext, useCallback, useEffect } from "react";
import TodosContext from "../../../../state/todos/Context";
import styles from "./TodoList.module.css";
import TodoItem from "./components/TodoItem/TodoItem";
import * as todoActions from "../../../../state/todos/actions";

function TodoList() {
  const { todos, todosDispatch } = useContext(TodosContext);
  const handleDelete = useCallback(
    (id) => {
      todosDispatch(todoActions.removeTodo(id));
    },
    [todosDispatch]
  );
  const handleStatusUpdate = useCallback(
    (id, completed) => {
      todosDispatch(todoActions.toggleTodoStatus(id, completed));
    },
    [todosDispatch]
  );

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className={styles.container}>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              onStatusUpdate={handleStatusUpdate}
              onDelete={() => {
                handleDelete(todo.id);
              }}
              title={todo.title}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
