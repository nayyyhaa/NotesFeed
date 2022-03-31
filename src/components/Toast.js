import { useToast } from "contexts/ToastContext";

export const Toast = ({ state, msg }) => {
  const { toast, dispatchToast } = useToast();
  const colorMap = {
    success: {
      color: "green",
      icon: "fa-check-circle-o",
    },
    error: {
      color: "red",
      icon: "fa-exclamation-circle",
    },
    warning: {
      color: "yellow",
      icon: "fa-exclamation-triangle",
    },
    default: {
      color: "default",
    },
  };
  return (
    <>
      <div
        className={`toast example-toast ${colorMap[state].color}-content row-flex m-1 p-1 ${
          toast.isToastVisible ? "show-toast" : ""
        }`}
      >
        <p className="toast-msg m-r-1">
          <i className={`fa ${colorMap[state].icon} m-r-1`} aria-hidden="true"></i>
          {msg}
        </p>
        <i
          className="icon-toggle p-1 icon-btn grid-ctr rd-bdr fa fa-times"
          aria-hidden="true"
          onClick={() => dispatchToast({ type: "HIDE_TOAST" })}
        ></i>
      </div>
    </>
  );
};
