import { HiSearchCircle } from "react-icons/hi";
import "./FeatureProduct.css";
import { Link } from "react-router-dom";

function FeatureProduct({ product }) {
  const itemData = product.fields;
  const image = itemData.image[0].thumbnails.small.url;
  return (
    <article className="feature-item">
      <div className="feature-image">
        <div className="overlay">
          <Link className="search-icon" to={`/product/${product.id}`}>
            <HiSearchCircle />
          </Link>
        </div>
        <img src={image} alt="product image" />
      </div>
      <h3>{itemData.name}</h3>
      <p>$ {itemData.price}</p>
    </article>
  );
}

export default FeatureProduct;
