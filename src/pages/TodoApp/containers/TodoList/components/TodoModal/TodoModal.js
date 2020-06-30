import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./TodoModal.module.css";
import { ReactComponent as CloseTodo } from "../../../../../../assets/icons/delete.svg";

function TodoModal({ onModalClose, onTitleUpdate, id, findTitle }) {
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      title: findTitle(id),
    },
    validationSchema: yup.object({
      title: yup.string()
        .required("Você precisa preencher com alguma tarefa"),
    }),
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title);
      formikBag.setFieldValue("title", "", false);
      onModalClose()
    },
  });
  return (
    <>
      <div className={styles.backdrop} onClick={onModalClose} />
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          <button className={styles.closeButton} onClick={onModalClose}>
            <CloseTodo />
          </button>
          <input
            type="text"
            className={styles.input}
            {...getFieldProps("title")}
            autoComplete="off"
            placeholder="Novo Título"
          />
          {touched.title && errors.title ? (
            <small className={styles.error}>{errors.title}</small>
          ) : null}
          <button type="submit" className={styles.submit} disabled={!isValid}>
            Atualizar tarefa
          </button>
        </form>
      </div>
    </>
  );
}

export default TodoModal;
