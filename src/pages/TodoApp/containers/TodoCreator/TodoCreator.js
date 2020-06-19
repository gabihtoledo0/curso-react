import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import TodoContext from "../../../../state/todos/Context";
import * as todoActions from "../../../../state/todos/actions";
import * as yup from "yup";
import styled from "./TodoCreator.module.css";

function TodoCreator() {
  const { todosDispatch } = useContext(TodoContext);
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Você precisa preencher com alguma tarefa"),
    }),
    onSubmit: (values, formikBag) => {
      todosDispatch(todoActions.addtodo(values.title));
      formikBag.setFieldValue("title", "");
    },
  });
  const inputTitle = useRef(null);
  useEffect(() => {
    inputTitle.current.focus();
  }, []);

  return (
    <form className={styled.container} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styled.input}
        {...getFieldProps("title")}
        autoComplete="off"
        ref={inputTitle}
        placeholder="Nova Tarefa"
      />
      {touched.title && errors.title ? (
        <small className={styled.error}>{errors.title}</small>
      ) : null}
      <button type="submit" disabled={!isValid} className={styled.submit}>
        Adicionar tarefa
      </button>
    </form>
  );
}

export default TodoCreator;
