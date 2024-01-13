import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./SingleProduct.css";
import { useContext, useState } from "react";
import ShopingContext from "../context/shopingContext";
import Button from "../components/Button";

function SingleProduct() {
  const { state, dispatch } = useContext(ShopingContext);
  const { id } = useParams();
  const product = state.data.filter((item) => item.id === id);
  const [item, setItem] = useState(product[0].fields);

  function addToCart(e) {
    e.preventDefault();

    let isTrue = false;

    state.cart.forEach((product) => {
      if (product.id === id) {
        isTrue = true;
      }
    });

    console.log(isTrue);

    const productObj = {
      id: id,
      name: item.name,
      image: item.image[0].thumbnails.small.url,
      price: item.price,
      quantity: 1,
      total: item.price,
    };

    if (isTrue) {
      dispatch({ type: "INC_QUANTITY", payload: id });
      dispatch({ type: "TOTAL_PRICE" });
      dispatch({ type: "OPEN_CART" });
      return;
    }

    dispatch({ type: "ADD_TO_CART", payload: productObj });
    dispatch({ type: "TOTAL_PRICE" });
    dispatch({ type: "OPEN_CART" });
  }

  console.log(state);
  return (
    <main className="product-page">
      <Navbar />
      <section className="container single-product">
        <div className="image-div">
          <img src={item.image[0].thumbnails.full.url} alt={item.name} />
        </div>
        <div className="info-div">
          <h3 className="product-name">{item.name}</h3>
          <h4 className="company-name">By {item.company}</h4>
          <p className="product-price">${item.price}</p>
          <p className="color-line">
            <span className="color"></span>
            <span className="color"></span>
          </p>

          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              porro rerum est cupiditate ex! Adipisci corporis laborum officia
              molestiae repellat quis velit nulla voluptatem odio, dolorem, modi
              veniam ipsam obcaecati voluptatum. Harum, at temporibus officiis
              ullam dolorem fugit aut animi quasi, odit, repudiandae perferendis
              totam doloribus eos saepe in unde! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Odio porro rerum est cupiditate ex!
              Adipisci corporis laborum officia molestiae repellat quis velit
              nulla voluptatem odio, dolorem, modi veniam ipsam obcaecati
              voluptatum. Harum, at temporibus officiis ullam dolorem fugit aut
              animi quasi, odit, repudiandae perferendis totam doloribus eos
              saepe in unde!
            </p>
          </div>

          <Button button={true} onClick={addToCart}>
            Add to cart
          </Button>
        </div>
      </section>
    </main>
  );
}

export default SingleProduct;
