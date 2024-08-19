import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink to={"/"} className="navbar-brand" href="#">
            <span className="brand-name-1">Fash</span><span className="brand-name-2">Io</span>
          </NavLink>

          <div className="search-bar d-flex">
  <form className="form-inline my-2 my-lg-0 d-flex">
    <input
      className="form-control mr-sm-2 rounded-search-bar"
      type="search"
      placeholder="Search for Product, Brand and moreee...."
      aria-label="Search"
    />
  </form>
  <button>
  <i class="fa-solid fa-magnifying-glass"></i>
  </button>
</div>

          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link" href="#">
              <i class="fa-solid fa-house"></i> Home
                <span className="sr-only">(current )</span>
              </NavLink>
            </li>
            

            <li className="nav-item">
              <NavLink to={"/login"} className="nav-link" href="#">
              <i class="fa-solid fa-right-to-bracket"></i> Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={"/cart"} className="nav-link" href="#">
              <i class="fa-solid fa-cart-shopping"></i> Cart(0)
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
