import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import TodoContext from "../../../../state/todos/Context";
import * as todoActions from "../../../../state/todos/actions"

function TodoCreator() {
  const { todos, todosDispatch } = useContext(TodoContext);
  useEffect(() => {
    console.log(todos)
  }, [todos])
  const formik = useFormik({
    initialValues: {
      title: ""
    },
    onSubmit: (values) => {
      todosDispatch(todoActions.addtodo(values.title))
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        {...formik.getFieldProps("title")}
        autoComplete="off"
        placeholder="Nova Tarefa"
      />
      <button type="submit">Adicionar tarefa</button>
    </form>
  );
}

export default TodoCreator;
