import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <nav className="navbar bg-opacity-50 navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} width="70px" height="70px" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" />
            <li className="nav-item">
              <Link
                className="nav-link active text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-dark"
                aria-current="page"
                to="/skills"
              >
                Skills
              </Link>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="#"
              >
                Projects
              </a>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link active text-dark"
                aria-current=""
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-dark"
                aria-current=""
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <form className="d-flex ms-1">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success bg-dark text-light"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
