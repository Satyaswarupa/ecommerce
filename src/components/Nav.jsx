import React from "react";
import "../styles/Nav.scss";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="https://omitrek.com/images/omilogo.png" alt="logo" height={"40px"} />
      </div>
      <div class="search-bar">
        <input type="text" class="search-input" placeholder="Search for products" />
        <div class="search-icon"><FaSearch /></div>
    </div>
    <div className="account">
    <MdOutlineAccountCircle />
    <h4>razz</h4>
    </div>

    <div className="account">
    <Link to={"/cart"}><BsCart3 />0</Link>
    </div>

    <div className="account">
    <img src="https://omitrek.com/images/Seller-icon.svg" alt="seller" />
    <h4>Become a seller</h4>
    </div>
    </nav>
  );
};

export default Nav;
