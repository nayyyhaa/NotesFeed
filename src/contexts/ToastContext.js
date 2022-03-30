import { createContext, useContext, useReducer, useEffect } from "react";
import { ToastReducer } from "reducers/toastReducer";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toast, dispatchToast] = useReducer(ToastReducer, { isToastVisible: false, state: "default", msg: "" });

  useEffect(() => {
    let timerId = setTimeout(() => {
      dispatchToast({ type: "HIDE_TOAST" });
      return () => clearTimeout(timerId);
    }, 5000);
  });

  return <ToastContext.Provider value={{ toast, dispatchToast }}>{children}</ToastContext.Provider>;
};

const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
