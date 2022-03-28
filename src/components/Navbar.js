import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  return (
    <>
      <div className="header header-grid fixed-header row-flex">
        <nav className="navbar row-flex">
          <Link className="m-l-3" to="/">
            <h3 className="logo">
              Note <span className="text-shd">it!</span>
            </h3>
          </Link>
          <ul className={`nav-items row-flex no-bullet ${isNavVisible ? "show-nav" : ""}`}>
            <li className="btn nav-link-btn h3 m-v-2 m-r-3" onClick={() => setNavVisible(false)}>
              <Link to="/">Notes</Link>
            </li>
          </ul>

          <ul className="row-flex no-bullet">
            <li className="dark-mode icon-toggle icon-btn rd-bdr grid-ctr colored-text m-r-3"></li>
            <li className="nav-icon-btn icon-btn rd-bdr grid-ctr wt-text m-r-3">
              <Link to="/" className="grid-ctr">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span className="nav-icon-text h6 cursor wt-text">Profile</span>
              </Link>
            </li>
            <li
              className="hamburger icon-toggle icon-btn rd-bdr grid-ctr colored-text m-r-3"
              onClick={() => setNavVisible((prev) => !prev)}
            >
              <i className={`${isNavVisible ? "fa fa-times" : "fa fa-bars"}`} aria-hidden="true"></i>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
