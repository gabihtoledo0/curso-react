import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function TodoModal({ onModalClose, onTitleUpdate, id }) {
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Você precisa preencher com alguma tarefa"),
    }),
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title);
      formikBag.setFieldValue("title", "");
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          {...getFieldProps("title")}
          autoComplete="off"
          placeholder="Novo Nome"
        />
        {touched.title && errors.title ? <small>{errors.title}</small> : null}
        <button type="submit" disabled={!isValid}>
          Atualizar tarefa
        </button>
      </form>
      <button onClick={onModalClose}>Fechar</button>
    </div>
  );
}

export default TodoModal;
