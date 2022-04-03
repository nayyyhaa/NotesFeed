import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "reducers/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filter, dispatchFilter] = useReducer(filterReducer, {
    sortBy: null,
    labelsSelected: []
  });
  return <FilterContext.Provider value={{ filter, dispatchFilter }}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
