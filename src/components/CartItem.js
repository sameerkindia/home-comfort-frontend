import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
import "./CartItem.css";
import { useContext } from "react";
import ShopingContext from "../context/shopingContext";

function CartItem({ product }) {
  const { dispatch } = useContext(ShopingContext);

  function removeItem() {
    dispatch({ type: "REMOVE", payload: product.id });
    dispatch({ type: "TOTAL_PRICE" });
  }

  function decItem() {
    if (product.quantity <= 1) {
      dispatch({ type: "REMOVE", payload: product.id });
      dispatch({ type: "TOTAL_PRICE" });
      return;
    }
    dispatch({ type: "DEC_QUANTITY", payload: product.id });
    dispatch({ type: "TOTAL_PRICE" });
  }

  function incItem() {
    dispatch({ type: "INC_QUANTITY", payload: product.id });
    dispatch({ type: "TOTAL_PRICE" });
  }

  return (
    <li className="cart-item">
      <div className="image-box">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="info-box">
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <p className="remove-btn" onClick={removeItem}>
          remove
        </p>
      </div>
      <div className="btn-box">
        <HiArrowNarrowUp onClick={incItem} />
        <span>{product.quantity}</span>
        <HiArrowNarrowDown onClick={decItem} />
      </div>
    </li>
  );
}

export default CartItem;
