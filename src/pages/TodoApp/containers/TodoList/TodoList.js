import React, { useContext, useCallback, useState } from "react";
import TodosContext from "../../../../state/todos/Context";
import styles from "./TodoList.module.css";
import TodoItem from "./components/TodoItem/TodoItem";
import * as todoActions from "../../../../state/todos/actions";
import TodoModal from "./components/TodoModal/TodoModal";

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
  const handleTitleUpdate = useCallback(
    (id, title) => {
      todosDispatch(todoActions.toggleTodoTitle(id, title));
    },
    [todosDispatch]
  );
  const [curId, setCurId] = useState(null);
  const [curTitle, setCurTitle] = useState('')
  const handleModalOpen = useCallback((id, title) => {
    setCurId(id);
    setCurTitle(title);
  }, []);
  const handleModalClose = useCallback(() => {
    setCurId(null);
    setCurTitle('');
  }, []);

  return (
    <div className={styles.container}>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              onModalOpen={handleModalOpen}
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
      {curId && (
        <TodoModal
          id={curId}
          title={curTitle}
          onModalClose={handleModalClose}
          onTitleUpdate={handleTitleUpdate}
        />
      )}
    </div>
  );
}

export default TodoList;
