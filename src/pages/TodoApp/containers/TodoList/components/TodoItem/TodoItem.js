import React, { useState, useCallback, useEffect } from "react";

function TodoItem({ id, title, onDelete, completed, onStatusUpdate }) {
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

  return (
    <li>
      <span>{title}</span>
      <input type="checkbox" value={isChecked} onChange={handleChange} />
      <button onClick={onDelete}>Deletar</button>
    </li>
  );
}

export default TodoItem;
