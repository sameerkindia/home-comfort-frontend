import { HiArrowCircleLeft } from "react-icons/hi";
import "./Cart.css";
import { useContext } from "react";
import ShopingContext from "../context/shopingContext";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

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
        <div className="underline"></div>
        {state.cart.length === 0 && (
          <p className="no-product">Please add product to cart</p>
        )}

        <ul>
          {state.cart.map((product) => {
            return <CartItem product={product} key={product.id} />;
          })}
        </ul>

        <div className="price-box">
          <p>
            <span>Total :</span> <span>{state.totalPrice}</span>
          </p>
          <Button button={true}>Cheack out</Button>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
