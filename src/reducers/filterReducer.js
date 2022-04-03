export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "SET_LABELS":
      return {
        ...state,
        labelsSelected: action.payload.isChecked
          ? [...state.labelsSelected, action.payload.type]
          : state.labelsSelected.filter((cat) => cat !== action.payload.type),
      };
    case "CLEAR_ALL":
      return {
        sortBy: null,
        labelsSelected: [],
      };
    default:
      return state;
  }
};
