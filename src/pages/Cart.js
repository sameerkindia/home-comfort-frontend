import { HiArrowCircleLeft } from "react-icons/hi";
import "./Cart.css";
import { useContext } from "react";
import ShopingContext from "../context/shopingContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { state, dispatch } = useContext(ShopingContext);

  function closeCart() {
    dispatch({ type: "CLOSE_CART" });
  }

  return (
    <aside className={`cart-page ${state.cartOpen && "open"}`}>
      <div className="overlay"></div>
      <div className="cart">
        <span className="close-btn">
          <HiArrowCircleLeft onClick={closeCart} />
        </span>
        <p className="heading">Your Bag</p>
        <ul>{/* <CartItem product={state.cart[0]} /> */}</ul>
      </div>
    </aside>
  );
}

export default Cart;
