import { Link, useLocation } from "react-router-dom";
import { useUser } from "contexts/UserContext";
import { useSidebar } from "contexts/SidebarContext";
import { useAuth } from "contexts/AuthContext";

export const Navbar = () => {
  const { setShowFilterBar } = useSidebar();
  const { setUser } = useUser();
  const { auth } = useAuth();
  const location = useLocation();

  return (
    <div className="header header-grid fixed-header row-flex">
      <nav className="navbar row-flex">
        {location.pathname !== "/" && (
          <div
            className="hamburger icon-toggle icon-btn rd-bdr grid-ctr colored-text m-l-3"
            onClick={() => setShowFilterBar((prev) => !prev)}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        )}
        <Link className="m-l-3" to="/">
          <h3 className="logo">
            Notes<span className="text-shd">feed</span>
          </h3>
        </Link>
        <ul className="nav-items row-flex no-bullet">
          <li className="btn nav-link-btn h3 m-v-2 m-r-3">
            <Link to="/notesfeed">Notes</Link>
          </li>
        </ul>

        <ul className="row-flex no-bullet">
          <li
            className="dark-mode icon-toggle icon-btn rd-bdr grid-ctr colored-text m-r-3"
            onClick={() => {
              setUser((prev) => ({ ...prev, isDark: !prev.isDark }));
            }}
          ></li>
          <li className="nav-icon-btn icon-btn rd-bdr grid-ctr wt-text m-r-3">
            <Link to={auth.isAuth ? "/profile" : "/login"} className="grid-ctr">
              <i className="fa fa-user" aria-hidden="true"></i>
              <span className="nav-icon-text h6 cursor wt-text">Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
