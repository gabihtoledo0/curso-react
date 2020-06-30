import React, { useContext, useCallback, useState, useEffect } from "react";
import FilterContext from "../../../../state/filter/Context";
import * as filterActions from "../../../../state/filter/actions";
import styles from "./TodoFilter.module.css";
import TodoSelect from "./TodoSelect/TodoSelect";

function TodoFilter() {
  const { filter, filterDispatch } = useContext(FilterContext);
  const [selectValue, setSelectValue] = useState(filter);
  const updateFilter = useCallback(
    (filter) => {
      filterDispatch(filterActions.toggleFilter(filter));
    },
    [filterDispatch]
  );
  const handleOptionChange = useCallback(
    (event) => {
      setSelectValue(event.target.value);
    },
    [setSelectValue]
  );
  useEffect(() => {
    updateFilter(selectValue)
  }, [updateFilter, selectValue])

  return (
    <footer class={styles.container}>
      <h1>{filter}</h1>
      <TodoSelect
        value={selectValue}
        onOptionChange={handleOptionChange}
        options={[
          {
            value: "all",
            title: "Todas as tarefas",
          },
          { value: "active", title: "Tarefas pendentes" },
          { value: "completed", title: "Tarefas concluidas" },
        ]}
      />
    </footer>
  );
}

export default TodoFilter;
