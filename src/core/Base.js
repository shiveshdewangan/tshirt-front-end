import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = "text-white p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron text-white text-center">
        <h2 className="display-5">{title}</h2>
        <p className="display-5 p-2 m-auto">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container-fluid text-center">
        <span className="text-muted">
          An Amazing <span className="text-white">MERN Bootcamp</span>
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
