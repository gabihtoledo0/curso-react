import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import TodoContext from "../../../../state/todos/Context";
import * as todoActions from "../../../../state/todos/actions";
import * as yup from "yup";
import styles from "./TodoCreator.module.css";

function TodoCreator() {
  const { todosDispatch } = useContext(TodoContext);
  const { getFieldProps, errors, handleSubmit } = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Você precisa preencher com alguma tarefa"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, formikBag) => {
      todosDispatch(todoActions.addTodo(values.title));
      formikBag.setFieldValue("title", "");
    },
  });
  const inputTitle = useRef(null);
  useEffect(() => {
    inputTitle.current.focus();
  }, []);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        {...getFieldProps("title")}
        autoComplete="off"
        ref={inputTitle}
        placeholder="Nova Tarefa"
      />
      {errors.title ? (
        <small className={styles.error}>{errors.title}</small>
      ) : null}
      <button type="submit" className={styles.submit}>
        Adicionar tarefa
      </button>
    </form>
  );
}

export default TodoCreator;
