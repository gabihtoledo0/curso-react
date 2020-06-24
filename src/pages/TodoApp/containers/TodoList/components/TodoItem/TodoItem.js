import React, { useState, useCallback, useEffect } from "react";
import {ReactComponent as UpdateTitle } from "../../../../../../assets/icons/update.svg"
import {ReactComponent as DeleteTodo } from "../../../../../../assets/icons/delete.svg"
import styles from "./TodoItem.module.css"

function TodoItem({ id, title, onDelete, completed, onStatusUpdate, onModalOpen }) {
  const [isChecked, setIsChecked] = useState(completed);
  const handleChange = useCallback(
    (event) => {
      setIsChecked(event.target.checked);
    },
    [setIsChecked]
  );
  useEffect(() => {
    onStatusUpdate(id, isChecked);
  }, [onStatusUpdate, id, isChecked]);
  const handleModalOpen = useCallback(() => {
    onModalOpen(id)
  }, [onModalOpen, id])

  return (
    <li class={styles.item}>
      <span class={completed ? styles.completed : null}>{title}</span>
      <div class={styles.controlButtons}>
        <button onClick={handleModalOpen}><UpdateTitle/></button>
        <input type="checkbox" value={isChecked} onChange={handleChange} />
        <button onClick={onDelete}><DeleteTodo/></button>
      </div>
    </li>
  );
}

export default TodoItem;
