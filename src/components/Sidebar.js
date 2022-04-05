import { useModal } from "contexts/ModelContext";
import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "toolkit/data/sidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSidebar } from "contexts/SidebarContext";

export const Sidebar = () => {
  const { setModalOpen } = useModal();
  const { showFilterBar, setShowFilterBar } = useSidebar();
  const location = useLocation();
  return (
    <div className={`side-bar notefeed-sidebar w-20p ${showFilterBar ? "show-filter" : ""}`}>
      <div className="side-bar-title title row-flex p-v-4 p-h-3">
        <button
          className="btn primary-btn create-btn"
          onClick={() => {
            setModalOpen(false);
            setShowFilterBar(false);
          }}
        >
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
        {sidebarData?.map(({ _id, title, link, icon }) => (
          <Link
            to={link}
            key={_id}
            className={`filter-list cursor p-l-2 p-1 full-wd ${location.pathname === link ? "active-sidebar" : ""}`}
            onClick={() => setShowFilterBar(false)}
          >
            <FontAwesomeIcon icon={icon} />
            <span className="p-l-1">{title}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};
