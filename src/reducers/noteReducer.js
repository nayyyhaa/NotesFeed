export const noteReducer = (state, action) => {
  const index = state.findIndex((el) => el.id === action.payload.id);
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, { ...action.payload, id: state.length + 1, createdOn: new Date() }];
    case "EDIT_NOTE":
      return [...state.slice(0, index), { ...state[index], ...action.payload }, ...state.slice(index + 1)];
    case "ARCHIVE_NOTE":
      return state.filter((el) => el.id !== action.payload.id);
    case "DELETE_NOTE":
      return state.filter((el) => el.id !== action.payload.id);
    default:
      return state;
  }
};
