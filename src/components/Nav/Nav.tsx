import React from "react";
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src="./pic/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./About-us/About-us.tsx">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Contact/Contact.tsx">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Coarses/Coarses.tsx">
                Coarses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Login/Login.tsx">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Register/Register.tsx">
                Signup
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
