import { HiOutlineShoppingCart } from "react-icons/hi";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import ShopingContext from "../context/shopingContext";

function Navbar({ isClass }) {
  const { state, dispatch } = useContext(ShopingContext);

  function openCart() {
    dispatch({ type: "OPEN_CART" });
  }

  return (
    <nav className={`${isClass || "navbar"}`}>
      <div className="nav-div container">
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/product">
            Product
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </div>
        <div className="logo">
          <Link to="/" class="link">
            <h1>home comfort</h1>
          </Link>
        </div>
        <div class="icon link">
          <HiOutlineShoppingCart className="cart-icon" onClick={openCart} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
