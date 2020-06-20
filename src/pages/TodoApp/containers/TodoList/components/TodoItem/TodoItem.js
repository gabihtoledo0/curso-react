import React, { useState, useCallback, useEffect } from "react";

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
  const handleTitleUpdate = useCallback(() => {
    onModalOpen(id)
  }, [onModalOpen, id])

  return (
    <li>
      <span>{title}</span>
      <button onClick={handleTitleUpdate}>Atualizar</button>
      <input type="checkbox" value={isChecked} onChange={handleChange} />
      <button onClick={onDelete}>Deletar</button>
    </li>
  );
}

export default TodoItem;
