import { useModal } from "contexts/ModelContext";
import { useState } from "react";

export const Sidebar = () => {
  const { setModalOpen } = useModal();
  const [showFilterBar, setShowFilterBar] = useState(true);
  return (
    <>
      <div className={`side-bar notefeed-sidebar w-20p ${showFilterBar ? "show-filter" : ""}`}>
        <div className="side-bar-title title row-flex p-v-4 p-h-3">
          <button className="btn primary-btn create-btn" onClick={() => setModalOpen(false)}>
            Create Note
          </button>
          <p
            className="icon-toggle icon-btn sidebar-close rd-bdr grid-ctr colored-text"
            onClick={() => setShowFilterBar(false)}
          >
            <i className="fa fa-close" aria-hidden="true"></i>
          </p>
        </div>
        <ul className="sidebar-items no-bullet col-flex flex-start no-wrap p-h-2 m-b-3">
          <li className="line-decoration"></li>
          <li className="filter-list active-sidebar cursor p-l-2 p-1 full-wd">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span className="p-l-1">Home</span>
          </li>
          <li className="filter-list cursor p-l-2 p-1 full-wd">
            <i className="fa fa-tags" aria-hidden="true"></i>
            <span className="p-l-1">Labels</span>
          </li>
          <li className="filter-list cursor p-l-2 p-1 full-wd">
            <i className="fa fa-archive" aria-hidden="true"></i>
            <span className="p-l-1">Archives</span>
          </li>
          <li className="filter-list cursor p-l-2 p-1 full-wd">
            <i className="fa fa-trash" aria-hidden="true"></i>
            <span className="p-l-1">Trash</span>
          </li>
        </ul>
      </div>
    </>
  );
};
