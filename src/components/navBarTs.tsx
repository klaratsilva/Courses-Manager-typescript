import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <Link className="navbar-brand sm" to="/">
        COURSE MANAGER
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink className="nav-link" to="/courses">
            Courses <span className="sr-only">(current)</span>
          </NavLink>

          <NavLink className="nav-link" to="/student-assignment">
            Student Assignment
          </NavLink>
          <NavLink className="nav-link" to="/timetable">
            Timetable
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
