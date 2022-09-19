import React from "react";
import { FaHome } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header">
        <div className="container-fluid">
          <div className="header__content d-flex align-items-center justify-content-between flex-wrap">
            <div className="header__left">
              <div className="header__left-logo d-flex align-items-center fw-bold">
                <FaHome className="me-2" /> Dashboard
              </div>
            </div>
            <div className="header-right">
              <div className="header__right-userdetails">
                <div className="notification me-3">
                  <span className="count">8</span>
                  <IoMdNotifications />
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle fw-bold"
                    type="button"
                  >
                    <BsPersonSquare className="me-2" />
                    Jhon
                  </button>
                  <div className="dropdown-menu">
                    <NavLink to="/profile">
                      <a className="dropdown-item">Details</a>
                    </NavLink>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
