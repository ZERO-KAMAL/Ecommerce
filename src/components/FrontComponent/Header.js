import React, { useRef, useEffect } from "react";
import { BsCart4, BsPersonCircle } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import constData from "../../utils/AppConstants";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((state) => state.cart);
  const div = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY !== 0) {
        div.current.style.position = "sticky";
        div.current.style.top = 0;
      } else {
        div.current.style.position = "relative";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div id="header" ref={div}>
        <div className="container">
          <div className="header-top d-flex align-items-center justify-content-between">
            <div className="brand-logo">
              <img
                className="brand-logo__img"
                src={constData.BRAND_LOGO}
                alt=""
              ></img>
            </div>
            <div className="search__bar w-50">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="search for your product"
                  aria-label="Recipient's username"
                  aria-describedby="search-bar"
                ></input>
                <span className="input-group-text" id="search-bar">
                  <BiSearchAlt></BiSearchAlt>
                </span>
              </div>
            </div>
            <div className="user__status d-flex align-items-center">
              <NavLink to="/view-cart" className="cart__counter">
                <BsCart4></BsCart4>
                <span>{items.cartItems.length}</span>
              </NavLink>
              <div className="user__name ms-3">
                <BsPersonCircle></BsPersonCircle>
                <span className="ms-2">kamal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="nav__menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/groceries">Groceries</NavLink>
                </li>
                <li>
                  <a href="">Fashion</a>
                </li>
                <li>
                  <a href="">Automobile</a>
                </li>
                <li>
                  <a href="">Fitness</a>
                </li>
                <li>
                  <a href="">For Kids</a>
                </li>
                <li>
                  <a href="">Lifestyle</a>
                </li>
                <li>
                  <a href="">More</a>
                </li>
              </ul>
            </div>

            <div className="mobile__menu">
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-primary hamburgar"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"
                >
                  <GiHamburgerMenu></GiHamburgerMenu>
                </button>
                <div className="user__status d-flex align-items-center">
                  <NavLink to="/view-cart" className="cart__counter">
                    <BsCart4></BsCart4>
                    <span>{items.cartItems.length}</span>
                  </NavLink>
                  <div className="user__name ms-3">
                    <BsPersonCircle></BsPersonCircle>
                    <span className="ms-2">kamal</span>
                  </div>
                </div>
              </div>
              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasWithBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBackdropLabel"
                  >
                    Menu
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="nav__menu">
                    <ul>
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/groceries">Groceries</NavLink>
                      </li>
                      <li>
                        <a href="">Fashion</a>
                      </li>
                      <li>
                        <a href="">Automobile</a>
                      </li>
                      <li>
                        <a href="">Fitness</a>
                      </li>
                      <li>
                        <a href="">For Kids</a>
                      </li>
                      <li>
                        <a href="">Lifestyle</a>
                      </li>
                      <li>
                        <a href="">More</a>
                      </li>
                    </ul>
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
