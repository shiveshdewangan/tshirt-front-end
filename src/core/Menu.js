import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.path === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="container d-flex justify-content-around nav nav-tabs">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          to="/cart"
          className="nav-link"
        >
          Cart
        </Link>
      </li>
      {isAuthenticated() && !isAuthenticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            to="/user/dashboard"
            className="nav-link"
          >
            U. Dashboard
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            to="/admin/dashboard"
            className="nav-link"
          >
            A. Dashboard
          </Link>
        </li>
      )}

      {!isAuthenticated() && (
        <>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              to="/signup"
              className="nav-link"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              to="/signin"
              className="nav-link"
            >
              Sign In
            </Link>
          </li>
        </>
      )}
      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Sign Out
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
