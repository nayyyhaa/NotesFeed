export const ToastReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return { isToastVisible: true, state: action.payload.state, msg: action.payload.msg };
    case "HIDE_TOAST":
      return { isToastVisible: false, state: "default", msg: "" };
    default:
      return state;
  }
};