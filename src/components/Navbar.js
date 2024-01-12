import { HiOutlineShoppingCart } from "react-icons/hi";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({ isClass }) {
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
        <div class="icon">
          <Link to="/cart" class="link">
            <HiOutlineShoppingCart className="cart-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
