import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
import "./CartItem.css";

function CartItem({ product }) {
  return (
    <li className="cart-item">
      <div className="image-box">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="info-box">
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <p className="remove-btn">remove</p>
      </div>
      <div className="btn-box">
        <HiArrowNarrowUp />
        <span>{product.quantity}</span>
        <HiArrowNarrowDown />
      </div>
    </li>
  );
}

export default CartItem;
