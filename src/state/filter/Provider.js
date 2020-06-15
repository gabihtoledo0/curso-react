import React, { useReducer } from "react";
import FilterContext from "./Context";
import filterReducer from "./reducer";

function Provider({ children }) {
  const [filter, filterDispatch] = useReducer(filterReducer, "all");
  return (
  <FilterContext.Provider value={{ filter, filterDispatch }}>
    {children}
  </FilterContext.Provider>
  );
}

export default Provider;
